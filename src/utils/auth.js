import { setCookie } from "./Cookie"
import { setLocalStorage } from "./LocalStorage";


/**
 * Set auth function to store toekn and user values in Cookie and LocalStorage
 * @param {*} token 
 * @param {*} user 
 */
export const setAuth=(token,user)=>{
    setCookie("token",token);
    setLocalStorage("user",user);
}