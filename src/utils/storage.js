
export function checkXAuth  (getState) {
  if (getState().auth.token) { return true } ;

}

export function setXAuth  (token) {
  window.localStorage.setItem('x-auth', token);
return;
}

export function getXAuth () {
  return window.localStorage.getItem('x-auth')
}

export function getHeader   () {
  let token = window.localStorage.getItem('x-auth');
  return { headers: { 'x-auth': token } };
}

export function clear() {
  window.localStorage.clear();
  return;
}

export const loadState = () => {
  try{
    const serializedState = window.localStorage.getItem('state');
      if (serializedState === null || serializedState === undefined) {
        return undefined;
      }
    return JSON.parse(serializedState);
  } catch(err){
    console.log(err);
    return undefined;
  }
}

export const saveState = (state) => {
  try{
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
}
