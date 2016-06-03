# Redux Asyn

[![npm](https://img.shields.io/badge/npm-v1.2.4-blue.svg)](https://www.npmjs.com/package/redux-asyn)

a redux [middleware](http://redux.js.org/docs/advanced/Middleware.html) that support async actions for concise usage.

## Installation
```js
npm install redux-asyn 
```

## Usage

To enable redux-asyn, use [`applyMiddleware()`](http://redux.js.org/docs/api/applyMiddleware.html):
```js
import { createStore, applyMiddleware } from 'redux'
import asynMiddleware from 'redux-asyn'
import appReducer from './reducers/index'

const store = createStore(
  appReducer,
  applyMiddleware(asynMiddleware)
)
```

Then,you can define an asyc action simply by including a `asyn` property in your action:  
```js
//define an normal action 
export const ASYN_SUCCESS = {
  type : 'ASYN_SUCCESS'
}
 
//define an asyn action
export const SOME_ASYN_ACTION = {
    // like normal action, `type` property is required
    type : 'SOME_ASYN_ACTION',
    
    // for asyn action, 'asyn' property is  required additional
    // asyn must be a function, which will be called by accepting a object that include `dispatch` and 
    // the extra payload  after 'SOME_ASYN_ACTION' was dispatched
    asyn :  ({dispatch,payloadA,payloadB}) => {
          //here you can access  'payloadA' and 'payloadB' 
          console.log(payloadA)
          console.log(payloadB)
          //do some asyn work,for example:
          setTimeout(()=>{
            //after asyn finished, you can dispatch some normal action like 'ASYN_SUCESS'
            dispatch(ASYN_SUCCESS)
            console.log('asyn procedure finished')
          },1000)
    }
    
    /* you can add the payload here, it depends on your since it dose not do any influence
    ,
    paloadA : null,
    paloadB : null,
    */
}
```

Now, you can dispatch the asyn action anywhere:
```js
// 'payloadA' and 'payloadB' will be passed to your `asyn` function defined in your 'SOME_ASYN_ACTION'
let anAction = {...SOME_ASYN_ACTION, payloadA : 'some payload a', payloadB : 'some payload b'} 
dispatch(anAction)

// result:
// action SOME_ASYN_ACTION dispatched 
// console: some payload a
// console: some payload b
// one second after... 
// action ASYN_SUCCESS dispatched
// console: asyn procedure finished
```
###Support async function 

```js
export const SOME_FETCH = {
    type   : 'SOME_FETCH',
    asyn   : async function(/*{some optional payload pass here}*/){
        try{
            let response = await fetch('/')
            let text = await response.text()
            console.log(text)
            return SOME_FETCH_SUCCESS
        }
        catch(e){
            console.log(e.message)
            return SOME_FETCH_FAILED
        }
    }
}

export const SOME_FETCH_SUCCESS = {
    type   : 'SOME_FETCH_SUCCESS'
}

export const SOME_FETCH_FAILED = {
    type   : 'SOME_FETCH_FAILED'
}
```


That's all! 
