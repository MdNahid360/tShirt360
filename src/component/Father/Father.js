import React from 'react';
import Myself from '../Myself/Myself';
const Father = ({gift}) => {
    return (
        <div className="bg-blue-100 p-3">
            father
            <div className="bg-blue-300 text-blue-900 w-20 p-2">Gift :  {gift}</div>
           <br /> <Myself gift={gift}></Myself>
        </div>
    );
};

export default Father;