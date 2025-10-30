<script lang="ts" setup>
import Combobox from '@/components/Combobox.vue'
import DialogModal from '@/components/DialogModal.vue'
import { computed, onMounted, ref } from 'vue'
const servicePrompt = 'All Service Types'
const countyPrompt = 'All Counties'
import MapView from '@/components/MapView.vue'
import { useRafikeyWebstore } from '@/stores'



export interface ClinicDetail {
  id: number
  clinic_name: string
  services: string
  location: string
  phone: string
  website: string
  latitude: number
  longitude: number
  google_link: string
  source_country: string
  phone_combined: string | null
  email_combined: string | null
}
const rafikeyStore = useRafikeyWebstore()
const isLoading = ref(false)
const isError = ref(false)

onMounted(() => {
  isLoading.value = true
  rafikeyStore.getClinics()
    .then(res =>{
      if(res){
        if(res.result === 'success'){
          rafikeyStore.clinics = res.data
          console.log(res.data.length)
        } else{
          isError.value = true
        }
      }
    })
    .catch(err =>{
      isError.value = true
      console.log("Error fetching clinics", err)
    })
    .finally(()=>{
      isLoading.value = false
    })
})

const counties = [
  { id: 1, name: 'Mombasa' },
  { id: 2, name: 'Kwale' },
  { id: 3, name: 'Kilifi' },
  { id: 4, name: 'Tana River' },
  { id: 5, name: 'Lamu' },
  { id: 6, name: 'Taita-Taveta' },
  { id: 7, name: 'Garissa' },
  { id: 8, name: 'Wajir' },
  { id: 9, name: 'Mandera' },
  { id: 10, name: 'Marsabit' },
  { id: 11, name: 'Isiolo' },
  { id: 12, name: 'Meru' },
  { id: 13, name: 'Tharaka-Nithi' },
  { id: 14, name: 'Embu' },
  { id: 15, name: 'Kitui' },
  { id: 16, name: 'Machakos' },
  { id: 17, name: 'Makueni' },
  { id: 18, name: 'Nyandarua' },
  { id: 19, name: 'Nyeri' },
  { id: 20, name: 'Kirinyaga' },
  { id: 21, name: 'Murang’a' },
  { id: 22, name: 'Kiambu' },
  { id: 23, name: 'Turkana' },
  { id: 24, name: 'West Pokot' },
  { id: 25, name: 'Samburu' },
  { id: 26, name: 'Trans Nzoia' },
  { id: 27, name: 'Uasin Gishu' },
  { id: 28, name: 'Elgeyo-Marakwet' },
  { id: 29, name: 'Nandi' },
  { id: 30, name: 'Baringo' },
  { id: 31, name: 'Laikipia' },
  { id: 32, name: 'Nakuru' },
  { id: 33, name: 'Nairobi' },
]

const services = [
  { id: 1, name: 'Contraception' },
  { id: 2, name: 'STI Testing' },
  { id: 3, name: 'Counseling' },
]


const selectedClinic = ref<ClinicDetail>()
const isShowDialog = ref(false)

const colors = ref([
  'red',
  'green',
  'blue',
  'pink',
  'lime',
  'emerald',
  'teal',
  'purple',
  'gray',
  'cyan',
])


const openModal = (clinicId: number) => {
  isShowDialog.value = true
  selectedClinic.value = rafikeyStore.clinics.find(clinic => clinic.id === clinicId)
}

const handleCategory = (val: string) => {
  console.log(val)
}

const handleService = (val: string) => {
  console.log(val)
}

const reload = () =>{
  window.location.reload()
}
</script>
<template>
  <div class="pt-[80px]">
    <main class="min-h-screen font-pt-sans-regular">
      <section class="flex-col grad1 py-10">
        <div class="text-center justify-center items-center">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight"
          >
            Find a Clinic Near You
          </h1>
          <p class="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Search for SRHR-friendly clinics and support centers near you.
          </p>
        </div>
      </section>
      <section class="py-8 bg-white shadow-md sticky md:top-20 top-10 z-40">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 lg:gap-4 gap-8">
            <div class="relative md:col-span-2">
              <span
                class="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-800"
                >search</span
              >
              <input
                class="w-full pl-10 pr-4 py-3 bg-background-light placeholder:text-stone-800 border border-gray-300 text-stone-800 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Search by keyword (e.g., clinic name, service)"
                type="text"
              />
            </div>
            <div>
              <Combobox
                :combo-props="services"
                :prompt="servicePrompt"
                @combo-choice="handleService"
              />
            </div>
            <div>
              <Combobox
                :combo-props="counties"
                :prompt="countyPrompt"
                @combo-choice="handleCategory"
              />
            </div>
          </div>
        </div>
      </section>
      <div class="container h-96 mx-auto px-4 py-8">
        <div v-if="!isError && !isLoading">
          <div class="lg:grid lg:grid-cols-10 lg:gap-8" v-if="rafikeyStore.clinics">
            <div  class="lg:col-span-4 mb-8 lg:mb-0">
              <div class="block lg:hidden mb-4">
                <button
                  class="w-full bg-casablanca-300 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
                  id="toggleMapBtn"
                >
                  <span class="material-icons-outlined">map</span>
                  <span>View on Map</span>
                </button>
              </div>

              <!--            Clinics display-->
              <div class="space-y-4 md:max-h-[70vh] overflow-y-auto pr-2" id="clinicList">
                <div
                  v-for="clinic in rafikeyStore.clinics"
                  :key="clinic.id"
                  class="bg-white p-5 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-x-1 border-2 border-transparent transition-all"
                  id="card1"
                >
<!--                  <h3 class="text-xl font-bold text-gray-900">{{ clinic.clinic_name }}</h3>-->
                  <p class="text-sm text-pink-500 dark:text-pink-400 font-medium mt-1">
                    {{ clinic.clinic_name}}
                  </p>
                  <p class="text-stone-700 mt-2 flex items-center">
                    <span class="material-icons-outlined text-base mr-2">location_on</span>
                    {{ clinic.location}}
                  </p>
                  <button
                    class="mt-4 w-full bg-sky-200 text-primary text-sky-500 py-2 px-4 rounded-lg font-semibold hover:bg-sky-400/20 transition-colors"
                    @click="openModal(clinic.id)"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 lg:block hidden">
              <MapView  />
            </div>
          </div>
          <div v-else  class=" h-full flex justify-center items-center flex-col gap-4">
            <img  src="@/assets/images/no-data.svg" alt="no-data" class="md:w-64 w-44" />
            <span class="text-lg md:text-xl">No data yet</span>
          </div>
        </div>
        <div v-if="isLoading" class="flex h-full justify-center items-center">
          <span class="loading loading-spinner text-sky-500 loading-lg"></span>
        </div>
        <div v-if="isError" class=" gap-2 flex-col w-full h-full  flex justify-center items-center">
          <img src="@/assets/images/no-data.svg"  alt="no-data" class="w-32"/>
          <span class="text-lg md:text-xl">Something went wrong please refresh</span>
          <button
            @click="reload"
            class="btn rounded-lg shadow-none border-none bg-casablanca-300 btn-sm md:btn-lg normal-case"
          >
            <span class="text-sm">Refresh</span>
          </button>
        </div>
      </div>
    </main>
    <!--    end-->
    <teleport to="body">
      <DialogModal
        :is-open="isShowDialog"
        @close="isShowDialog = !isShowDialog"
        class="font-pt-sans-regular"
        v-if="selectedClinic"
      >
        <template #title>
          <div class="space-y-4">
            <div class="flex justify-between">
              <div>
                <p class="text-xl font-bold">{{ selectedClinic.clinic_name }}</p>
              </div>
              <div>
                <span class="material-icons-outlined">cancel</span>
              </div>
            </div>
            <div class="border-b fixed left-0 right-0 border-gray-200"></div>
          </div>
        </template>
        <template #body>
          <div class="py-4 space-y-4">
            <div>
              <p>Services Offered</p>
            </div>
            <div class="flex gap-2 flex-wrap mt-2">
<!--              <div-->
<!--                v-for="(service, index) in selectedClinic?.services"-->
<!--                :key="service"-->
<!--                class="flex"-->
<!--              >-->
<!--                <div-->
<!--                  class="px-3 py-1 rounded-full text-sm font-medium w-fit text-white"-->
<!--                  :class="[`bg-${colors[Number(index.toString().charAt(0))]}-100`]"-->
<!--                >-->
<!--                  <span-->
<!--                    class="font-bold"-->
<!--                    :class="[`text-${colors[Number(index.toString().charAt(0))]}-500`]"-->
<!--                    >{{ service }}</span-->
<!--                  >-->
<!--                </div>-->
<!--              </div>-->
              <span>{{selectedClinic.services}}</span>
            </div>
            <div>
<!--              <p class="font-bold">Operating Hours</p>-->
<!--              <div v-for="time in hourKey" :key="time">-->
<!--                <span class="font-bold text-sm md:text-lg" :style="{ textTransform: 'capitalize' }"-->
<!--                  >{{ time }}:</span-->
<!--                >-->
<!--                <span class="ml-2 text-sm md:text-lg">{{ selectedClinic?.hours[time] }}</span>-->
<!--              </div>-->
            </div>
<!--            <div v-for="cont in contactKeys" :key="cont" class="flex gap-2">-->
<!--              <span class="material-icons-outlined text-blue-500">{{-->
<!--                cont === 'email' ? 'email' : 'phone'-->
<!--              }}</span>-->
<!--              <span class="text-sm md:text-lg">{{ selectedClinic.contact[cont] }}</span>-->
<!--            </div>-->
            <div
              v-for="line in selectedClinic.phone.split('\n')"
              class="flex gap-2">
              <span class="material-icons-outlined text-blue-500">phone</span>
              <span>{{line}}</span>
            </div>
            <div
              class="flex gap-2" v-if="selectedClinic.email_combined">
              <span class="material-icons-outlined text-blue-500">phone</span>
              <span>{{selectedClinic.email_combined}}</span>
            </div>

            <div class="flex gap-2">
              <span class="material-icons-outlined text-blue-500">language</span>
              <a
                :href="selectedClinic.website"
                target="_blank"
                class="text-sm md:text-lg text-blue-600 hover:underline"
              >
                {{selectedClinic.website}}
              </a>
            </div>
            <div class="flex gap-2">
              <span class="material-icons-outlined text-blue-500">map</span>
              <a
                :href="selectedClinic.google_link"
                target="_blank"
                class="text-sm md:text-lg text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="w-full px-4 justify-center gap-4 flex">
            <button
              class="btn w-1/2 btn-ghost border-none bg-link-water-200 shadow-none rounded-lg py-2 px-4 mr-2"
            >
              <span class="material-icons-outlined">assistant_direction</span>
              <span class="text-xs md:text-sm">Get Direction</span>
            </button>
            <button
              class="w-1/2 btn btn-ghost border-none bg-blue-500 shadow-none rounded-lg py-2 px-4 mr-2"
            >
              <span class="material-icons-outlined text-white">chat_bubble_outline</span>
              <span class="text-white text-xs md:text-sm">Start Chat</span>
            </button>
          </div>
        </template>
      </DialogModal>
    </teleport>
  </div>
</template>

<style scope>
.grad1 {
  background-image: linear-gradient(to left, #f09a2f, #d23c8f, #171543);
}
</style>
