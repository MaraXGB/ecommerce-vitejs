import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props;
    return(
        <div className="flex justify-start items-center mb-2">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light mr-10'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
            { handleDelete && (
                   <XMarkIcon className="size-6 text-black-500 cursor-pointer" 
                   onClick={() => handleDelete(id)}/>
            )}
            </div>
        </div>
    );
}

export default OrderCard;