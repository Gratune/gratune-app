var defaultState={
  id: undefined,
  text: undefined
}

module.exports = (state=defaultState, action) =>{
  switch(action.type){
    case 'ADD_EVENT':
    return [
      ...state,
      action.newEvent
    ];

    default:
    return state;
  }
}
