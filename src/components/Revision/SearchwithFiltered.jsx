import React,{useState,useEffect} from 'react';

const SearchwithFiltered = () => {
    const Days=[
        "CAR","BIKE","PLANE","BOARD","BICYCLE",
    ]
    const [text,setText]=useState("");
    const [list,setList]=useState(Days)
    useEffect   (()=>{
        const filtered=Days.filter((elem)=>elem.toLowerCase().includes(text.toLowerCase()))
        setList(filtered)
    },[text])
    
    return (
            
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            {list.map((elem)=>{
                return(
                <ul>
                    <li>
                        {elem}
                    </li>
                </ul>
                )
            })}

        </div>
    );
};

export default SearchwithFiltered;


