<template>
    <div class="flex flex-col min-h-screen">
      <corsHeader />
      <main class="flex-grow">
        <slot />
      </main>
    </div>
  </template>
  
  <script>
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
  