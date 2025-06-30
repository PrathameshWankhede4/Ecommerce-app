import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Founded with a passion for style and a mission to redefine everyday fashion, ThreadVerse brings you a curated collection of clothing that blends comfort, durability, and trend-setting designs. From casual basics to bold statement pieces, we cater to every vibe, every body, and every occasion.</p>
              <p>Our journey began with a simple belief: style should be effortless and accessible to everyone. That’s why we focus on premium fabrics, clean craftsmanship, and versatile fits — all at prices that make sense. Whether you’re dressing for work, weekends, or wanderlust, our collections are designed to elevate your wardrobe without complicating your life.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to make fashion accessible, sustainable, and empowering for everyone. We aim to provide high-quality clothing that blends comfort, style, and affordability — helping people express themselves confidently, every day.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 '>
          <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
