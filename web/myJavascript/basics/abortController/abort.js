// See MDN document here : https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// AbortController interface allows you to stop web requests 
// when desired. 

const abortCtrl = new AbortController()
const signal = abortCtrl.signal // Returns the AbortSignal object associated with this object.

