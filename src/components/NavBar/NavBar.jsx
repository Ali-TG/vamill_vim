import { useState } from "react";
import { Cross as Hamburger } from 'hamburger-react';
import Cart from "../Pages/Cart/Cart";
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const NavItems = [
                    {name:'الصفحة الرئيسية', href:'/'},
                    {name:'المتجر', href:'/shop'},
                    {name:'من نحن', href:'/about'},
                    {name:'تواصل معنا', href:'/contact'}]
    return(
        <header>
            <nav>
                <div className='mobile'>
                    <h1 className='text-4xl p-1'><a href="/">Vim</a></h1>
                    <div className='flex items-center justify-between'>
                        <Cart/>
                        <Hamburger toggled={isOpen} toggle={setOpen} rounded color={!isOpen ? '#000' : '#fff'}/>
                    </div>
                </div>
                <div>
                    <div className='mobile-menu'>
                        <ul className='flex flex-col items-center justify-center'>
                            {NavItems.map((item) => {return <li className="m-4" key={item.name}><a href={item.href}>{item.name}</a></li>})}
                        </ul>
                    </div>
                </div>
                <div className='desktop'>
                    <h1 className='text-4xl p-1'><a href="/">Vim</a></h1>
                    <div>
                        <ul className='flex items-center justify-between'>
                            {NavItems.map((item) => {return <li key={item.name} className='ml-10'><Link to={item.href}>{item.name}</Link></li>})}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;