import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
const props = withDefaults(defineProps(), {
    isOpen: false,
    maxWidth: 'max-w-md',
});
const emits = defineEmits();
const closeModal = () => {
    emits('closeModal');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    isOpen: false,
    maxWidth: 'max-w-md',
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.TransitionRoot;
/** @type {[typeof __VLS_components.TransitionRoot, typeof __VLS_components.TransitionRoot, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    show: (props.isOpen),
    appear: true,
    as: "template",
}));
const __VLS_2 = __VLS_1({
    show: (props.isOpen),
    appear: true,
    as: "template",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.Dialog;
/** @type {[typeof __VLS_components.Dialog, typeof __VLS_components.Dialog, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ 'onClose': {} },
    as: "div",
    ...{ class: "relative z-[99999]" },
}));
const __VLS_7 = __VLS_6({
    ...{ 'onClose': {} },
    as: "div",
    ...{ class: "relative z-[99999]" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_9;
let __VLS_10;
let __VLS_11;
const __VLS_12 = {
    onClose: (__VLS_ctx.closeModal)
};
__VLS_8.slots.default;
const __VLS_13 = {}.TransitionChild;
/** @type {[typeof __VLS_components.TransitionChild, typeof __VLS_components.TransitionChild, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    as: "template",
    enter: "duration-300 ease-out",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "duration-200 ease-in",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
}));
const __VLS_15 = __VLS_14({
    as: "template",
    enter: "duration-300 ease-out",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "duration-200 ease-in",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
    ...{ class: "fixed inset-0 bg-black bg-opacity-20 backdrop-blur-[4px]" },
});
var __VLS_16;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fixed inset-0 overflow-y-auto" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex min-h-full items-center justify-center p-4 text-center" },
});
const __VLS_17 = {}.TransitionChild;
/** @type {[typeof __VLS_components.TransitionChild, typeof __VLS_components.TransitionChild, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    as: "template",
    enter: "duration-300 ease-out",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "duration-200 ease-in",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
}));
const __VLS_19 = __VLS_18({
    as: "template",
    enter: "duration-300 ease-out",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "duration-200 ease-in",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
const __VLS_21 = {}.DialogPanel;
/** @type {[typeof __VLS_components.DialogPanel, typeof __VLS_components.DialogPanel, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    ...{ class: "w-full transform overflow-hidden rounded-2xl bg-white  p-6 text-left align-middle shadow-xl transition-all" },
    ...{ class: ([props.maxWidth]) },
}));
const __VLS_23 = __VLS_22({
    ...{ class: "w-full transform overflow-hidden rounded-2xl bg-white  p-6 text-left align-middle shadow-xl transition-all" },
    ...{ class: ([props.maxWidth]) },
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_24.slots.default;
const __VLS_25 = {}.DialogTitle;
/** @type {[typeof __VLS_components.DialogTitle, typeof __VLS_components.DialogTitle, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    as: "h3",
}));
const __VLS_27 = __VLS_26({
    as: "h3",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
var __VLS_29 = {};
var __VLS_28;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mt-2" },
});
var __VLS_31 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mt-4" },
});
var __VLS_33 = {};
var __VLS_24;
var __VLS_20;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[99999]']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-20']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-[4px]']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['align-middle']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
// @ts-ignore
var __VLS_30 = __VLS_29, __VLS_32 = __VLS_31, __VLS_34 = __VLS_33;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Dialog: Dialog,
            DialogPanel: DialogPanel,
            DialogTitle: DialogTitle,
            TransitionChild: TransitionChild,
            TransitionRoot: TransitionRoot,
            closeModal: closeModal,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
