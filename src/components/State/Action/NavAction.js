export const NavAction=(name,link,target)=>{
    return{
        type:"ADD_NAV_LINK",
        NavData:{name , link ,target},
    };
};