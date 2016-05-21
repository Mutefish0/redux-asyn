export const LOGIN_SUCCESS = { type : 'LOGIN_SUCCESS' }
export const LOGIN_FAILED  = { type : 'LOGIN_FAILED',  info : null}
export const LOGIN_ASYN = {
    type : 'LOGIN_ASYN',
    asyn :
    ({dispatch,userName,pwd})=>{
        // simulate async procedure
        setTimeout(()=>{
            if(userName=='hello') {
                if(pwd=='123456') dispatch(LOGIN_SUCCESS)
                else dispatch({...LOGIN_FAILED,info:'your password is wrong.'})
            }
            else dispatch({...LOGIN_FAILED,info:`user '${userName}' does not exists.`})
        },2000)
    },
    pwd : null,
    userName : null
}


