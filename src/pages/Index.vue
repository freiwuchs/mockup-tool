<template>
  <layout>
    <header class="header">
      <div class="header-text">
        <p class="title">Mockup Tool – Overview</p>
      </div>

      <nav class="nav" v-if="deviceTypes.length > 1">
        <span
          v-for="(deviceType, index) in deviceTypes"
          :key="`deviceType_${index}`"
          :class="[
            `${deviceType} button`,
            activeDeviceType == deviceType ? '' : 'hollow',
          ]"
          @click="clickTypeButton(deviceType)"
        >
          {{ deviceType }}
        </span>
      </nav>
    </header>
    
    <div class="bg">
      <div class="window-wrapper">
        <div class="">
          
        </div>
      </div>
    </div>

  </layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Mockup Tool – Overview',
    };
  },
  data() {
    return {
      loading: false,
      activeDeviceType: null,
      deviceTypes: [],
      images: {
        Dektop: [],
        Tablet: [],
        Smartphone: [],
      },
      currentImage: null,
    };
  },
  computed: {
    activeDeviceTypeClass() {
      if (this.activeDeviceType)
        return `${this.activeDeviceType.toLowerCase()}-view`;
      return '';
    },
    currentImageUrl() {
      if (this.currentImage)
        return this.currentImage.file.url;
      return null;
    },
    currentImageName() {
      if (this.currentImage)
        return this.currentImage.title;
      return null;
    },
    isPrevImage() {
      const imageIndex = this.images[this.activeDeviceType].findIndex(img => img == this.currentImage)
      const prevImage = this.images[this.activeDeviceType][imageIndex - 1];
      if (prevImage !== undefined) return prevImage;
      return false;
    },
    isNextImage() {
      const imageIndex = this.images[this.activeDeviceType].findIndex(img => img == this.currentImage)
      const nextImage = this.images[this.activeDeviceType][imageIndex + 1];
      if (nextImage !== 'undefined') return nextImage;
      return false;
    },
  },
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    setInitData() {
      this.images.Desktop = [ ...this.$page.project.desktopMockups ];
      this.images.Tablet = [ ...this.$page.project.tabletMockups ];
      this.images.Smartphone = [ ...this.$page.project.smartphoneMockups ];

      if (this.images.Desktop.length) this.deviceTypes.push('Desktop');
      if (this.images.Tablet.length) this.deviceTypes.push('Tablet');
      if (this.images.Smartphone.length) this.deviceTypes.push('Smartphone');

      this.activeDeviceType = this.getInitDeviceType();
      this.preloadImage(this.getInitImage());
    },
    getInitDeviceType() {
      if (this.images.Desktop.length) return 'Desktop';
      if (this.images.Tablet.length) return 'Tablet';
      if (this.images.Smartphone.length) return 'Smartphone';
    },
    getInitImage() {
      return this.images[this.activeDeviceType][0];
    },
    resetCurrentImage() {
      if (this.activeDeviceType)
        this.$set(this, 'currentImage', this.images[this.activeDeviceType][0]);
    },
    preloadImage(image) {
      if (process.isClient) {
        const imageEl = new Image();
        let timeout;
        imageEl.onload = () => {
          this.$set(this, 'currentImage', image);
          this.loading = false;
          clearTimeout(timeout);
        }
        imageEl.src = image.file.url;

        timeout = setTimeout(() => {
          this.loading = true;
        }, 50);
      }
    },
    getPrevImage() {
      const imageIndex = this.images[this.activeDeviceType].findIndex(img => img == this.currentImage)
      return this.images[this.activeDeviceType][imageIndex - 1];
    },
    getNextImage() {
      const imageIndex = this.images[this.activeDeviceType].findIndex(img => img == this.currentImage)
      return this.images[this.activeDeviceType][imageIndex + 1];
    },
    clickTypeButton(deviceType) {
      this.activeDeviceType = deviceType; 
      this.resetCurrentImage();
    },
    clickPrevImage() {
      if (!this.isPrevImage) return;
      this.preloadImage(this.getPrevImage());
    },
    clickNextImage() {
      if (!this.isNextImage) return;
      this.preloadImage(this.getNextImage());
    },
  }
};
</script>
