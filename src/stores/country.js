import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCountryStore = defineStore('country', () => {
    const country = ref({});
    return { country }
},
{
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'language',
                storage: localStorage,

            }
        ]

    }
})
