var defaultState={
  user_id: undefined
}

module.exports = (state=defaultState, action) =>{
  switch(action.type){
    case 'Auth':
    return {
      user_id: action.user_id
    }
    case 'Unauth':
    return {
      user_id: undefined
    }
    default:
    return state;
  }
}
