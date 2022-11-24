import Background from './../../../assets/Background.png'
const Home = () => {
    return(
        <div className='absolute top-0 -z-10'>
            <div className='z-[-1]'>
                <img src={Background} alt='Background'/>
            </div>
        </div>
    )
}

export default Home;