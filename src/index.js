/*
* redux-asyn
* */

export default function asynMiddleware(){ 
    return next => action =>{
        next(action) 
        let { type, asyn, ...param } = action
        if(asyn) 
            {
              let promise = asyn({ dispatch : next, ...param })
              if(typeof(promise.then)==='function') promise.then((nextAction)=>{
                    next(nextAction)
                    return nextAction 
                })
            }
        return action
    }
}
