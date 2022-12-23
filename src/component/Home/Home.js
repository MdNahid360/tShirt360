import React from 'react';
import { useState } from 'react';
import useTShirts from '../../Hooks/useTeshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
 
const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem) =>{
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {     
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }else{
            alert('item already added to cart')
        }
    }
    const handleRemoveCart = (selectedItem) =>{
            const rest = cart.filter(tsrt => tsrt._id !== selectedItem._id);
            setCart(rest)
    }
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3'>
             <div className="bg-gray-100 lg:col-span-3 md:col-span-2 flex justify-center py-4">
                <div className="grid lg:grid-cols-3 md:cols-2 cols-1 m-auto gap-6 mt-3 ">
                {
                    tShirts.map(tShirt => <TShirt key={tShirt.index} handleAddToCart={handleAddToCart} tShirt={tShirt}></TShirt>)
                }
                </div>
             </div>
             <div className="md:static absolute">
                  <Cart handleRemoveCart={handleRemoveCart} key={cart._id} cart={cart}></Cart>
             </div>
        </div>
    );
};

export default Home;