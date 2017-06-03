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
    case 'CHANGE_PICTURE':
      return {
        ...state,
        picture: action.payload
      }
    case 'LOGIN':
      return {
        ...state,
        email: action.payload.user.email[0].email,
        firstName: action.payload.user.firstName || action.payload.user.email[0].email.split('@')[0],
        lastName: action.payload.user.lastName,
        //picture: action.payload.user.image.url
      }
    default:
      return state;
  }
}
