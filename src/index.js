/*
* redux-asyn updated
* */

export default function asynMiddleware(){ 
    return next => action =>{
        next(action) 
        let { type, asyn, ...param } = action
        if(asyn) 
            {
              let promise = asyn({ dispatch : next, ...param })
              if(promise instanceof Promise) promise.then((nextAction)=>next(nextAction))
            }
        return action
    }
}
