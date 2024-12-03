import axios from "axios"
import { atomFamily, selectorFamily } from "recoil"

export const kartItemFamily = atomFamily({
    key : 'kartItemFamily',
    default : {
        quantity : 0
    }
})