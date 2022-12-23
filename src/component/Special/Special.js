import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [gift, setGift] = useContext(RingContext)
    return (
        <div className='bg-red-200 p-3'>
              <div className="bg-red-300 text-red-900 w-25 p-2">Gift :  {gift}
                 <button onClick={() => setGift(gift + 1)} className="ml-4 bg-white px-3 py-2">
                     update
                 </button>
              </div>
            <br />
            Special
        </div>
    );
};

export default Special;