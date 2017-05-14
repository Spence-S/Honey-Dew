
export function checkXAuth  () {
  if (window.localStorage.getItem('x-auth')) return true;
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

export function clear   (){
  window.localStorage.clear();
  return;
}
