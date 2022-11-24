import { motion } from "framer-motion";
import Imges from "./Imges";
import star from "./Rate";

const Reviews = () => {
  const review = [{rate: star, text:"", client:""},
                  {rate: star, text:"", client:""},
                  {rate: star, text:"", client:""},
                  {rate: star, text:"", client:""},
                  {rate: star, text:"", client:""},
                  {rate: star, text:"", client:""}]
  return(
    <motion.div className='carousel'>
      <motion.div className='inner-carousel'>
        {Imges.map((item) => {
          return(
            <motion.div className='review'>
              <img src={item} />
              <div className='flex'>
              {review.map((client) => {
                return(
                  <>
                    <span className=''>{client.rate}</span>
                    <p className=''>{client.text}</p>
                    <span className=''>{client.client}</span>
                  </>
                )
              })}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Reviews;