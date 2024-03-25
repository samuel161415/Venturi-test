<template>
      <header class="flex justify-between items-center bg-white p-2 md:p-4 px-[12px]  md:px-[24px] py-[12px] md:py-[14px] text-black h-[10vh]">
        <div class="flex items-center">
          <img src="../../static/logos/Logo.svg" alt="Logo" class="h-8 md:h-10 lg:h-12 mr-4" />
        </div>
  
        <nav class="flex space-x-4 py-[12px] md:py-[14px] justify-center items-center">
          <nuxt-link
            to="#"
            class="px-5 hover:text-green-500"
            :class="{ 'text-green-500': activeLink === 'map' }"
            @click="setActiveLink('map')"
          >Map</nuxt-link>
  
          <nuxt-link
            to="#"
            class="px-5 hover:text-green-500"
            :class="{ 'text-green-500': activeLink === 'requests' }"
            @click="setActiveLink('requests')"
          >Requests</nuxt-link>
  
          <nuxt-link
            to="#"
            class="px-5 hover:text-green-500"
            :class="{ 'text-green-500': activeLink === 'faq' }"
            @click="setActiveLink('faq')"
          >Frequently Asked Questions</nuxt-link>
        </nav>
  
        <div class="w-5 h-7">
         <img  class="object-cover w-full h-full" src="../../static/logos/notification.svg" alt="notification" />
        </div>
      </header>
</template>

<script>
export default {
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
}
</script>