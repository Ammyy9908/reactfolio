const intialState = {
    data:null,
    works:null
    

 }
 
 export default function AppReducer(state=intialState,action){
    switch(action.type){
        case "SET_DATA":{
            return{
               ...state,
               data:action.data
            }
         }

         
       
 
       default:
          return state
    }
 }