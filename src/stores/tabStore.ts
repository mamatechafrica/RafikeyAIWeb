import { defineStore } from 'pinia'


export const useTabStore = defineStore('adminTabStore', {
  state: ()=>({
    tabs: [
      { name: 'Home',  value: 'home'},
      { name: 'About',  value: 'about'},
      { name: 'Chatbot',  value: 'chatbot' },
      {name: 'Contact',  value: 'contacts'},
      {name: 'FAQs',  value: 'faqs'},
    ] as { name: string, value:string}[],
    activeTab: localStorage.getItem('activeTab') || 'home' as string
  }),
  getters: {
    getTabs: (state) => state.tabs,
    getActiveTav: (state) => state.activeTab
  },
  actions: {
    setActiveTab(tab: string) {
      if (this.tabs.some(t => t.value === tab)) {
        this.activeTab = tab
        localStorage.setItem('activeTab', tab)
      } else {
        console.log(`${tab} not found`)
      }
    }
  }
})
