import React from 'react';
import PropsChild from './PropsChild';
import Header from './Header';

const Props = () => {
    const Cards = [
        {
            id:1,
            title:"PDAC",
            desc:"this is reducer of group",
            cardImg:`https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`
        },
        {
            id:2,
            title:"PickupBiz",
            desc:"this is reducer of group ",
            cardImg:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5odOCjwX7HBIwwFjXPKk14sLxWsscqZHzfzTdaTvvAtUO5fApgYGjbwD3UOGphwf-mJU&usqp=CAU`,
        }
    ]
        






    
    return (
        <div>
            <Header/>
            <h1>this is dynamic props</h1>
            <PropsChild initialState={Cards}/>
        </div>
    );
};

export default Props;