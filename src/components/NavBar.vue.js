import { useRafikeyWebstore, useTabStore } from '@/stores';
import { useRouter } from 'vue-router';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
const tabStore = useTabStore();
const router = useRouter();
const webStore = useRafikeyWebstore();
const handleRouteChange = (tab) => {
    tabStore.setActiveTab(tab);
    // webStore.setCollapseSidebarSmall(true)
    setTimeout(() => {
        webStore.setCollapseSidebarSmall(true);
        router.push({
            name: tab
        });
        // webStore.setCollapseSidebarSmall(true)
    }, 1000);
};
const homeHandler = () => {
    // webStore.setCollapseSidebarSmall(true)
    router.push({
        name: 'home'
    });
};
const loginHandler = () => {
    window.location.href = 'https://chat.askrafikey.com/auth/login';
};
const registerHandler = () => {
    window.location.href = 'https://chat.askrafikey.com/auth';
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fixed hidden lg:block left-0  h-[80px] right-0 top-0 bg-white z-50" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex  items-center h-full justify-between py-4 px-[80px] gap-4 " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.homeHandler) },
    ...{ class: "cursor-pointer flex items-end pt-1 w-[120px] " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "@/assets/images/Rafikey-logo.png",
    alt: "rafikey-name-image",
    ...{ class: "" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex xl:gap-10 gap-4  " },
});
for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabStore.getTabs))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (tab.value),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleRouteChange(tab.value);
            } },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-[24px] font-pt-sans-bold" },
        ...{ class: ([__VLS_ctx.tabStore.activeTab === tab.value ? 'text-darkGrayOne' : 'text-gray-400']) },
    });
    (tab.name);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex h-[47px] w-[249px] gap-[53px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.loginHandler) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "font-pt-sans-bold text-lightGrayTwo text-[24px] text-nowrap" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.registerHandler) },
    ...{ class: "btn btn-sm h-full backdrop-blur-sm   shadow-[0_0_50px_0px] shadow-navBarShadowBackground/50 border-none  bg-darkGrayOne rounded-[8px] py-[8px] px-[28px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "font-pt-sans-bold text-white text-[24px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex h-16  fixed z-50 top-0 left-0 right-0 bg-white justify-between p-4 lg:hidden" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.homeHandler) },
    ...{ class: "cursor-pointer flex items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/Rafikey-logo.png",
    ...{ class: "w-32 h-32" },
    alt: "rafikey-word",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.webStore.setCollapseSidebarSmall(false);
        } },
    ...{ class: "btn btn-sm shadow-none bg-transparent border-none hover:shadow-none" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "material-icons-outlined" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "" },
});
const __VLS_0 = {}.TransitionRoot;
/** @type {[typeof __VLS_components.TransitionRoot, typeof __VLS_components.TransitionRoot, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    as: "template",
    show: (!__VLS_ctx.webStore.collapseSidebarSmall),
    ...{ class: "lg:hidden block" },
}));
const __VLS_2 = __VLS_1({
    as: "template",
    show: (!__VLS_ctx.webStore.collapseSidebarSmall),
    ...{ class: "lg:hidden block" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.Dialog;
/** @type {[typeof __VLS_components.Dialog, typeof __VLS_components.Dialog, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ 'onClose': {} },
    ...{ class: "relative z-50" },
}));
const __VLS_6 = __VLS_5({
    ...{ 'onClose': {} },
    ...{ class: "relative z-50" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
let __VLS_8;
let __VLS_9;
let __VLS_10;
const __VLS_11 = {
    onClose: (...[$event]) => {
        __VLS_ctx.webStore.setCollapseSidebarSmall(true);
    }
};
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fixed inset-0 overflow-hidden" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute inset-0 overflow-hidden" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16" },
});
const __VLS_12 = {}.TransitionChild;
/** @type {[typeof __VLS_components.TransitionChild, typeof __VLS_components.TransitionChild, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    as: "template",
    enter: "transform transition ease-in-out duration-500 sm:duration-700",
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0",
    leave: "transform transition ease-in-out duration-500 sm:duration-700",
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full",
}));
const __VLS_14 = __VLS_13({
    as: "template",
    enter: "transform transition ease-in-out duration-500 sm:duration-700",
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0",
    leave: "transform transition ease-in-out duration-500 sm:duration-700",
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.DialogPanel;
/** @type {[typeof __VLS_components.DialogPanel, typeof __VLS_components.DialogPanel, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ class: "pointer-events-auto relative w-screen max-w-md" },
}));
const __VLS_18 = __VLS_17({
    ...{ class: "pointer-events-auto relative w-screen max-w-md" },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.TransitionChild;
/** @type {[typeof __VLS_components.TransitionChild, typeof __VLS_components.TransitionChild, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    as: "template",
    enter: "ease-in-out duration-500",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-500",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
}));
const __VLS_22 = __VLS_21({
    as: "template",
    enter: "ease-in-out duration-500",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-500",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" },
});
var __VLS_23;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex h-full flex-col overflow-y-auto bg-white  py-6 shadow-xl" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "px-4 sm:px-6" },
});
const __VLS_24 = {}.DialogTitle;
/** @type {[typeof __VLS_components.DialogTitle, typeof __VLS_components.DialogTitle, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    ...{ class: "text-base font-semibold" },
}));
const __VLS_26 = __VLS_25({
    ...{ class: "text-base font-semibold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex justify-end" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.webStore.setCollapseSidebarSmall(true);
        } },
    ...{ class: "btn btn-sm btn-circle flex justify-center items-center h-10  w-10 bg-gray-300  hover:bg-transparent shadow-none" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "material-icons-outlined rotate-180 " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex justify-center items-center h-12" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/Rafikey-logo.png",
    ...{ class: "w-32 h-32 mx-auto" },
    alt: "rafikey-word",
});
var __VLS_27;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative mt-6 ms-6 flex-1" },
});
for (const [tab] of __VLS_getVForSourceType((__VLS_ctx.tabStore.getTabs))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (tab.value),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleRouteChange(tab.value);
            } },
        ...{ class: "ps-4 cursor-pointer hover:bg-shark-100" },
        ...{ class: ([__VLS_ctx.tabStore.activeTab === tab.value ? 'bg-shark-950 w-full' : '']) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "font-urbanist text-[16px] " },
        ...{ class: ([__VLS_ctx.tabStore.activeTab === tab.value ? 'text-white' : 'text-stone-400']) },
    });
    (tab.name);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute bottom-0 w-full cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.loginHandler) },
    ...{ class: "flex gap-4 hover:bg-shark-100 p-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "material-icons-outlined" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "font-urbanist text-[16px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.registerHandler) },
    ...{ class: "flex gap-4 hover:bg-shark-100 p-2 rounded" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "material-icons-outlined text-shark-950" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "hover:text-shark-950 font-urbanist text-[16px]" },
});
var __VLS_19;
var __VLS_15;
var __VLS_7;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:block']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[120px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:gap-10']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[47px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[249px]']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[53px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lightGrayTwo']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-nowrap']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-[0_0_50px_0px]']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-navBarShadowBackground/50']} */ ;
/** @type {__VLS_StyleScopedClasses['border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-darkGrayOne']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-[8px]']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[8px]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[28px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-16']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-32']} */ ;
/** @type {__VLS_StyleScopedClasses['h-32']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-none']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-none']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-y-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:pl-16']} */ ;
/** @type {__VLS_StyleScopedClasses['pointer-events-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['-ml-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:-ml-10']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:pr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-none']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['rotate-180']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-12']} */ ;
/** @type {__VLS_StyleScopedClasses['w-32']} */ ;
/** @type {__VLS_StyleScopedClasses['h-32']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['ps-4']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-shark-100']} */ ;
/** @type {__VLS_StyleScopedClasses['font-urbanist']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-shark-100']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['font-urbanist']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-shark-100']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['text-shark-950']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-shark-950']} */ ;
/** @type {__VLS_StyleScopedClasses['font-urbanist']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Dialog: Dialog,
            DialogPanel: DialogPanel,
            DialogTitle: DialogTitle,
            TransitionChild: TransitionChild,
            TransitionRoot: TransitionRoot,
            tabStore: tabStore,
            webStore: webStore,
            handleRouteChange: handleRouteChange,
            homeHandler: homeHandler,
            loginHandler: loginHandler,
            registerHandler: registerHandler,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
