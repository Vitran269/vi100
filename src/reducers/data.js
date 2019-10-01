import * as types from '../constant/ActionType'

var initialState = {
    username : '',
    password : '',
    isAuthenticate : false,
    isRegister :false
}
var myReducer = (state = initialState,action) =>{
    switch (action.type){
        case types.LOGIN :
            return state
    }
}
export default myReducer;