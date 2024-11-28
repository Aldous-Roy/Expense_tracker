export const useGetUserInfo = () => {
    const{name ,profile,userId,auth}=JSON.parse(localStorage.getItem('authInfo'));
    return {name ,profile,userId,auth};
};