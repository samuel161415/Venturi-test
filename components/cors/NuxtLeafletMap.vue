<template>
  <GoogleMap
    :api-key="runtimeConfig.public.GOOGLEMAPSAPIKEY"
    class="w-full h-[90vh] flex flex-col"
    :center="center"
    :zoom="10"
  >
    <MarkerCluster>
      <CustomMarker
        v-for="(location, index) in locations"
        :key="index"
        :options="{ position: location, anchorPoint: 'CENTER' }"
      >
        <div style="text-align: center">
          <div><p>{{ location_names[index] }}</p></div>
          <div class="w-5 h-10">
            <img
              src="../../static/logos/traffic.png"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </CustomMarker>
    </MarkerCluster>
  </GoogleMap>
</template>
<script setup>
import {
  GoogleMap,
  Marker,
  MarkerCluster,
  CustomMarker,
} from "vue3-google-map";

const runtimeConfig = useRuntimeConfig();

onMounted(() => {
 console.log('env',runtimeConfig.public.GOOGLEMAPSAPIKEY)
 })
const center = { lat: -31.56391, lng: 147.154312 };
const location_names = ['location_x','location_y','location_z','location_a','location_b','location_c']
const locations = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -31.66605, lng: 147.254313 },
  { lat: -31.77393, lng: 147.354314 },
  { lat: -31.44390, lng: 147.054310 },
  { lat: -31.5989, lng: 147.194311 },
  { lat: -31.36994, lng: 147.274310 },
  
];

</script>
