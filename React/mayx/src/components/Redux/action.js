export const increment = ()=>{
    return {
        type: 'INCREMENT'
    }
}

export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}

export const setBgColor = (color)=>{
    return {
        type: 'SET_BG_COLOR',
        payload: color,
    }
}