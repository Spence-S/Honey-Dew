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

export const linkFacebook = () => ({
  type: 'LINK_FACEBOOK'
});
