import axios from 'axios';
// constants
//const url='https://mighty-falls-76862.herokuapp.com/';
const url = process.env.REACT_APP_API_URL;

//helper
const getHeader = getState => ({ headers : { 'x-auth': getState().authState.token } });

export const editFirstName = (name) => ({
    type: 'EDIT_FIRST_NAME',
    payload: name
  });

export const editLastName = (name) => ({
    type: 'EDIT_LAST_NAME',
    payload: name
  });

export const editEmail = (email) => ({
    type: 'EDIT_EMAIL',
    payload: email
  });

export const changePicture = (picurl) => ({
  type: 'CHANGE_PICTURE',
  payload: url
});

export const linkFacebook = (fbObject) => async (dispatch, getState) => {
  const header = getHeader(getState);
  let updateValues = {}
  try{
    // look at the current state and just return if there are already
    // values there
    const state = getState();
    // if no first name use FB first name
    if (!state.userState.firstName) {
      updateValues.firstName = fbObject.name.split(' ')[0];
      dispatch(editFirstName(fbObject.name.split(' ')[0]));
    }
    // if no last name use FB last name
    if (!state.userState.lastName) {
      updateValues.lastName = fbObject.name.split(' ')[1];
      dispatch(editLastName(fbObject.name.split(' ')[1]));
    }
    // email should always be set on signup.
    // update picture url from facebook as FB will be the only way to set Item
    updateValues.picture = fbObject.picture.data.url;
    dispatch(changePicture(fbObject.picture.data.url));
    updateValues.facebook = fbObject;
    let updatedUser = await axios.put(`${url}/users`, updateValues, header);
    updatedUser = updatedUser.data;
    console.log(updatedUser);
    return
  } catch (e){
    console.log(e);
  }
};
