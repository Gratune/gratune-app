module.exports = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE_1':
      return {
        page: 'Home'
      }
    case 'CHANGE_PAGE_2':
      return {
        page: 'Schedule'
      }
    case 'CHANGE_PAGE_3':
      return {
        page: 'Stats'
      }
    case 'CHANGE_PAGE_4':
      return {
        page: 'Profile'
      }
    case 'CHANGE_PAGE_5':
      return {
        page: 'Settings'
      }
    default:
      return state
    }
}
