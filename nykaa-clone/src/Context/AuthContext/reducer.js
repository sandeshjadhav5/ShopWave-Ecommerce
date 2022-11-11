const reducer = (state,action)=>{
  switch (action.type){
    case 'LOGIN_LOADING':{
      return {
        isAuth:false,
        isLoading:true,
        isError:false,
        userName:"",
        email:"",
        password:""
      }
    }
    case 'LOGIN_SUCCESS':{
      return {
        isAuth:true,
        isLoading:false,
        isError:false,
        userName:action.payload.userName,
        email:action.payload.email,
        password:action.payload.password
      }
    }
    case 'LOGIN_FAILURE':{
      return {
        isAuth:false,
        isLoading:true,
        isError:true,
        userName:""
      }
    }
    default:{
      return state
    }
  }
}

export default reducer;