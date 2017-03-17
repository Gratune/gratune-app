import axios from 'axios';
import { ADDVENUE_URL} from '../api'


exports.addEvent = (user_id, eventName, eventTime) => {
  return function(dispatch) {
    return axios.post(ADDVENUE_URL(user_id), {eventName:eventName, eventTime:eventTime})
    .then((res)=>{
      console.log("concert Data",res.data)
      dispatch(addedEvent(res.data.concerts))
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}

var addedEvent = (newEvent) =>{
  return {
    type : 'ADD_EVENT',
    newEvent
  }
}
