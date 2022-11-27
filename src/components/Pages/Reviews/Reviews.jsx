import { motion } from "framer-motion";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";
import Content from "../Content/Content";
import rate from '../../../assets/Group 12.svg';
import img1 from '../../../assets/pexels-moose-photos-1587009 1.png';
import img2 from '../../../assets/pexels-ali-pazani-2613260 1.png';
import img3 from '../../../assets/pexels-daniel-xavier-1239288 1.png';
import img4 from '../../../assets/pexels-moose-photos-1036622 1.png';
import img5 from '../../../assets/pexels-diego-felipe-de-souza-1771999 1.png';
import img6 from '../../../assets/pexels-mentatdgt-1024311 1.png';

const Reviews = () => {
  const customerReviews1 = [
    {src:img1,
      review: 'قد تحولت الى منتجاتهم وشهدت تحسنًا كبيرًا في لون البشرة والبثور وحتى الهالات السوداء. أنا الآن أحد أكبر المعجبين بهم ولا أستخدم شيئًا  غير منتوجاتهم..',
      clientName: 'تيري ميلر'},

    {src:img2,
      review: 'أحب طريقة استخدامهم للمكونات الطبيعية. إنها متعددة الاستخدامات ، ويمكنك استخدامها لأنواع مختلفة من البشرة.....',
      clientName: 'لوري هولاند'},

    {src:img3,
      review: 'ساعدني Vimcosmo على الشعور بثقة أكبر بشأن مظهري وسمح لي بترك شخصيتي تتألق. المكياج خفيف الوزن ، لذا لا يبدو وكأنه ...',
      clientName: 'ساندا هوسير'}]
  
  const customerReviews2 = [
    {src:img4,
      review: 'لقد كنت أستخدم Vimcosmo منذ بضعة أسابيع ، ويمكنني أن أرى اختلافًا ملحوظًا في بشرتي. أصبح أكثر صحة ونعومة وإشراقًا.', 
      clientName: 'ماريلاند كول'}, 

    {src:img5,
      review: 'لقد كنت أستخدم منتجات Vimcosmo منذ بضع سنوات حتى الآن ، وما زالت مستحضرات التجميل المفضلة لدي. الألوان نابضة بالحياة ....', 
      clientName: 'كاتي هاربر'}, 

    {src:img6,
      review: 'أحب طريقة استخدامهم للمكونات الطبيعية. إنها متعددة الاستخدامات ، ويمكنك استخدامها لأنواع مختلفة من البشرة...', 
      clientName: 'لوري هولاند'}
  ] 
  return(
    <div>
      <ScrollingCarousel className="w-full">
        {customerReviews1.map((item) =>{
          return <Review src={item.src} review={item.review} rate={rate} clientName={item.clientName} />
        })}
      </ScrollingCarousel>
      
      <ScrollingCarousel className="w-full">
        {customerReviews2.map((item) => {
          return <Review src={item.src} review={item.review} rate={rate} clientName={item.clientName} />
        })}
      </ScrollingCarousel>
    </div>
  )
}

const Review = ({src, alt, review, clientName, rate=rate}) => {
  return(
    <div className='flex items-center justify-between m-4 p-6 shadow-lg bg-white rounded-3xl'>
      <img className='w-[130px] h-[130px]' src={src} alt={alt}/>
      <div className='flex flex-col items-start justify-between mx-2 mb-2 w-[300px] h-[100px]'>
        <img className='' src={rate} alt='stars' />
        <p className='w-[270px] text-justify mt-1'>
          {review}
        </p>
        <span className='font-bold text-xs mt-3'>
          {clientName}
        </span>
      </div>
    </div>
  )
}

export default Reviews;