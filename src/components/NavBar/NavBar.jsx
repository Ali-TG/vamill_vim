import { useState } from "react";
import { Cross as Hamburger } from 'hamburger-react';
import Cart from "../Pages/Cart/Cart";
import { json, Link } from 'react-router-dom'



const NavBar = (props) => {
    
    return(
        <header>
            <DesktopNav/>
            <MobileNav/>
        </header>
    )
}

const MobileNav = () => {
    const NavItems = [
        {name:'الصفحة الرئيسية', href:'/', background: 'bg-home'},
        {name:'المتجر', href:'/shop', background: 'bg-shop'},
        {name:'من نحن', href:'/about', background: 'bg-about'},
        {name:'تواصل معنا', href:'/contact', background: 'bg-contact'}]
    const [isOpen, setOpen] = useState(false)

    return(
        <nav>
            <div className='mobile'>
                    <h1 className='text-4xl p-1'><a href="/">Vim</a></h1>
                    <div className='flex items-center justify-between'>
                        <Cart/>
                        <Hamburger toggled={isOpen} toggle={setOpen} rounded color={!isOpen ? '#fff' : '#000'}/>
                    </div>
                </div>
                <div>
                    <div className='mobile-menu'>
                        <ul className='flex flex-col items-center justify-center'>
                            {NavItems.map((item) => {return <li className="m-4" key={item.name}><a href={item.href}>{item.name}</a></li>})}
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

const DesktopNav = () => {
    const [background, setBackground] = useState('bg-home')
    const [content, setContent] = useState(<HomeContent/>)
    const NavItems = [
        {name:'الصفحة الرئيسية', href:'/', background: 'bg-home', texts: <HomeContent/>},
        {name:'المتجر', href:'/shop', background: 'bg-shop', texts: <ShopContent/>},
        {name:'من نحن', href:'/about', background: 'bg-about', texts: <AboutContent/>},
        {name:'تواصل معنا', href:'/contact', background: 'bg-contact', texts: <ContactForm/>}]

    
    return(
        <nav className={`${background} w-full h-[998px] bg-center`}>
            <div>
                <div className='desktop'>
                        <h1 className='text-4xl p-4'><a href="/">Vim</a></h1>
                        <div className='flex items-center justify-between'>
                            <ul className={'flex items-center justify-between'}>
                                {NavItems.map((item) => {return <li key={item.name} onClick={() => setContent(item.texts)} className=' text-2xl m-6'><Link to={item.href} onClick={() => {return setBackground(item.background)}}>{item.name}</Link></li>})}
                            </ul>
                            <Cart/>
                        </div>
                </div>
                {content}
            </div>
        </nav>
    )
}

const HomeContent = () => {
    return(
        <h1 className='flex items-center justify-center pt-52 mx-auto text-9xl w-[550px] text-center text-white'>مستحضرات العناية والتجميل</h1>
    )
}

const ShopContent = () => {
    return(
        <h1 className='flex items-start pt-36 mr-8 text-8xl w-[600px] text-white'>اكتشف أفضل العلامات 
        التجارية
        </h1>
    )
}

const AboutContent = () => {
    return(
        <h1 className='flex items-start justify-center pt-36 text-9xl text-white'>من نحن</h1>
    )
}

const ContactForm = () => {
    const InputInfo = [
                {name:"Name", type:"text", placeholder:"الاسم"},
                {name:"Email", type:"email", placeholder:"البريد الإلكتروني"},
                {name:"Message", type:"text", placeholder:"الرسالة"}]
    return(
        <div className='flex items-start flex-col justify-between mx-16 mb-8'>
            <h1 className='text-6xl text-white'>تواصل معنا</h1>
            <form onSubmit="" action="">
                {InputInfo.map((item) => {return <Input id={item.name} type={item.type} placeholder={item.placeholder} />})}
            </form>
        </div>
    )
}

const Input = (props) => {
    
    return(
        <div className='my-12'>
            <input className="bg-opacity-5 text-2xl border-b-2 border-solid border-r-0 border-t-0 border-l-0 border-b-white bg-gray-400 p-2 w-[500px]" id={props.id} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default NavBar;