import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useStore = defineStore('user', () => {
    const sign = ref("default")
    
    return {sign}
  },
  {
    persist : {
        enabled: true,
        strategies: [
            {
              key: 'otc_user',
              storage: localStorage,

            }
          ]
      
      }
  })
  