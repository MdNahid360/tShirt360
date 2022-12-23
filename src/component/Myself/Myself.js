import React from 'react';
import Special from '../Special/Special';

const myself = ({gift}) => {
    return (
        <div className="bg-green-600 p-3">
            myself
              <div className="bg-green-300 text-green-900 w-20 p-2">Gift :  {gift}</div>
           <br />
            <Special gift={gift}></Special>
        </div>
    );
};

export default myself;