import React,{useState} from 'react';
import "./BGdisplay.css";
import {Button} from "react-bootstrap";

const BulbReactiondisplay = () => {
     const [cls,setCls]=useState("bulboff");
    return (
        <div className={cls}>
                    <Button onClick={()=>(cls === "bulb"?setCls("bulboff"): setCls("bulb"))}
                    variant={cls==="bulb"?"danger":"success"}></Button>
                    <Button>Off</Button>

    
        </div>
    );
};


export default BulbReactiondisplay;