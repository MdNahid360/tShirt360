import React from 'react';

const tShirt = (props) => {
    let {tShirt, handleAddToCart} = props;
    const {index, price, picture, name, gender} = tShirt;
    return (
        <div className='w-[300px] bg-white rounded-md shadow-lg shadow-gray-300/50 duration-150 hover:shadow-gray-400/50'>
             <div className="overflow-hidden h-[360px] p-3 rounded-lg">
                  <img className="w-[100%] rounded-lg" src={picture} alt="" />
             </div>
             <div className="px-3 py-4">
                <h3 className='font-[600] text-lg'>{name}</h3>
                <h1 className='text-4xl font-[600] text-orange-600'>${price}</h1>
                <p>For : {gender}</p>
                <button onClick={()=>{handleAddToCart(tShirt)}} className='text-center bg-purple-700 duration-100 hover:bg-purple-600 w-full mt-2 rounded-lg p-2 text-white shadow-md shadow-gray-500/50'>Order Now</button>
             </div>
        </div>
    );
};

export default tShirt;