export const fetchData =(key)=>{
    return JSON.parse(localStorage.getItem(key))
}

export const deleteUser =(user)=>{
    return localStorage.removeItem(user);
}