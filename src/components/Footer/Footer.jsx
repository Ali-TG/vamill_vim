import FooterImg from '/public/static/imgaes/Footer.png'
const Footer = () => {
    return(
        <footer className='max-w-full relative bottom-0 flex items-center justify-between text-white'>
            <img className='w-full' src={FooterImg} alt="" />
        </footer>
    )
}

export default Footer;