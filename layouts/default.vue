<template>
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">
        <slot />
      </main>
    </div>
  </template>
  
  <script>
  import Header from '~/components/cors/Header.vue';
  export default {
    head() {
      return {
        title: "Venturi initial test",
        meta: [ 
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        ],
        link: [
          { rel: "stylesheet", href: "~/assets/css/tailwind.css" },
        ],
      };
    },
    components : {
        Header
    },
    data() {
      return {
        activeLink: 'map' // Default active link is 'map'
      }
    },
    methods: {
      setActiveLink(link) {
        this.activeLink = link;
      }
    }
  };
  </script>
  