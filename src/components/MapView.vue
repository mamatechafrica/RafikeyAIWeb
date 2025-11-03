<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as L from 'leaflet'
import { useGoogleMaps } from '@/composables/useGoogleMaps'



const props = defineProps<{
  destLatitude: number
  destLongitude: number
  clinicName: string
}>()
onMounted(() => {
  // const map = L.map('map').setView([-1.286389, 36.817223], 7) // Nairobi coords
  //
  // // Add the title layer from OpenStreetMap
  //
  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '',
  // }).addTo(map)
  //
  // // Add marker and popup
  // L.marker([-1.286389, 36.817223])
  //   .addTo(map)
  //   .bindPopup('Wellness Hub Clinic<br>123 Health Ave, Nairobi')
  //   .openPopup()
  //
  // // console.log('Map pane', map.getPane)

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if(isMobile){
    navigator.geolocation.getCurrentPosition(
      pos =>{
        const link = `https://www.google.com/maps/dir/?api=1&origin=${pos.coords.latitude},${pos.coords.longitude}&destination=${props.destLatitude},${props.destLongitude}`
        window.location.href = link
      },
      ()=>{
        window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${props.destLatitude},${props.destLongitude}`
      }
    )

  } else{
getLocation()
  }
})

const initializeMap = ()=>{
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isMobile) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const link = `https://www.google.com/maps/dir/?api=1&origin=${pos.coords.latitude},${pos.coords.longitude}&destination=${props.destLatitude},${props.destLongitude}`
        window.location.href = link
      },
      () => {
        window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${props.destLatitude},${props.destLongitude}`
      },
    )
  } else {
    initializeMapDesktop()
  }
}

watch(
  () => [props.destLatitude, props.destLongitude],
  () => {
    initializeMapDesktop()
  },
)

const errorMessage = ref<string>('')
const loading = ref<boolean>(false)
const initializeMapDesktop = async () => {
  try {
    const googleMaps = await useGoogleMaps()

   //   check for geolocation support
   if (!navigator.geolocation) {
     errorMessage.value = 'Geolocation not supported by your browser'
     loading.value = false
     return
   }

   //   Get user's location
   navigator.geolocation.getCurrentPosition(
     (pos) => {
       const deviceLat = pos.coords.latitude
       const deviceLng = pos.coords.longitude

       //   initialize map centered between user and destination
       const map = new googleMaps.Map(document.getElementById('map') as HTMLDivElement, {
         center: { lat: deviceLat, lng: deviceLng },
         zoom: 10,
       })
       //   Add marker for user's location
       new googleMaps.Marker({
         position: { lat: deviceLat, lng: deviceLng },
         map,
         title: 'Current location',
       })

       new googleMaps.Marker({
         position: { lat: props.destLatitude, lng: props.destLongitude as number },
         map,
         title: props.clinicName,
       })

       //   set up direction service
       const directionsService = new googleMaps.DirectionsService()
       const directionsRenderer = new googleMaps.DirectionsRenderer({
         map,
         suppressMarkers: true, //we added custom markers
       })

       //   Request route
       directionsService.route(
         {
           origin: { lat: deviceLat, lng: deviceLng },
           destination: { lat: props.destLatitude, lng: props.destLongitude},
           travelMode: googleMaps.TravelMode.DRIVING,
         },
         (result, status) => {
           if (status === googleMaps.DirectionsStatus.OK && result) {
             directionsRenderer.setDirections(result)
           } else {
             errorMessage.value = 'Could not display directions due to: ' + status
           }
         },
       )
     },
     (err) => {
       errorMessage.value = 'Error getting location: ' + err.message
       loading.value = false
     },
   )
 }
catch(err){
    console.log("Failed to load Google Maps", err)
    errorMessage.value = 'Error loading Google Maps'
    loading.value = false
  }
}
</script>

<template>
  <div id="map" class="h-[70vh] rounded-lg shadow-md flex items-center justify-center"></div>
</template>

<style scoped>
#map {
  z-index: 0 !important;
}
</style>
