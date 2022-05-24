<template>
  <layout>
    <header class="header">
      <div class="header-text">
        <p class="title">{{ $page.project.title }}</p>
        <p class="subtitle">Version {{ $page.project.version }}</p>
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
        <div :class="`window ${activeDeviceTypeClass}`">
          <div class="window-header">
            <div class="bullets">
              <div class="red-bullet"></div>
              <div class="yellow-bullet"></div>
              <div class="green-bullet"></div>
            </div>

            <p class="browser-url"><span v-if="currentImageName">{{ currentImageName }}</span></p>

            <div class="navigate-icons">
              <svg 
                :class="{ 'disabled': !isPrevImage }" 
                class="navigate-icon" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                @click="clickPrevImage"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <svg 
                :class="{ 'disabled': !isNextImage }" 
                class="navigate-icon" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                @click="clickNextImage"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div class="wrapper-enlarge-view">
            <div class="enlarge-view">
              <div class="wrapper-svg">
                <svg
                  width="128"
                  height="129"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd" opacity=".6">
                    <g fill="#262626" fill-rule="nonzero">
                      <path
                        d="m86.901.026-2.7.9 9.1 9.3-30.1 1 .9 2.8 30.1-1-9.1 9.4.9 2.8 13.6-14-12.7-11.2zm-35.8 11.1-30.1 1 9.1-9.4-.9-2.7-13.6 14 12.8 11.1 2.7-.9-9.1-9.2 30.1-1-1-2.9zM84.401 128.026c-6.1 0-11.1-.1-11.6-.1h-1.1l-.2-1.1s-.5-1.4-4.2-6.4c-2.2-2.9-4.5-5.6-10.5-11.1-3.3-3-8.1-7.4-11.6-10.5-1.8-1.6-3.3-2.9-3.9-3.5-2.2-2.1-8.2-7.5-4.4-12.4 3.7-4.3 16.5 2.1 23 5.8-1.3-10.3-5.7-45.9-6.4-50.9-1-7.6 2.6-9.7 4.9-10.2 3.7-.9 6.2 2.3 7 4.1l.1.4 5.1 31.6c.3-.6.6-1.1 1-1.6 1.2-1.7 3-2.6 5.1-2.9 4-.5 6.6 2.6 8.1 5.2.4-.7 1-1.3 1.7-1.8 1.3-.8 2.8-1.1 4.5-.7 3.1.8 4.9 3.3 5.9 5.5 1.1-1.4 2.8-2.6 5.5-3 1.6-.2 3 .2 4.2 1.1 2.5 2 2.9 5.8 3 6.2l2.8 21.7c.8 6.1-2 13.5-4.4 20-1.9 5-3.6 9.7-3.3 12.5l.2 1.4-1.4.2c-4.6.4-12.5.5-19.1.5zm-10.6-2.9c3.9.1 20 .3 28-.4.1-3.3 1.7-7.6 3.5-12.4 2.3-6.2 4.9-13.3 4.3-18.7l-2.8-21.7c-.1-.9-.6-3.3-1.9-4.3-.6-.5-1.3-.6-2.1-.5-4.2.5-4.5 3.9-4.6 4.3l-2.8.2c0-.1-1.1-6.1-5.1-7.1-.9-.2-1.6-.1-2.2.3-1.2.8-1.7 2.7-1.8 3.4l-2.7.3c0-.1-2.3-7-6.6-6.5-1.4.2-2.4.8-3.2 1.8-2.5 3.3-1.6 9.7-1.4 11l.1.4-2.8.5-.1-.4-6.8-42.4c-.4-.9-1.8-3.1-3.8-2.7-2.3.5-3.2 2.9-2.7 7.1.7 5.9 6.7 53.7 6.7 53.7l.4 2.9-2.5-1.5c-9.1-5.5-20-9.9-21.8-7.8-1 1.3-1.5 3.5 4.1 8.6.7.6 2.1 1.9 3.9 3.5 3.5 3.1 8.4 7.5 11.6 10.5 6.1 5.7 8.5 8.5 10.8 11.5 2.5 3.4 3.7 5.3 4.3 6.4z"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <p class="first-text">Enlarge your browser window</p>
              <p class="second-text">
                To display the graphics correctly, your browser window must have
                a minimum with of 1250 pixels.
              </p>
            </div>
          </div>

          <div class="wrapper-no-support">
            <div class="no-support">
              <p class="primary-p">No mobile support</p>
              <p class="secundary-p">
                To see the mockups, open this link with your computer
              </p>
            </div>
          </div>

          <div class="wrapper-content">
            <div :class="{ 'loading': loading }" class="content">
              <img v-if="currentImageUrl && !loading" :src="currentImageUrl" alt="" />
              <div v-if="loading" class="psoload">
                <div class="straight"></div>
                <div class="curve"></div>
                <div class="center"></div>
                <div class="inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query Project ($path: String!) {
  project: contentfulProject(path: $path) {
    id,
    title,
    version,
    desktopMockups {
      title,
      file {
        url
      }
    },
    tabletMockups {
      title,
      file {
        url
      }
    },
    smartphoneMockups {
      title,
      file {
        url
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title,
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
    this.setInitData();
  },
  mounted() {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight') {
        this.clickNextImage();
      }
      if (e.key === 'ArrowLeft') {
        this.clickPrevImage();
      }
    });
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
