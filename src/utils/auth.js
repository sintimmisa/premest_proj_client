import { setCookie,getCookie, deleteCookie } from "./Cookie"
import { deleteLocalStorage, getLocalStorage, setLocalStorage } from "./LocalStorage";


/**
 * Set auth function to store toekn and user values in Cookie and LocalStorage
 * @param {*} token 
 * @param {*} user 
 */
export const setAuth=(token,user)=>{
    setCookie("token",token);
    setLocalStorage("user",user);
}

/**
 * Set is Authenticated function check if token and uer obj are set 
 * @return {user} obj from localStorage
 * @else return {false}
 */

export const isAuthenticated=()=>{
    if (getCookie('token') && getLocalStorage('user')){
        return getLocalStorage('user')
    }else{
        return false
    }

}

export const logout=(next)=>{
    deleteCookie('token');
    deleteLocalStorage('user');

    next();
}