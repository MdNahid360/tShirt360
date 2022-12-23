import { TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Cart = ({cart, handleRemoveCart}) => {
    let msg ;
    if (cart.length === 0) {
        msg = 'Product not added';
    }else{
        msg = '';
    }
     return (
        <div className="bg-gray-200 p-2 h-full">
             <h1 className='font-bold text-lg pb-2'>Product Summary</h1> <hr className='bg-gray-900 border'/>
             <p className='text-center mt-2'>{msg}</p>           
            {
                cart.map(item =>  <div className="bg-white flex items-center justify-between mt-2 px-2 py-2 rounded-lg">
                                   <div className="flex items-center">
                                       <img src={item.picture} className='w-[70px] h-[90px] rounded-xl' alt="" />
                                       <h1 className='ml-2'>{item.name}</h1>
                                    </div>
                                    <h1>${item.price}</h1>
                                    <button onClick={()=> handleRemoveCart(item)} className='bg-red-100 p-2 rounded-full text-red-400'>
                                    <TrashIcon className="w-6"></TrashIcon>
                                    </button>
                                </div>)
            }
        </div>
    );
};

export default Cart;