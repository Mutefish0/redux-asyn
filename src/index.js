/*
* redux-asyn
* */

export default function asynMiddleware(){ 
    return function(next){
            return function newDispatch(action){
                next(action)
                let { type, asyn, ...param } = action
                // exist asyn property
                if(asyn) {
                        //if asyn is an action,just dispatch it directly
                      if(typeof(asyn)==='object'&&asyn.type) newDispatch(asyn)
                      else if(typeof(asyn)==='function'){
                          //if asyn is an function, then excute it
                          let result = asyn({ dispatch : next, ...param })
                          //if result exists
                          if(result){
                              //if result is an action,just dispatch it directly
                              if(typeof(result)==='object'&&result.type) newDispatch(result)
                              //if result is a Promise...
                              else if(typeof(result.then)==='function') result.then((nextAction)=>{
                                  if(nextAction!==undefined)
                                      newDispatch(nextAction)
                                  return nextAction
                              })
                          }
                      }
                    }
                return action
        }
    }
}
