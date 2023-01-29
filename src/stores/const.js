import { ref } from 'vue'
import { defineStore } from 'pinia'

export const constStore = defineStore('const', () => {
    const tradePair = ref({})
    tradePair.value = {
        0: "HDO/USD",
        1: "USD/HDO"

    }


    const payments = ref({})
    payments.value = {
        0: "PayPal",
        1: "AliPay",
        2: "WeChat"
    }
    const opertionType = ref({})
    opertionType.value = {
        0: "买",
        1: "卖"
    }

    const fee = ref(0)
    fee.value = 0.05


    return { tradePair, payments, opertionType, fee }
})
