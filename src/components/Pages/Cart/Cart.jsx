import cart from './../../../assets/cart.svg'
const Cart = () => {
    return(
        <div className='relative'>
            <img className='w-8 h-8 m-2 cursor-pointer' src={cart} alt='Cart' />
            <div className='notification'></div>
        </div>
    )
}

export default Cart;