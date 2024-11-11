import React from 'react'
import { Footer } from '../components/Footer'

const DayTwo = () => {
  return (
    <div className='text-center flex flex-col items-center space-y-6 justify-center sm:text-3xl pt-32'>
      <div className='group p-4 bg-red-400 w-fit rounded-xl space-x-4'>
        <span>animesh kakoty</span>
        {/* if we name the parent div as group and give invisible as classname to one of its children then we can applu styles like make it visible in hover etc with group-hover:visible  */}
        <span className='invisible group-hover:visible group-hover:bg-blue-400 border border-white px-2 py-1 rounded-full'>call me </span>
      </div>

      {/* peer class => style an element based on the state of parent element */}
      <div className=' space-y-5 px-4 py-3 rounded-xl border-2 border-sky-500'>
        <h1>here the text in p will apppear if its parent class is invalid, using peer class only apply to children  </h1>
        <input type="email" className='peer text-blue-700 px-3 py-2 border rounded-xl font-bold'/>
        <p className='invisible peer-invalid:visible text-red-800'>
          write a valid email
          {/* here the p tag will apppear if its parent class is invalid */}
        </p>
      </div>

      {/* peer with specific name */}
      <div>
        <fieldset className=''>
          <legend>Fieldset is html tag here in input boxes of radio we have to use the name='status' thingy then it will work , as it automatically unchecked another input box </legend>
          <input id='draft' type="radio" className='peer/draft' name='status' />
          <label htmlFor="draft" className='peer-checked/draft:text-blue-900'>draft button </label>

          <input id='published' type="radio" className='peer/publishedName' name='status'/>
          {/* <input id='published' type="radio" className='/publishedName' name='status'/> */}
          <label htmlFor="pasas" className='peer-checked/publishedName:text-blue-200'>publish radio button </label>

          <div className='hidden peer-checked/draft:block'>its in draft format</div>
          <div className='hidden peer-checked/publishedName:block'>its published </div>
        </fieldset>
      </div>

      {/* star class like i dont want to style  */}
      <div className='sm:mx-24 mx-10'>
        <h1 className=''>using the 
          <span className='relative mx-3'>
            <span className='absolute bg-yellow-500 skew-x-3 -inset-2'></span>
            <span className='relative skew-y-2 -inset-2'>*:</span>
          </span>
           thing before writing the styles we basically have to write the css once because things after *: will apply each children iof parent </h1>
        <ul className='*:bg-blue-600 justify-center items-center text-center  grid  sm:grid-cols-4 grid-cols-2 *:rounded-full *:border *:border-sky-300 gap-5 sm:*:px-4 *:px-1 *:py-1 md:text-xl text-xs sm:text-lg  '>
          <li className='hover:bg-sky-800 hover:text-black transition duration-100  '>sales</li>
          <li className='hover:bg-sky-800 hover:text-black transition duration-100  '>marketing</li>
          <li className='hover:bg-sky-800 hover:text-black transition duration-100  '>SEO</li>
          <li className='hover:bg-sky-800 hover:text-black transition duration-100  '>Design</li>
          <li className='hover:bg-sky-800 hover:text-black transition duration-100  '>Security</li>
          <li className='hover:bg-sky-800 hover:text-black transition duration-100  '>Mobile</li>
          <li className='hover:bg-sky-800 hover:text-black transition duration-100  '>UI/UX</li>
          <li className='hover:bg-sky-800 hover:text-black transition duration-100  '>UI/UX</li>
        </ul>
      </div>

      {/* has* thingy =>  */}
      <div className=' *:flex sm:mx-24 flex flex-col items-center sm:*:gap-5 *:gap-2 *:px-4 *:py-2 *:rounded-xl '>
        <h1>we use has-[:checked]:style to apply if it checked then apply red bg if not null and dont forget to use the name="status" thingy </h1>
        <div className='has-[:checked]:bg-red-900 sm:w-52 '>
          <h1>Google Play</h1>
          <input type="radio" className=' checked:border-red-400' name='status' />
        </div>
        <div className='has-[:checked]:bg-red-900 sm:w-52'>
          <h1>Google Play</h1>
          <input type="radio" className='checked:border-red-400' name='status' />
        </div>
        <div className='has-[:checked]:bg-red-900 sm:w-52'>
          <h1>Google Play</h1>
          <input type="radio" className='checked:border-red-400' name='status' />
        </div>
      </div>

      <div>
        <h1 className=''>When you looked    
          <span className='relative mx-3'>
            <span className='block skew-y-3 skew-x-6 -inset-1 bg-pink-500 absolute'></span>  
            <span className='relative'>annoyed</span>
          </span>          
          all the time people think you are busy</h1 >
      </div>

      

      <Footer prevLink={'/dayOne'} nextLink={'/dayThree'}/>
    </div>
  )
}

export default DayTwo