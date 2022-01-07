<template>
  <div class="layout">
    
    <header class="header">
      <div class="header-text">
      <p class="title">Fedeli Redesign 2022</p>
      <p class="subtitle"> Version 2.1</p>
      </div>

      <nav class="nav">
        <a href="#" class="smartphone button hollow">Smartphone</a>
        <a href="#" class="tablet button hollow">Tablet</a>
        <a href="#" class="desktop button">Desktop</a>
      </nav>
    </header>

    <div class="bg">
      <div class="window">
        <div class="window-header"> 

            <div class="bullets">
              <div class="red-bullet"></div>
              <div class="yellow-bullet"></div>
              <div class="green-bullet"></div>
            </div>
            <p class="browser-url">Image Name</p>

            <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
            </div>


        </div>
      </div>
    </div>

    <footer class="footer">
      <p>You can navigate with</p>
      <div class="footer-nav">
        <svg width="82" height="25" xmlns="http://www.w3.org/2000/svg"><g transform="translate(.5)" fill="none" fill-rule="evenodd" opacity=".5"><rect fill="#D8D8D8" width="25" height="25" rx="3"/><path fill="#555" d="m9.257 12.963 4.772 3.085v-6.17z"/><rect fill="#D8D8D8" x="56" width="25" height="25" rx="3"/><rect fill="#D8D8D8" opacity=".3" x="28" width="25" height="11" rx="3"/><rect fill="#D8D8D8" opacity=".3" transform="matrix(1 0 0 -1 0 39)" x="28" y="14" width="25" height="11" rx="3"/><path fill="#555" d="m70.817 12.963-4.772 3.085v-6.17z"/><path fill="#555" opacity=".3" d="m40.037 2.479 3.085 4.772h-6.17zM40.037 22.521l3.085-4.772h-6.17z"/></g>
        </svg>

      </div>
    </footer>

  </div>
</template>

<style>
.bg {
  background-image: url('~@/assets/images/background.jpg');
  background-size: cover;
  width: 100%;
  height: 90vh;
  padding-top: 1.5rem;;
  /* position: relative; */
}
</style>