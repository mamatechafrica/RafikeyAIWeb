import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  // darkMode: false,
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth'
      },
      // fontSize: {
      //   sm: '0.8rem',
      //   base: '1rem',
      //   xl: '1.25rem',
      //   '2xl': '1.563rem',
      //   '3xl': '1.953rem',
      //   '4xl': '2.441rem',
      //   '5xl': '3.052rem',
      // },
      colors: {
        'peach': {
          '50': '#fff9ed',
          '100': '#fff2d5',
          '200': '#ffe5b4',
          '300': '#ffcb72',
          '400': '#fda93a',
          '500': '#fc8e13',
          '600': '#ed7209',
          '700': '#c4560a',
          '800': '#9c4310',
          '900': '#7d3911',
          '950': '#441b06',
        },
        'deep-cove': {
          '50': '#edf2ff',
          '100': '#dee7ff',
          '200': '#c4d1ff',
          '300': '#a0b3ff',
          '400': '#7a8aff',
          '500': '#5b61f9',
          '600': '#443dee',
          '700': '#3930d2',
          '800': '#2f2aa9',
          '900': '#2b2986',
          '950': '#171543',
        },

        'azure-radiance': {
          '50': '#eff8ff',
          '100': '#daeeff',
          '200': '#bee3ff',
          '300': '#91d2ff',
          '400': '#5eb8fc',
          '500': '#3898f9',
          '600': '#2f82ef',
          '700': '#1a64db',
          '800': '#1c51b1',
          '900': '#1c468c',
          '950': '#162d55',
        },
        'link-water': {
          '50': '#f5f7f9',
          '100': '#e8ecf1',
          '200': '#cbd5e1',
          '300': '#b9c7d7',
          '400': '#98abc2',
          '500': '#7f93b2',
          '600': '#6d7fa3',
          '700': '#616f94',
          '800': '#525c7b',
          '900': '#454d63',
          '950': '#2d313e',
        },


        'coral-red': {
          '50': '#fff1f1',
          '100': '#ffdfdf',
          '200': '#ffc5c5',
          '300': '#ff9d9d',
          '400': '#ff6464',
          '500': '#ff3b3b',
          '600': '#ed1515',
          '700': '#c80d0d',
          '800': '#a50f0f',
          '900': '#881414',
          '950': '#4b0404',
        },

        'casablanca': {
          '50': '#fef7ec',
          '100': '#fbe9ca',
          '200': '#f7d190',
          '300': '#f2b04d',
          '400': '#f09a2f',
          '500': '#e97817',
          '600': '#ce5711',
          '700': '#ab3b12',
          '800': '#8b2e15',
          '900': '#722815',
          '950': '#411107',
        },
        'cerise': {
          '50': '#fcf3f9',
          '100': '#fbe8f5',
          '200': '#f8d2ec',
          '300': '#f4addc',
          '400': '#ec7ac2',
          '500': '#e252a9',
          '600': '#d23c8f',
          '700': '#b4226f',
          '800': '#951f5c',
          '900': '#7c1f4e',
          '950': '#4b0c2c',
        },
        'shark': {
          '50': '#f6f7f9',
          '100': '#eceef2',
          '200': '#d4d9e3',
          '300': '#afb8ca',
          '400': '#8391ad',
          '500': '#637494',
          '600': '#4f5c7a',
          '700': '#414b63',
          '800': '#384054',
          '900': '#323848',
          '950': '#1c1f28',
        },

        bodyText: '#8A89A0',
        darkgray: '#222222',
        darkGrayOne: '#0C0011',
        lightgray: '#252525',
        lightGrayOne:'#DADADA',
        lightGrayTwo: '#8887AE',
        lightGrayThree: '#212121',
        lightGrayFour: '#171543',
        lightBackground: '#F6F6F6',
        navBarShadowBackground: '#2E2BA666'
      },

      fontFamily: {
        'changa-one-italic': ['Changa One Italic', 'Ubuntu', 'sans-serif'],
        'changa-one': ['changa One Regular', 'Ubuntu', 'sans-serif'],
        'outfit': ['Outfit Regular', 'Ubuntu', 'sans-serif'],
        'outfit-bold': ['Outfit Bold', 'Ubuntu', 'sans-serif'],
        'outfit-extra-bold': ['Outfit Extra Bold', 'Ubuntu', 'sans-serif'],
        'outfit-extra-light': ['Outfit Extra Light', 'Ubuntu', 'sans-serif'],
        'outfit-light': ['Outfit Light', 'Ubuntu', 'sans-serif'],
        'outfit-medium': ['Outfit Medium', 'Ubuntu', 'sans-serif'],
        'outfit-semibold': ['Outfit Semibold', 'Ubuntu', 'sans-serif'],
        'outfit-heavy': ['Outfit Black', 'Ubuntu', 'sans-serif'],
        'pt-sans-bold': ['PT SANS Bold', 'Ubuntu', 'sans-serif'],
        'pt-sans-bold-italic': ['PT SANS Bold Italic', 'Ubuntu', 'sans-serif'],
        'pt-sans-caption-bold': ['PT SANS Caption Bold', 'Ubuntu', 'sans-serif'],
        'pt-sans-caption-regular': ['PT SANS Caption Regular', 'Ubuntu', 'sans-serif'],
        'pt-sana-italic': ['PT SANS Italic', 'Ubuntu', 'sans-serif'],
        'pt-sans-narrow-bold': ['PT SANS Narrow Bold', 'Ubuntu', 'sans-serif'],
        'pt-sans-narrow-regular': ['PT SANS Narrow Regular', 'Ubuntu', 'sans-serif'],
        'pt-sans-regular': ['PT SANS Regular', 'Ubuntu', 'sans-serif'],
        'urbanist': ['Urbanist', 'Ubuntu', 'sans-serif'],
        'urbanist-italic': ['Urbanist Bold', 'Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["light", "winter"]
  }
}

