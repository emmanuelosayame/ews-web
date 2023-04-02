import Image from "next/image";
import FacebookSvg from "public/facebook.svg";
import InstagramSvg from "public/instagram.svg";
import TwitterSvg from "public/twitter.svg";
import LinkedInSvg from "public/linkedin.svg";

const Footer = () => {
  return (
    <div className='bg-shinygray pt-40 relative'>
      <div
        className='md:h-52 bg-g-footer w-10/12 md:w-9/12 mx-auto absolute top-5 shadow-xl 
      left-1/2 -translate-x-1/2 rounded-2xl md:rounded-lg p-5 md:p-10 md:flex md:justify-between md:gap-10 md:items-center'>
        <div className='space-y-4'>
          <h3 className='font-semibold text-xl font-montserrat'>
            Join our productivity community
          </h3>

          <p className='text-sm font-montserrat'>
            Receive exclusive offers, inspirational stories and travel
            regulation updates.
          </p>
        </div>
        <div className='space-y-2'>
          <div className='space-y-4 md:space-y-0 md:flex md:bg-shinygray rounded-xl p-1'>
            <input
              className='w-full md:w-2/3 bg-shinygray rounded-xl
               md:rounded-none md:bg-transparent py-3 px-3 '
              placeholder='Enter email address'
            />

            <button className='btn-green-g rounded-xl md:w-1/3 p-3 md:p-0 w-full text-white'>
              Request to join
            </button>
          </div>

          <p className='text-sm'>
            By signing up, you agree to our Terms of Service and Privacy Policy.{" "}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-7 md:gap-2 bg-footer py-3 px-5 md:px-28 md:pb-10 pt-28'>
        <div className='w-fit md:w-full text-white md:col-span-2'>
          <div className='flex gap-2 items-center'>
            <Image
              alt='logo-full'
              src='/EWSLogo.png'
              width={140}
              height={50}
              className='text-sm w-12'
            />
            <div className='text-white'>
              <h3 className='font-bold text-xl leading-4'>ETERNAL</h3>
              <p className='text-sm'>WORKSPACE</p>
            </div>
          </div>

          <div className='flex items-center gap-3 py-1 md:pt-7'>
            <a href='http://www.facebook.com/eternalworkspace'>
              <FacebookSvg className='w-6 md:w-auto' />
            </a>

            <a href='http://www.instagram.com/eternalworkspace'>
              <InstagramSvg className='w-6 md:w-auto' />
            </a>
            <a href='http://www.twitter.com/eternalworkspace'>
              <TwitterSvg className='w-6 md:w-auto' />
            </a>
            <a href='http://www.linkedin.com/eternalworkspace'>
              <LinkedInSvg className='w-6 md:w-auto' />
            </a>
          </div>
        </div>
        {/* next */}
        <div className='text-cgray flex flex-col gap-2 text-[12px] md:text-sm'>
          <h3 className='text-lg font-medium text-white mb-2'>Company</h3>
          <p>About us</p>
          <p>For business</p>
          <p>List your space</p>
        </div>
        <div className='text-cgray flex flex-col gap-2 text-[12px] md:text-sm'>
          <h3 className='text-lg font-medium text-white mb-2'>Support</h3>
          <p>Contact us</p>
          <p>FAQs</p>
          <p>Become a partner</p>
        </div>
        <div className='text-cgray flex flex-col gap-2 text-[12px] md:text-sm'>
          <h3 className='text-lg font-medium text-white mb-2'>Legal</h3>
          <p>Terms and condition</p>
          <p>Privacy Policy </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
