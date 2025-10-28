import NavBar from '@/components/NavBar.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRafikeyWebstore } from '@/stores';
const showButton = ref(true);
const isChatFrameOpen = computed(() => rafikeyWebStore.openChatFrame);
const chatbot_url = import.meta.env.VITE_APP_RAFIKEY_CHATBOT_FRONTEND;
const rafikeyWebStore = useRafikeyWebstore();
const askRafikeyHandler = () => {
    rafikeyWebStore.openChatFrame = !rafikeyWebStore.openChatFrame;
    // openChatFrame.value =  !openChatFrame.value
};
const handleScroll = () => {
    const footer = document.querySelector('footer');
    if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Hide button when footer is visible (when top of footer is within viewport)
        showButton.value = footerRect.top > windowHeight;
    }
};
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
});
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
// https://chat.askrafikey.com
const closeChatFrame = () => {
    rafikeyWebStore.openChatFrame = false;
};
const scrollTopHandler = () => {
    console.log("Scroll to top handler called");
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "min-h-screen relative" },
});
/** @type {[typeof NavBar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "fixed bottom-0 left-0 right-0 z-[99999] flex justify-center items-center space-x-4 p-4 transition-opacity duration-300" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.showButton) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-[298px] h-[69px] bg-darkgray rounded-full" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.askRafikeyHandler) },
    ...{ class: "h-full flex w-full justify-between items-center px-[26px] cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-white font-outfit text-[14px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-lightGrayOne rounded-full h-8 w-8 flex justify-center items-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "material-icons-outlined text-shark-950" },
});
const __VLS_3 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(__VLS_3, new __VLS_3({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
{
    const { default: __VLS_thisSlot } = __VLS_6.slots;
    const [{ Component, route }] = __VLS_getSlotParams(__VLS_thisSlot);
    if (Component) {
        const __VLS_7 = ((Component));
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
            key: (route.fullPath),
        }));
        const __VLS_9 = __VLS_8({
            key: (route.fullPath),
        }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    }
}
var __VLS_6;
if (!__VLS_ctx.showButton) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (__VLS_ctx.scrollTopHandler) },
        ...{ class: "fixed bottom-24 right-10 z-50 cursor-pointer " },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "shadow-[0_10px_6px_rgba(0,0,0,0.3)] rounded-full border-2 border-casablanca-300 md:h-12 md:w-12 h-10 w-10 flex justify-center items-center" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "material-icons-outlined font-bold  rotate-90 text-casablanca-300" },
    });
}
if (__VLS_ctx.isChatFrameOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "fixed top-24 right-0 z-50" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "bg-gray-200 rounded-xl p-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (__VLS_ctx.closeChatFrame) },
        ...{ class: "flex justify-end p-1 cursor-pointer" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "material-icons-outlined" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({
        src: (`${__VLS_ctx.chatbot_url}/guest-user`),
        ...{ class: "lg:h-[600px] h-[400px]" },
    });
}
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[99999]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-4']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[298px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[69px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-darkgray']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[26px]']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-outfit']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-lightGrayOne']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['text-shark-950']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-24']} */ ;
/** @type {__VLS_StyleScopedClasses['right-10']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-[0_10px_6px_rgba(0,0,0,0.3)]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-casablanca-300']} */ ;
/** @type {__VLS_StyleScopedClasses['md:h-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-12']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['rotate-90']} */ ;
/** @type {__VLS_StyleScopedClasses['text-casablanca-300']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-24']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['material-icons-outlined']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:h-[600px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[400px]']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NavBar: NavBar,
            showButton: showButton,
            isChatFrameOpen: isChatFrameOpen,
            chatbot_url: chatbot_url,
            askRafikeyHandler: askRafikeyHandler,
            closeChatFrame: closeChatFrame,
            scrollTopHandler: scrollTopHandler,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
