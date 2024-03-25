<!-- pages/index.vue (or any other page where you want to display the map) -->

<template>
    <div class="flex flex-col w-full h-full">
      <NuxtLeafletMap />

    </div>
  </template>
  
  <script>
 import NuxtLeafletMap from '@/components/cors/NuxtLeafletMap.vue';
  export default {
    components:{
        NuxtLeafletMap
    }
  }
  </script>
  