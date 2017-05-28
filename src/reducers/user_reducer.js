const initialState = {
  firstName: 'Spencer',
  lastName: 'Snyder',
  email: 'sasnyde2@gmail.com',
  picture: 'http://www.hdwallpapers.in/walls/neytiri_in_avatar_2-wide.jpg',
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
