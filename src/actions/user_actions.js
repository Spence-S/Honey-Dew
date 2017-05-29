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

export const changePicture = (url) => ({
  type: 'CHANGE_PICTURE',
  payload: url
});

export const linkFacebook = (fbObject) => (dispatch, getState) => {
  // just a ref for state values for development
  console.log(getState());
  // look at the current state and just return if there are already
  // values there
  const state = getState();
  // if no first name use FB first name
  if (!state.userState.firstName) {
    dispatch(editFirstName(fbObject.name.split(' ')[0]));
  }
  // if no last name use FB last name
  if (!state.userState.lastName) {
    dispatch(editLastName(fbObject.name.split(' ')[1]));
  }
  // email should always be set on signup.
  // update picture url from facebook as FB will be the only way to set Item
  dispatch(changePicture(fbObject.picture.data.url));
};
