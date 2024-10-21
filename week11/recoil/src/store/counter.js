import { atom, selector } from 'recoil'

export const countRecoil = atom({
    key: 'counttt',
    default : 0
})

export const countSelector = selector({
    key: 'isEven',
    get : ({get}) => {
        const value = get(countRecoil)
        return value % 2
    }
})