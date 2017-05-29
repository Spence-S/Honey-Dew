const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  picture: '',
  facebook:{}
}

export default function (state = initialState, action) {
  switch(action.type){
    case 'EDIT_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload
      }
    case 'EDIT_LAST_NAME':
      return{
        ...state,
        lastName: action.payload
      }
    case 'EDIT_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    default:
      return state;
  }
}
