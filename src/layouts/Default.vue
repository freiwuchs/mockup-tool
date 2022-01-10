<template>
  <div class="layout">
    
    <div class="site-title">
      <p> Mockup Preview </p>
    </div>

    <slot />

    <footer class="footer">
      <p>You can navigate with</p>

      <div class="footer-nav">
        <svg width="82" height="25" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(.5)" fill="none" fill-rule="evenodd" opacity=".5"><rect fill="#D8D8D8" width="25" height="25" rx="3"/><path fill="#555" d="m9.257 12.963 4.772 3.085v-6.17z"/><rect fill="#D8D8D8" x="56" width="25" height="25" rx="3"/><rect fill="#D8D8D8" opacity=".3" x="28" width="25" height="11" rx="3"/><rect fill="#D8D8D8" opacity=".3" transform="matrix(1 0 0 -1 0 39)" x="28" y="14" width="25" height="11" rx="3"/><path fill="#555" d="m70.817 12.963-4.772 3.085v-6.17z"/><path fill="#555" opacity=".3" d="m40.037 2.479 3.085 4.772h-6.17zM40.037 22.521l3.085-4.772h-6.17z"/></g>
        </svg>
      </div>

    </footer>

  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Mockup Preview'
  },
  data() {
    return {
      activeDeviceType: 'Desktop',
      deviceTypes: [
        'Desktop',
        'Tablet',
        'Smartphone',
      ],
    };
  },
  computed: {
    activeDeviceTypeClass() {
      return `${this.activeDeviceType.toLowerCase()}-view`;
    },
    currentImage() {
      return 'http://placehold.it/1200x4000';
    },
  },
}
</script>


<style>
.bg {
  background-image: url('~@/assets/images/background.jpg');
  background-size: cover;
  width: 100%;
  min-height: calc(100vh - 121px - 1.5rem);
  padding-top: 1.5rem;
}
</style>