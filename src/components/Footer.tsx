import Image from "next/image";
import FacebookSvg from "public/facebook.svg";
import InstagramSvg from "public/instagram.svg";
import TwitterSvg from "public/twitter.svg";
import LinkedInSvg from "public/linkedin.svg";

const Footer = () => {
  return (
    <div className='py-3 px-7 md:px-28 md:py-16 bg-footer'>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-7 md:gap-2'>
        <div className='w-full text-white p-3 md:p-0 md:col-span-2'>
          <Image
            alt='logo-full'
            src='/EWSLogo-full.png'
            width={140}
            height={50}
            className='text-sm'
          />

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
        <div className='text-cgray flex flex-col gap-2 text-[12px] md:text-base'>
          <h3 className='text-base font-medium text-white mb-2'>Company</h3>
          <p>About us</p>
          <p>For business</p>
          <p>List your space</p>
        </div>
        <div className='text-cgray flex flex-col gap-2 text-[12px] md:text-base'>
          <h3 className='text-base font-medium text-white mb-2'>Support</h3>
          <p>Contact us</p>
          <p>FAQs</p>
          <p>Become a partner</p>
        </div>
        <div className='text-cgray flex flex-col gap-2 text-[12px] md:text-base'>
          <h3 className='text-base font-medium text-white mb-2'>Legal</h3>
          <p>Terms and condition</p>
          <p>Privacy Policy </p>
        </div>
      </div>
      <p className='text-base md:text-sm text-white font-montserrat font-medium mt-5 md:mt-0'>
        Join our productivity community
      </p>
      <div className='relative flex bg-white h-12 md:h-10 p-1 rounded-xl md:rounded-lg overflow-hidden md:w-80'>
        <input
          className='w-2/3 h-full p-1 outline-none'
          placeholder='Enter email address'
        />
        <button className='btn-green-g text-white rounded-md text-[11px] h-full w-1/3'>
          Request to join
        </button>
      </div>
    </div>
  );
};

export default Footer;
