import Combobox from '@/components/Combobox.vue';
import DialogModal from '@/components/DialogModal.vue';
import { computed, ref } from 'vue';
const servicePrompt = 'All Service Types';
const countyPrompt = 'All Counties';
import MapView from '@/components/MapView.vue';
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
];
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
];
const services = [
    { id: 1, name: 'Contraception' },
    { id: 2, name: 'STI Testing' },
    { id: 3, name: 'Counseling' },
];
const moreClinicDetails = ref();
const isShowDialog = ref(false);
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
]);
const hourKey = computed(() => {
    if (!moreClinicDetails.value)
        return [];
    return Object.keys(moreClinicDetails.value.hours);
});
const contactKeys = computed(() => {
    if (!moreClinicDetails.value)
        return [];
    return Object.keys(moreClinicDetails.value.contact);
});
const openModal = (clinicId) => {
    isShowDialog.value = true;
    moreClinicDetails.value = clinicDetails.find((clinic) => clinic.id === clinicId);
};
const handleCategory = (val) => {
    console.log(val);
};
const handleService = (val) => {
    console.log(val);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pt-[80px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: "min-h-screen font-pt-sans-regular" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "flex-col grad1 py-10" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-center justify-center items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "py-8 bg-white shadow-md sticky md:top-20 top-10 z-40" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container mx-auto px-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "grid grid-cols-1 md:grid-cols-4 lg:gap-4 gap-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative md:col-span-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-800" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ class: "w-full pl-10 pr-4 py-3 bg-background-light placeholder:text-stone-800 border border-gray-300 text-stone-800 rounded-lg focus:ring-primary focus:border-primary" },
    placeholder: "Search by keyword (e.g., clinic name, service)",
    type: "text",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
/** @type {[typeof Combobox, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Combobox, new Combobox({
    ...{ 'onComboChoice': {} },
    comboProps: (__VLS_ctx.services),
    prompt: (__VLS_ctx.servicePrompt),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onComboChoice': {} },
    comboProps: (__VLS_ctx.services),
    prompt: (__VLS_ctx.servicePrompt),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onComboChoice: (__VLS_ctx.handleService)
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
/** @type {[typeof Combobox, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(Combobox, new Combobox({
    ...{ 'onComboChoice': {} },
    comboProps: (__VLS_ctx.counties),
    prompt: (__VLS_ctx.countyPrompt),
}));
const __VLS_8 = __VLS_7({
    ...{ 'onComboChoice': {} },
    comboProps: (__VLS_ctx.counties),
    prompt: (__VLS_ctx.countyPrompt),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
let __VLS_12;
const __VLS_13 = {
    onComboChoice: (__VLS_ctx.handleCategory)
};
var __VLS_9;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container mx-auto px-4 py-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:grid lg:grid-cols-10 lg:gap-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:col-span-4 mb-8 lg:mb-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "block lg:hidden mb-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ class: "w-full bg-casablanca-300 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2" },
    id: "toggleMapBtn",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "material-icons-outlined" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "space-y-4 md:max-h-[70vh] overflow-y-auto pr-2" },
    id: "clinicList",
});
for (const [clinic] of __VLS_getVForSourceType((__VLS_ctx.clinicDetails))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (clinic.id),
        ...{ class: "bg-white p-5 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:-translate-x-1 border-2 border-transparent transition-all" },
        id: "card1",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: "text-xl font-bold text-gray-900" },
    });
    (clinic.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-sm text-pink-500 dark:text-pink-400 font-medium mt-1" },
    });
    (clinic.type);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-stone-700 mt-2 flex items-center" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "material-icons-outlined text-base mr-2" },
    });
    (clinic.address);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.openModal(clinic.id);
            } },
        ...{ class: "mt-4 w-full bg-sky-200 text-primary text-sky-500 py-2 px-4 rounded-lg font-semibold hover:bg-sky-400/20 transition-colors" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:col-span-6 lg:block hidden" },
});
/** @type {[typeof MapView, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(MapView, new MapView({}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const __VLS_17 = {}.teleport;
/** @type {[typeof __VLS_components.Teleport, typeof __VLS_components.teleport, typeof __VLS_components.Teleport, typeof __VLS_components.teleport, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    to: "body",
}));
const __VLS_19 = __VLS_18({
    to: "body",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
if (__VLS_ctx.moreClinicDetails) {
    /** @type {[typeof DialogModal, typeof DialogModal, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(DialogModal, new DialogModal({
        ...{ 'onClose': {} },
        isOpen: (__VLS_ctx.isShowDialog),
        ...{ class: "font-pt-sans-regular" },
    }));
    const __VLS_22 = __VLS_21({
        ...{ 'onClose': {} },
        isOpen: (__VLS_ctx.isShowDialog),
        ...{ class: "font-pt-sans-regular" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    let __VLS_24;
    let __VLS_25;
    let __VLS_26;
    const __VLS_27 = {
        onClose: (...[$event]) => {
            if (!(__VLS_ctx.moreClinicDetails))
                return;
            __VLS_ctx.isShowDialog = !__VLS_ctx.isShowDialog;
        }
    };
    __VLS_23.slots.default;
    {
        const { title: __VLS_thisSlot } = __VLS_23.slots;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "space-y-4" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "flex justify-between" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "text-xl font-bold" },
        });
        (__VLS_ctx.moreClinicDetails?.name);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "material-icons-outlined" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "border-b fixed left-0 right-0 border-gray-200" },
        });
    }
    {
        const { body: __VLS_thisSlot } = __VLS_23.slots;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "py-4 space-y-4" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "flex gap-2 flex-wrap mt-2" },
        });
        for (const [service, index] of __VLS_getVForSourceType((__VLS_ctx.moreClinicDetails?.services))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: (service),
                ...{ class: "flex" },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "px-3 py-1 rounded-full text-sm font-medium w-fit text-white" },
                ...{ class: ([`bg-${__VLS_ctx.colors[Number(index.toString().charAt(0))]}-100`]) },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "font-bold" },
                ...{ class: ([`text-${__VLS_ctx.colors[Number(index.toString().charAt(0))]}-500`]) },
            });
            (service);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "font-bold" },
        });
        for (const [time] of __VLS_getVForSourceType((__VLS_ctx.hourKey))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: (time),
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "font-bold text-sm md:text-lg" },
                ...{ style: ({ textTransform: 'capitalize' }) },
            });
            (time);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "ml-2 text-sm md:text-lg" },
            });
            (__VLS_ctx.moreClinicDetails?.hours[time]);
        }
        for (const [cont] of __VLS_getVForSourceType((__VLS_ctx.contactKeys))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: (cont),
                ...{ class: "flex gap-2" },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "material-icons-outlined text-blue-500" },
            });
            (cont === 'email' ? 'email' : 'phone');
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "text-sm md:text-lg" },
            });
            (__VLS_ctx.moreClinicDetails.contact[cont]);
        }
    }
    {
        const { footer: __VLS_thisSlot } = __VLS_23.slots;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "w-full px-4 justify-center gap-4 flex" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ class: "btn w-1/2 btn-ghost border-none bg-link-water-200 shadow-none rounded-lg py-2 px-4 mr-2" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "material-icons-outlined" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "text-xs md:text-sm" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ class: "w-1/2 btn  btn-ghost border-none bg-blue-500 shadow-none rounded-lg py-2 px-4 mr-2" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "material-icons-outlined text-white" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "text-white text-xs md:text-sm" },
        });
    }
    var __VLS_23;
}
var __VLS_20;
/** @type {__VLS_StyleScopedClasses['pt-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['grad1']} */ ;
/** @type {__VLS_StyleScopedClasses['py-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-5xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-6xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-tight']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['md:top-20']} */ ;
/** @type {__VLS_StyleScopedClasses['top-10']} */ ;
/** @type {__VLS_StyleScopedClasses['z-40']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['md:col-span-2']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-3']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-stone-800']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-background-light']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder:text-stone-800']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-stone-800']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-10']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:col-span-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-casablanca-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['md:max-h-[70vh]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:-translate-x-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-pink-500']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-pink-400']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-stone-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-sky-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sky-500']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-sky-400/20']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:col-span-6']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:block']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['w-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-ghost']} */ ;
/** @type {__VLS_StyleScopedClasses['border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-link-water-200']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-none']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-ghost']} */ ;
/** @type {__VLS_StyleScopedClasses['border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-none']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-sm']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Combobox: Combobox,
            DialogModal: DialogModal,
            servicePrompt: servicePrompt,
            countyPrompt: countyPrompt,
            MapView: MapView,
            clinicDetails: clinicDetails,
            counties: counties,
            services: services,
            moreClinicDetails: moreClinicDetails,
            isShowDialog: isShowDialog,
            colors: colors,
            hourKey: hourKey,
            contactKeys: contactKeys,
            openModal: openModal,
            handleCategory: handleCategory,
            handleService: handleService,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
