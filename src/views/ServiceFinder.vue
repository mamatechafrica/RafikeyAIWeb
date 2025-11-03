<script lang="ts" setup>
import DialogModal from '@/components/DialogModal.vue'
import { computed, onMounted, ref, watch } from 'vue'
import MapView from '@/components/MapView.vue'
import { useRafikeyWebstore } from '@/stores'
import LoadingShimmer from '@/components/LoadingShimmer.vue'

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
const clinicsData = ref<ClinicDetail[]>([])
const searchTerm = ref('')
const isLoadingSearch = ref(false)

const filteredClinics = computed(() => {
  const term = searchTerm.value.toLowerCase().trim()
  if (!term) return clinicsData.value
  return clinicsData.value.filter((clinic) => {
    const clinicName = clinic.clinic_name || ''
    const services = clinic.services || ''
    const location = clinic.location || ''
    return (
      clinicName.toLowerCase().includes(term) ||
      services.toLowerCase().includes(term) ||
      location.toLowerCase().includes(term)
    )
  })
})

// delay search for some time to show loading shimmers
watch(
  () => searchTerm.value,
  async () => {
    isLoadingSearch.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    isLoadingSearch.value = false
  }
)

onMounted(() => {
  isLoading.value = true
  rafikeyStore
    .getClinics()
    .then((res) => {
      if (res) {
        if (res.result === 'success') {
          clinicsData.value = res.data
          console.log(res.data)
        } else {
          isError.value = true
        }
      }
    })
    .catch((err) => {
      isError.value = true
      console.log('Error fetching clinics', err)
    })
    .finally(() => {
      isLoading.value = false
    })
})

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

const serviceList = computed(() =>
  selectedClinic.value?.services ? selectedClinic.value.services.split(',') : [],
)

const serviceClassMap = computed(() => {
  const classMap: Record<string, string> = {
    red: 'bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs',
    green: 'bg-green-100 text-green-500  px-2 py-1 rounded-full text-xs',
    blue: 'bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-xs',
    pink: 'bg-pink-100 text-pink-500 px-2 py-1 rounded-full text-xs',
    lime: 'bg-lime-100 text-lime-500 px-2 py-1 rounded-full text-xs',
    emerald: 'bg-emerald-100 text-emerald-500 px-2 py-1 rounded-full text-xs',
    teal: 'bg-teal-100 text-teal-500 px-2 py-1 rounded-full text-xs',
    purple: 'bg-purple-100 text-purple-500 px-2 py-1 rounded-full text-xs',
    gray: 'bg-gray-100 text-gray-500 px-2 py-1 rounded-full text-xs',
    cyan: 'bg-cyan-100 text-cyan-500 px-2 py-1 rounded-full text-xs',
  }
  const map = new Map<string, string>()
  serviceList.value.map((c, i) => {
    const colorName = colors.value[i % colors.value.length]
    map.set(c, classMap[colorName] || 'bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs')
  })
  return map
})

const openModal = (clinicId: number) => {
  isShowDialog.value = true
  selectedClinic.value = clinicsData.value.find((clinic) => clinic.id === clinicId)
}

const reload = () => {
  window.location.reload()
}
const destLng = ref(filteredClinics.value[0]?.longitude)
const destLat = ref(filteredClinics.value[0]?.latitude)
const clinicName = ref(filteredClinics.value[0]?.clinic_name)

const getDirections = () =>{
  if(selectedClinic.value){
    destLng.value = selectedClinic.value.longitude
    destLat.value = selectedClinic.value.latitude
    clinicName.value = selectedClinic.value.clinic_name
    setTimeout(()=>{
      isShowDialog.value = false
    }, 500)

  }
}

watch(()=> filteredClinics.value, (newVal)=>{
  if(newVal.length >0){
    destLng.value = newVal[0].longitude
    destLat.value = newVal[0].latitude
    clinicName.value = newVal[0].clinic_name
  }
} )

</script>
<template>
  <div class="h-screen md:overflow-y-hidden">
    <main class=" font-pt-sans-regular">
      <section class="lg:py-8 py-6 bg-white shadow-md fixed left-0 right-0 top-10 lg:top-14 z-9999">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 lg:gap-4 gap-8">
            <div class="relative md:col-span-2">
              <span
                class="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-800"
                >search</span
              >
              <input
                v-model="searchTerm"
                class="w-full pl-10 pr-4 placeholder:text-sm  placeholder:md:text-lg py-3 bg-background-light placeholder:text-stone-800 border border-gray-300 text-stone-800 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Search by keyword (e.g., clinic name, service)"
                type="text"
              />
            </div>
          </div>
        </div>
      </section>

      <div class="container md:mt-40 mt-28 h-96  mx-auto px-4 pt-8">
        <div v-if="!isError && !isLoading">
          <div class="lg:grid lg:grid-cols-10 lg:gap-8" v-if="filteredClinics.length > 0">
            <div class="lg:col-span-4 mb-8 lg:mb-0">
              <div v-if="isLoadingSearch">
                <div v-for="n in 3" :key="n" class="lg:col-span-4 mb-8">
                  <LoadingShimmer />
                </div>
              </div>
              <!--            Clinics display-->
              <div v-else class="space-y-4 md:max-h-[70vh] overflow-y-auto pr-2" id="clinicList">
                <div
                  v-for="clinic in filteredClinics"
                  :key="clinic.id"
                  class="bg-white p-5 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-x-1 border-2 transition-all"
                  id="card1"
                  :class="[(selectedClinic?.id === clinic.id || (!selectedClinic && filteredClinics[0]?.id === clinic.id)) ? 'border-sky-500' : 'border-transparent']"
                >
                  <!--                  <h3 class="text-xl font-bold text-gray-900">{{ clinic.clinic_name }}</h3>-->
                  <p class="text-sm text-pink-500 dark:text-pink-400 font-medium mt-1">
                    {{ clinic.clinic_name }}
                  </p>
                  <p class="text-stone-700 mt-2 flex items-center">
                    <span class="material-icons-outlined text-base mr-2">location_on</span>
                    {{ clinic.location }}
                  </p>
                  <button
                    class="mt-4 w-full bg-sky-200  text-sky-500 py-2 px-4 rounded-lg font-semibold hover:bg-sky-400/20 transition-colors"
                    @click="openModal(clinic.id)"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 lg:block hidden">
              <MapView  :clinicName="clinicName || filteredClinics[0].clinic_name" :destLatitude="destLat || filteredClinics[0].latitude" :destLongitude="destLng || filteredClinics[0].longitude"/>
            </div>
          </div>
          <div v-else class="h-full flex justify-center items-center flex-col gap-4">
            <img src="@/assets/images/no-data.svg" alt="no-data" class="md:w-64 w-44" />
            <span v-if="clinicsData.length > 0">No search found</span>
            <span v-else class="text-lg md:text-xl">No data yet</span>
          </div>
        </div>
        <div v-if="isLoading" class="flex h-full justify-center items-center">
          <span class="loading loading-spinner text-sky-500 loading-lg"></span>
        </div>
        <div v-if="isError" class="gap-2 flex-col w-full h-full flex justify-center items-center">
          <img src="@/assets/images/no-data.svg" alt="no-data" class="w-32" />
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
                <p class="text-lg text-slate-800 font-bold leading-none">{{ selectedClinic.clinic_name }}</p>
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
            <div v-if="selectedClinic.services">
              <div>
                <p>Services Offered</p>
              </div>
              <div class="flex gap-2">
                <div
                  class="flex flex-wrap mt-1"
                  v-for="service in selectedClinic.services.split(',')"
                  :key="service"
                >
                  <div :class="serviceClassMap.get(service)">
                    <span>{{ service }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!--            <div v-if="serviceList.operatingHours">-->
            <!--              <div>-->
            <!--                <p>Operating Hours</p>-->
            <!--              </div>-->
            <!--              <div class="flex gap-2 mt-1">-->
            <!--                <div-->
            <!--                  class="flex flex-wrap"-->
            <!--                  v-for="(line, index) in selectedClinic.operatingHours.split('\n')"-->
            <!--                  :key="index"-->
            <!--                >-->
            <!--                  <span>{{ line }}</span>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
            <div v-if="selectedClinic.phone">
              <div
                v-for="(line, index) in selectedClinic.phone.split('\n')"
                :key="index"
                class="flex gap-2"
              >
                <span class="material-icons-outlined text-blue-500">phone</span>
                <span>{{ line }}</span>
              </div>
            </div>
            <div class="flex gap-2" v-if="selectedClinic.email_combined">
              <span class="material-icons-outlined text-blue-500">phone</span>
              <span>{{ selectedClinic.email_combined }}</span>
            </div>

            <div class="flex gap-2" v-if="selectedClinic.website">
              <span class="material-icons-outlined text-blue-500">language</span>
              <a
                :href="selectedClinic.website"
                target="_blank"
                class="text-sm md:text-lg text-blue-600 hover:underline"
              >
                {{ selectedClinic.website }}
              </a>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="w-full px-4 justify-center gap-4 flex">
            <button
              @click.stop="getDirections"
              class="btn w-full btn-ghost border-none bg-sky-200  text-sky-500  shadow-none rounded-lg py-2 px-4 mr-2"
            >
              <span class="material-icons-outlined">assistant_direction</span>
              <span class="text-xs md:text-sm">Get Direction</span>
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
