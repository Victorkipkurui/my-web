import myphoto from '../assets/images/My Photo.jpg'

const FrontPage = () => {

  return (   
<div className='flex justify-center items-center my-10 mx-auto max-w-screen-xl w-full px-4 sm:space-x-4 space-y-4 sm:space-y-0 flex-col lg:flex-row lg:space-y-0 lg:space-x-4'>
  <div className='relative overflow-hidden w-auto pr-4 hover:scale-110 transform transition-transform duration-300'>
    <img
      src={myphoto}
      className='animate-slideInLeft delay-500 w-auto h-96 rounded-full'
      alt='myphoto'
    />
  </div>
  <div className="absolute w-20 h-20 bg-blue-300 sm:animate-rotate hidden sm:block"></div>
  <div className='relative overflow-hidden w-1/2 pl-4 flex items-center'>
    <h1 className='animate-slideInRight delay-200 font-bold text-3xl md:text-5xl text-center'>
      Crafting Seamless Web Experiences <br />
      Through Data-Driven Decisions.
    </h1>
   
  </div>
</div>
  )
}
export default FrontPage