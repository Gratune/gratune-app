module.exports = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: 'Changed'
      }
    default:
      return state
    }
}
