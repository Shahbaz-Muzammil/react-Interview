import React,{createContext} from 'react';
import ComB from './ComB';  

const SendData=createContext();
const ComA = () => {
    return (
        <div>
            <SendData.Provider value={"Shahbaz Muzammil"}>

            <ComB/>

            </SendData.Provider>
        </div>
    );
};

export default ComA
export {SendData};