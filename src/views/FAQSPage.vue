<script lang="ts" setup>
import Combobox from '@/components/Combobox.vue'
import DialogModal from '@/components/DialogModal.vue'
import { computed, ref } from 'vue'
const servicePrompt = 'All Service Types'
const countyPrompt = 'All Counties'
import MapView from '@/components/MapView.vue'

export interface ClinicDetail {
  id: number
  name: string
  type: string
  address: string
  services: string[]
  hours: Record<string, string>
  contact: Record<string, string>
}

const clinicDetails = [
  {
    id: 1,
    name: 'Wellness Hub Clinic',
    type: 'Youth Center',
    address: '123 Health Ave, Nairobi',
    services: ['Contraception', 'STI Testing', 'Counseling', 'HIV Services'],
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
    },
    contact: {
      email: 'welnesshub@gmail.com',
      phone: '123456789',
    },
  },
  {
    id: 2,
    name: 'SafeCare Center',
    type: 'Public Hospital',
    address: '456 Support St, Mombasa',
    services: ['Contraception', 'STI Testing'],
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 2:00 PM',
      sunday: 'Closed',
    },
    contact: {
      email: 'welnesshub@gmail.com',
      phone: '123456789',
    },
  },
  {
    id: 3,
    name: 'Hope Clinic',
    type: 'Private Clinic',
    address: '789 Liberty Rd, Kisumu',
    services: ['Counseling', 'HIV Services'],
    hours: {
      monday: '8:30 AM - 5:30 PM',
      tuesday: '8:30 AM - 5:30 PM',
      wednesday: '8:30 AM - 5:30 PM',
      thursday: '8:30 AM - 5:30 PM',
      friday: '8:30 AM - 5:30 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed',
    },

    contact: {
      email: 'welnesshub@gmail.com',
      phone: '123456789',
    },
  },
  {
    id: 4,
    name: 'Community Care',
    type: 'NGO Center',
    address: '101 Unity Dr, Nakuru',
    services: ['Contraception', 'Counseling'],
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },

    contact: {
      email: 'welnesshub@gmail.com',
      phone: '123456789',
    },
  },
  {
    id: 5,
    name: 'Health First Clinic',
    type: 'Private Clinic',
    address: '202 Wellness Blvd, Eldoret',
    services: ['STI Testing', 'HIV Services'],
    hours: {
      monday: '8:00 AM - 4:00 PM',
      tuesday: '8:00 AM - 4:00 PM',
      wednesday: '8:00 AM - 4:00 PM',
      thursday: '8:00 AM - 4:00 PM',
      friday: '8:00 AM - 4:00 PM',
      saturday: '9:00 AM - 12:00 PM',
      sunday: 'Closed',
    },
    contact: {
      email: 'welnesshub@gmail.com',
      phone: '123456789',
    },
  },
  {
    id: 6,
    name: 'Family Care Center',
    type: 'Youth Center',
    address: '303 Family St, Nakuru',
    services: ['Contraception', 'Counseling'],
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed',
    },
    contact: {
      email: 'welnesshub@gmail.com',
      phone: '123456789',
    },
  },
] as ClinicDetail[]

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

const moreClinicDetails = ref<ClinicDetail>()
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
const hourKey = computed(() => {
  if(!moreClinicDetails.value) return []
  return Object.keys(moreClinicDetails.value.hours)
})
const contactKeys = computed(() => {
  if(!moreClinicDetails.value) return []
  return Object.keys(moreClinicDetails.value.contact)
})

const openModal = (clinicId: number) => {
  isShowDialog.value = true
  moreClinicDetails.value = clinicDetails.find((clinic) => clinic.id === clinicId)
}

const handleCategory = (val: string) => {
  console.log(val)
}

const handleService = (val: string) => {
  console.log(val)
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
      <div class="container mx-auto px-4 py-8">
        <div class="lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-4 mb-8 lg:mb-0">
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
                v-for="clinic in clinicDetails"
                :key="clinic.id"
                class="bg-white p-5 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-x-1 border-2 border-transparent transition-all"
                id="card1"
              >
                <h3 class="text-xl font-bold text-gray-900">{{ clinic.name }}</h3>
                <p class="text-sm text-pink-500 dark:text-pink-400 font-medium mt-1">
                  {{ clinic.type }}
                </p>
                <p class="text-stone-700 mt-2 flex items-center">
                  <span class="material-icons-outlined text-base mr-2">location_on</span>
                  {{ clinic.address }}
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
            <MapView />
          </div>
        </div>
      </div>
    </main>
    <!--    end-->
    <teleport to="body">
      <DialogModal
        :is-open="isShowDialog"
        @close="isShowDialog = !isShowDialog"
        class="font-pt-sans-regular"
        v-if="moreClinicDetails"
      >
        <template #title>
          <div class="space-y-4">
            <div class="flex justify-between">
              <div>
                <p class="text-xl font-bold">{{ moreClinicDetails?.name }}</p>
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
              <div
                v-for="(service, index) in moreClinicDetails?.services"
                :key="service"
                class="flex"
              >
                <div
                  class="px-3 py-1 rounded-full text-sm font-medium w-fit text-white"
                  :class="[`bg-${colors[Number(index.toString().charAt(0))]}-100`]"
                >
                  <span
                    class="font-bold"
                    :class="[`text-${colors[Number(index.toString().charAt(0))]}-500`]"
                    >{{ service }}</span
                  >
                </div>
              </div>
            </div>
            <div>
              <p class="font-bold">Operating Hours</p>
              <div v-for="time in hourKey" :key="time">
                <span class="font-bold text-sm md:text-lg" :style="{ textTransform: 'capitalize' }">{{ time }}:</span>
                <span class="ml-2 text-sm md:text-lg">{{ moreClinicDetails?.hours[time] }}</span>
              </div>
            </div>
            <div v-for="cont in contactKeys" :key="cont" class="flex gap-2">
              <span class="material-icons-outlined text-blue-500">{{
                cont === 'email' ? 'email' : 'phone'
              }}</span>
              <span class="text-sm md:text-lg">{{ moreClinicDetails.contact[cont] }}</span>
            </div>
          </div>
        </template>
        <template #footer>
        <div class="w-full px-4 justify-center gap-4 flex">
          <button class="btn w-1/2 btn-ghost border-none bg-link-water-200 shadow-none rounded-lg py-2 px-4 mr-2">
            <span class="material-icons-outlined">assistant_direction</span>
            <span class="text-xs md:text-sm">Get Direction</span>
          </button>
          <button class="w-1/2 btn  btn-ghost border-none bg-blue-500 shadow-none rounded-lg py-2 px-4 mr-2">
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
