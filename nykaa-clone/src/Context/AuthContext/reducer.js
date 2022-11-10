const reducer = (state,action)=>{
  switch (action.type){
    case 'LOGIN_LOADING':{
      return {
        isAuth:false,
        isLoading:true,
        isError:false
      }
    }
    case 'LOGIN_SUCCESS':{
      return {
        isAuth:true,
        isLoading:false,
        isError:false
      }
    }
    case 'LOGIN_FAILURE':{
      return {
        isAuth:false,
        isLoading:true,
        isError:true
      }
    }
    default:{
      return state
    }
  }
}

export default reducer;