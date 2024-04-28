import { atom } from 'jotai';

export const productDataAtom = atom({
    productName: '',
    category: '',
    qty: '',
    price: ''
})

export const submittedDataAtom = atom([]);
export const errorAtom = atom({});