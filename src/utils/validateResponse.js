export default (resHeader, savedHeader) => {
  if (resHeader === savedHeader) {
   return
  }
  throw new Error("Response header did not match")
}
