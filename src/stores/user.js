import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useStore = defineStore('user', () => {
    const sign = ref("")
    const email = ref("")
    const token = ref("")
    const avatar = ref("")
    const nickname = ref("")
    const userId = ref("")
    return { sign, email, token, avatar, nickname, userId }
},
    {
        persist: {
            enabled: true,
            strategies: [
                {
                    key: 'otc_user',
                    storage: localStorage,

                }
            ]

        }
    })
