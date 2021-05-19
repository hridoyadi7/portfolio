import { motion } from 'framer-motion'
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import { fadeInUp,routeAnimation,stagger } from '../animations'
import ServiceCard from '../components/ServiceCard'
import {services} from '../data'

const index = ({endpoint}) => {

  console.log(endpoint);
  
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <h5 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Institute of Engineering and Management, Kolkata. I have some experience in
        Web Development and Machine learning. I teach DS and Algo. 
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
        <h4 className="my-3 text-xl font-bold tracking-wide">What I am doing</h4>
        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {
            services.map((service)=>(
              <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service}/>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index


export const getServerSideProps=async(context:GetServerSidePropsContext)=>{

  //calculation

  // const res= await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data=await res.json()

  // console.log("SERVER ",services)
  return {
    props:{
      endpoint:process.env.VERCEL_URL,
    }
  }
}


// export const getStaticProps=async(context:GetStaticPropsContext)=>{

//   //calculation

//   const res= await fetch('http://localhost:3000/api/services')
//   const data=await res.json()

//   console.log("SERVER ",services)
//   return {
//     props:{
//       services:data.services,
//     }
//   }
// }
