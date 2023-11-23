import { cardsData } from '$lib/data.js';

export const load = ({params}) => {
    console.log(params)
    
    console.log(typeof(params.Id))
    const cardsData_index = parseInt(params.Id)

    let card = cardsData[cardsData_index]
    return card
}