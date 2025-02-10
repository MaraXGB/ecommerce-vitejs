import { useContext } from "react";
import {ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'
const Card =(data)=>{
    const context = useContext(ShoppingCartContext);
    return(
        <div className="bg-white cursor-pointer w-56 h-70  rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-2 left-2 bg-white/60 rounded-lg text-black text-sm px-3 py-2">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
                <div className="absolute -bottom-4 right-4 flex justify-center items-center border-lg bg-indigo-950 shadow-lg text-white w-10 h-10 rounded-full text-lg font-bold"
                onClick={() => context.setCount(context.count + 1)}>
                <PlusIcon className="w-6 h-6" />
                </div>
            </figure>
            <p className="flex justify-between mt-5">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    );
}
export default Card;