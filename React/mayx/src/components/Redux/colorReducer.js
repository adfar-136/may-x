const initialState = {
    backgroundColor:"red",

}
const colorReducer = (state=initialState,action)=>{
   switch(action.type){
    case "SET_BG_COLOR":
        return {backgroundColor:action.payload}
    default:
        return state
   }
}

export default colorReducer