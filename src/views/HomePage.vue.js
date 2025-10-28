import FooterComponent from '@/components/FooterComponent.vue';
import { nextTick, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Navigation } from 'swiper/modules'
// import image_1 from '@/assets/images/avator-web.png'
// import image_2 from '@/assets/images/avator-web.png'
// import image_3 from '@/assets/images/avator-web.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    ease: 'none',
});
// const carouselInfo = [
//   {
//     id: 1,
//     avatorSrc: image_1,
//     name: 'Jaden Kiptoo',
//     location: 'Machakos',
//     testimonial:
//       'I didn’t know where to go for help, but Rafikey guided me to a nearby health center in minutes. It felt like talking to a caring friend who knew exactly what I needed.',
//   },
//   {
//     id: 2,
//     avatorSrc: image_2,
//     name: 'Halima Wakesho',
//     location: 'Kilifi',
//     testimonial:
//       'Rafikey was so easy to use! I just answered a few questions and instantly got directions to the right service. Rafikey saved me so much time and stress.',
//   },
//   {
//     id: 3,
//     avatorSrc: image_3,
//     name: 'John Odhiambo',
//     location: 'Nanyuki',
//     testimonial:
//       'I was unsure about my next step, but rafikey made everything clear. It gave me trusted information and connected me to the right place without any hassle.',
//   }
// ] as {
//   id: number
//   avatorSrc: string
//   name: string
//   location: string
//   testimonial: string
// }[]
const registerHandler = () => {
    window.location.href = 'https://chat.askrafikey.com/auth';
};
const prevEl = ref(null);
const nextEl = ref(null);
const navigationOptions = ref({ prevEl: null, nextEl: null });
onMounted(async () => {
    navigationOptions.value = {
        prevEl: prevEl.value,
        nextEl: nextEl.value,
    };
    await nextTick();
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".panel-1", // The container element for the panels
    //       start: "top top", // Start when the top of the container hits the top of the viewport
    //       // end: "+=300%", // End after scrolling 300% of the viewport height
    //       scrub: 1, // Smoothly link the animation to the scroll position
    //       pin: true, // Pin the container during the animation
    //       pinSpacing: false,
    //       // toggleActions: "restart none restart none"
    //     },
    //   });
    //   // const tl = gsap.timeline()
    //   tl.to(".panel-1", { xPercent: -500 })
    //   .to(".panel-2", { xPercent: 500 }, "<")
    //   .to(".panel-3", {
    //     xPercent: 0,
    //     duration: 3,
    //     rotate: 0,
    //     scrollTrigger: {
    //       trigger: ".panel-3",
    //       start: "top top", // Adjust offset to delay until navigation leaves
    //       scrub: 4,
    //       // end: "bottom 70",
    //       // markers: true, // Optional: for debugging
    //     },
    //   })
    //
    //   gsap.utils.toArray(".section").forEach((element) => {
    //     ScrollTrigger.create({
    //       trigger: element as HTMLDivElement,
    //       start: "top top",
    //       // end: "bottom bottom",
    //       pin: true,
    //       pinSpacing: false,
    //       scrub: 1,
    //     })
    //   })
});
const goToPlayGameHandler = () => {
    window.location.href = `${import.meta.env.VITE_APP_RAFIKEY_CHATBOT_FRONTEND}/lets-play/welcome/plain/quiz`;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['hide-scrollbar']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "panel overflow-hidden" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "xl:h-screen lg:px-[80px] overflow-hidden flex lg:justify-between justify-center w-full" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "panel-1 lg:pt-[166px] py-16 md:py-20 lg:py-0 space-y-12 md:space-y-16 lg:space-y-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:w-[519px] w-[241px] mx-auto  font-changa-one" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-deep-cove-950 text-center lg:text-start lg:leading-[74px] leading-[32px] tracking-[3%] lg:!text-[79px] !text-[24px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-shark-950 to-cerise-600" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex w-full items-center lg:hidden justify-center " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-1/3 lg:w-full" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/rafikey-mascot-hero-section.svg",
    alt: "rafikey-image",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex lg:w-[519px] w-full md:w-3/4 px-7 lg:px-0 mx-auto lg:pt-[32px] leading-[150%] text-center lg:text-start" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-[15px] lg:text-[18px] font-pt-sans-regular text-shark-950" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:pt-10" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top-[670px]  lg:h-[63px] h-[49px] flex justify-center lg:justify-start lg:gap-[24px] gap-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.registerHandler) },
    ...{ class: "btn btn-sm h-full backdrop-blur-sm   shadow-[0_0_50px_0px] shadow-navBarShadowBackground/50 bg-shark-950 py-[16px] lg:px-[48px] px-8 rounded-[8px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-white font-pt-sans-regular font-semibold text-nowrap lg:text-xl text-lg" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$router.push('/chatbot');
        } },
    ...{ class: "btn btn-sm h-full font-pt-sans-regular bg-casablanca-300 py-[16px] lg:px-[48px] px-8 rounded-[8px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-white font-semibold lg:text-xl text-lg" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "panel-2 hidden xl:h-screen pt-[45px] w-[681px] h-[711px] lg:flex justify-center items-start lg:pt-[160px] xl:pt-[180px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "xl:w-[400px] xl:h-[400px] w-[320px] h-[320px] " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/rafikey-mascot-hero-section.svg",
    alt: "rafikey-image",
    ...{ class: "w-full " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "panel-3 py-16 md:py-20 lg:pb-18 bg-white lg:px-[80px] lg:mb-14" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " flex flex-col" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center space-y-4 flex-col mx-auto pb-8 md:pb-12 lg:pb-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-pt-sans-bold text-cerise-600 lg:text-[20px] text-[16px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "font-changa-one lg:text-[72px] text-[24px] leading-[74px] tracking-[-3%] text-textColorOne text-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:flex md:w-3/4 px-6 md:px-0 mx-auto lg:w-full lg:gap-6 space-y-8 lg:space-y-0 lg:py-24 items-stretch justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:flex lg:justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home-2.png",
    alt: "info-image",
    ...{ class: "w-12 md:w-16  lg:w-20" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:py-12 lg:space-y-3 lg:w-full w-3/4 mx-auto lg:px-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-pt-sans-bold lg:text-[28px] text-[16px] text-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-[14px] lg:text-[16px] font-pt-sans-regular lg:text-center  text-bodyText" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:flex lg:justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home-3.png",
    alt: "info-image",
    ...{ class: "w-12 md:w-16  lg:w-20" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:py-12 lg:space-y-3 lg:w-full w-3/4 mx-auto lg:px-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-pt-sans-bold lg:text-[28px] text-[16px] text-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-[14px] lg:text-[16px] font-pt-sans-regular lg:text-center  text-bodyText" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:flex lg:justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/dice.png",
    alt: "info-image",
    ...{ class: "w-10 md:w-16 lg:w-20 rounded-full aspect-square bg-[#0a0113] p-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.goToPlayGameHandler) },
    ...{ class: "lg:py-12 cursor-pointer lg:space-y-3 lg:w-full w-3/4 mx-auto lg:px-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-pt-sans-bold lg:text-[28px] text-[16px] text-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-[14px] lg:text-[16px] font-pt-sans-regular lg:text-center  text-bodyText" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ class: "font-bold text-casablanca-300" },
    href: 'https://chat.askrafikey.com/lets-play/welcome/plain/quiz',
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-white rounded-xl lg:flex-col items-center px-8 lg:px-0 flex gap-4 lg:gap-0 shadow-2xl lg:py-10 py-4 lg:space-y-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:flex lg:justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/home-5.png",
    alt: "info-image",
    ...{ class: "w-12 md:w-16  lg:w-20" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lg:py-12 w-3/4  lg:space-y-3 lg:w-full mx-auto lg:px-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-pt-sans-bold lg:text-[28px] text-[16px] text-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-[14px] lg:text-[16px] font-pt-sans-regular lg:text-center  text-bodyText" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://chat.askrafikey.com/auth",
    target: "_blank",
    rel: "noopener",
    ...{ class: "text-cerise-600 font-bold hover:text-cerise-800 transition-colors" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "section xl:h-screen lg:px-[80px] flex bg-darkGrayOne py-16 md:py-20 lg:pt-[80px] lg:pb-10" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " flex w-full items-center justify-between pt-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-1/2 xl:pt-[48px] lg:flex hidden items-center justify-start" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-end justify-center xl:h-[546px] xl:w-[546px] " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/rafikey-mascot2.svg",
    alt: "rafikey-image",
    ...{ class: "" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "space-y-6 md:space-y-8 lg:w-1/2 w-3/4 mx-auto flex flex-col" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex lg:justify-start justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-cerise-600 text-[16px] lg:text-[20px] font-pt-sans-bold" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex lg:justify-start justify-center xl:w-4/6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "text-center text-[24px]  lg:text-[72px] tracking-[3%] leading-[24px] lg:leading-[74px] lg:text-start font-changa-one text-white" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex lg:hidden pt-6 md:pt-8 lg:pt-10 justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-2/5" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "@/assets/images/rafikey-mascot2.svg",
    alt: "rafikey-image",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "lg:w-3/4 md:w-1/2 mx-auto lg:mx-0 text-center lg:text-start font-outfit text-[15px] lg:text-[20px] tracking-[0%] text-white leading-[32px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "pt-16 md:pt-20 lg:pt-24" },
});
/** @type {[typeof FooterComponent, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(FooterComponent, new FooterComponent({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-1']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pt-[166px]']} */ ;
/** @type {__VLS_StyleScopedClasses['py-16']} */ ;
/** @type {__VLS_StyleScopedClasses['md:py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-0']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:space-y-16']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-0']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-[519px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[241px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['font-changa-one']} */ ;
/** @type {__VLS_StyleScopedClasses['text-deep-cove-950']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:leading-[74px]']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-[32px]']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-[3%]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:!text-[79px]']} */ ;
/** @type {__VLS_StyleScopedClasses['!text-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-clip-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-b']} */ ;
/** @type {__VLS_StyleScopedClasses['from-shark-950']} */ ;
/** @type {__VLS_StyleScopedClasses['to-cerise-600']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-[519px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-7']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pt-[32px]']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-[150%]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[18px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['text-shark-950']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['top-[670px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:h-[63px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[49px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-[0_0_50px_0px]']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-navBarShadowBackground/50']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-shark-950']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-[48px]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-[8px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-nowrap']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-casablanca-300']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-[48px]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-[8px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-2']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-[45px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[681px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[711px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pt-[160px]']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:pt-[180px]']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:w-[400px]']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:h-[400px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[320px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[320px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['panel-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-16']} */ ;
/** @type {__VLS_StyleScopedClasses['md:py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pb-18']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:mb-14']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['md:pb-12']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cerise-600']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[20px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-changa-one']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[72px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-[74px]']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-[-3%]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-textColorOne']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-0']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-24']} */ ;
/** @type {__VLS_StyleScopedClasses['items-stretch']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-0']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-10']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[28px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-bodyText']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-0']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-10']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[28px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-bodyText']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-0']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-10']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['aspect-square']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#0a0113]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[28px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-bodyText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-casablanca-300']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:gap-0']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-10']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-12']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-20']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:space-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[28px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-regular']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-bodyText']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cerise-600']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-cerise-800']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['section']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:px-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-darkGrayOne']} */ ;
/** @type {__VLS_StyleScopedClasses['py-16']} */ ;
/** @type {__VLS_StyleScopedClasses['md:py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pt-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pb-10']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:pt-[48px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:h-[546px]']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:w-[546px]']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:space-y-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-cerise-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[20px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-pt-sans-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:justify-start']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:w-4/6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[72px]']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-[3%]']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-[24px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:leading-[74px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['font-changa-one']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:pt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2/5']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:w-3/4']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:mx-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-start']} */ ;
/** @type {__VLS_StyleScopedClasses['font-outfit']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-[20px]']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-[0%]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-[32px]']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-16']} */ ;
/** @type {__VLS_StyleScopedClasses['md:pt-20']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pt-24']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            FooterComponent: FooterComponent,
            registerHandler: registerHandler,
            goToPlayGameHandler: goToPlayGameHandler,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
