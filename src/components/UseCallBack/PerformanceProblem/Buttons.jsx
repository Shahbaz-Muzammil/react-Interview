import React from 'react';

const Buttons = ({handleFunction ,children}) => {
    return (
        <div>
            <h1>this buttons </h1>
            <Buttons onClick={handleFunction}>{children}</Buttons>
        </div>
    );
};

export default React.memo(Buttons);