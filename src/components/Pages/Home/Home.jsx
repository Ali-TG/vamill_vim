import Content from '../Content/Content';
import Reviews from '../Reviews/Reviews';
import Background from './../../../assets/Background.png'
const Home = () => {
    return(
        <div className=''>
            <div className='relative'>
            </div>
            <Reviews/>
        </div>
    );
};

export const HomeBackground = () => {
    return(
        <div className='bg-home min-w-full h-[996px] bg-center absolute top-0 z-[-1]'>
            <h1>مستحضرات العناية والتجميل</h1>
        </div>
    );
};


export default Home;