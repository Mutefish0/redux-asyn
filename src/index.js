/*
* redux-asyn
* */

export default function asynMiddleware(){ 
    return next => action =>{
        next(action)
        let { type, asyn, ...param } = action
        if(asyn) asyn({ dispatch : next, ...param })
        return action
    }
}
