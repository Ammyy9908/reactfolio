const intialState = {
    data:null,
    works:null,
    isEmailSent:false,
    nav:false
    

 }
 
 export default function AppReducer(state=intialState,action){
    switch(action.type){
        case "SET_DATA":{
            return{
               ...state,
               data:action.data
            }
         }

         case "SET_EMAIL_SENT":{
            return{
               ...state,
               isEmailSent:action.isEmailSent
            }
         }
         case "SET_NAV":{
            return{
               ...state,
               nav:action.nav
            }
         }

         
       
 
       default:
          return state
    }
 }