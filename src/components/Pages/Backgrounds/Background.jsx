const HomeBackground = () => {
    return(
        <div className='bg-home w-full h-[600px] md:h-[998px] bg-center z-[-1]  flex items-center justify-center'>
            <h1 className='text-white md:text-9xl text-6xl md:w-[600px] w-[280px] text-center'>مستحضرات العناية والتجميل</h1>
        </div>
    );
};

export const ShopBackground = () => {
    return(
        <div className='bg-shop w-full h-[600px] bg-center z-[-1] flex items-center justify-center'>
            <h1 className='text-white md:text-9xl text-6xl w-[280px] md:w-[600px] text-center'>
            اكتشف أفضل العلامات 
        التجارية
            </h1>
        </div>
    )
}

export const AboutBackground = () => {
    return(
        <div className='bg-about w-full h-[600px] bg-center z-[-1] flex items-center justify-center'>
            <h1 className='text-white md:text-9xl text-6xl md:w-[600px] w-[280px] text-center'>
            من نحن  
            </h1>
        </div>
    )
}

export const ContactBackground = () => {
    return(
        <div className='bg-contact w-full h-screen bg-center z-[-1]'>
            <ContactForm/>
        </div>
    )
}

const ContactForm = () => {
    const InputInfo = [
                {name:"Name", type:"text", placeholder:"الاسم"},
                {name:"Email", type:"email", placeholder:"البريد الإلكتروني"},
                {name:"Message", type:"text", placeholder:"الرسالة"}]
    return(
        <div className='flex items-start flex-col justify-between md:mx-16 mx-14 md:mb-8'>
            <h1 className='md:text-6xl text-5xl text-white md:mt-0 mt-52'>تواصل معنا</h1>
            <form onSubmit="" action="">
                {InputInfo.map((item) => {return <Input id={item.name} type={item.type} placeholder={item.placeholder} />})}
            </form>
        </div>
    )
}

const Input = (props) => {
    
    return(
        <div className='md:my-12 my-12'>
            <input className="bg-opacity-5 text-2xl border-b-2 border-solid border-r-0 border-t-0 border-l-0 border-b-white bg-gray-400 p-2 min-w-[400px] " id={props.id} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default HomeBackground