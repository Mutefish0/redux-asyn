/*
* redux-asyn
* */

export default () => next => action =>{
    next(action)
    let { type, asyn, ...param } = action
    if(asyn) asyn({ dispatch : next, ...param })
    return action
}