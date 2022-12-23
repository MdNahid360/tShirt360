import React, { createContext, useState } from 'react';
import Father from '../Father/Father';

export const RingContext = createContext('ring')

const Grandpa = () => {


    let [gift, setGift] = useState(1)
    const updateGift = () => {
        const num = gift + 1
        setGift(num)
    }
    let vlu = 'new RING ( !!! to grandpa component )'
    return (
       <RingContext.Provider value={[gift, setGift]}>
            <div className="border p-3 m-auto w-[80%] bg-gray-100">
           <div className="flex items-center border-b pb-2">
               Grandpa
               <button className='bg-white px-3 py-2 ml-16' onClick={updateGift}>Update</button>
           </div><br />
            <div className="bg-purple-300 text-purple-900 w-20 p-2">Gift :  {gift}</div>
                <br /><Father gift={gift}></Father>
        </div>
       </RingContext.Provider>
    );
};

export default Grandpa;