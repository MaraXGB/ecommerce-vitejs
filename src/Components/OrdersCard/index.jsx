import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;
    return(
        <div className="w-80 flex justify-between items-center mb-2 border-shadow-sm border border-gray rounded bg-white shadow-lg p-4 mt-4">
            <p>
                <span className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-4 h-4 text-indigo-950"/>
                    01.02.23
                </span>
                <span className="flex items-center gap-2">
                <ShoppingCartIcon className="w-4 h-4 text-indigo-950"/>
                {totalProducts}
                </span>
            </p>
            <p className='flex items-center relative'>
            <span className='font-bold text-lg mr-4'>${totalPrice}</span>
            <ChevronRightIcon className="w-10 h-10 rounded-full p-1 text-white bg-indigo-950 absolute -right-8 -top-2"/>
            </p>
            
        </div>
    );
}

export default OrdersCard;