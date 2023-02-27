import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className='bg-neutral-400 w-full flex flex-col md:flex-row
     justify-between items-center py-20 px-5 md:p-20 gap-10 md:gap-0'>
      <div className='w-80 text-white'>
        <Image
          alt='logo-full'
          src='/EWSLogo-full.png'
          width={140}
          height={50}
          className='text-sm'
        />

        <div className='flex items-center gap-3 py-1'>
          <a href='facebook.com'>
            <Image
              alt='facebook-logo'
              src='/facebook.svg'
              width={30}
              height={30}
            />
          </a>

          <a href='instagram.com'>
            <Image
              alt='instagram-logo'
              src='/instagram.svg'
              width={30}
              height={30}
            />
          </a>
          <a href='twitter.com'>
            <Image
              alt='twitter-logo'
              src='/twitter.svg'
              width={30}
              height={30}
            />
          </a>
          <a href='linkedin.com'>
            <Image
              alt='linkedin-logo'
              src='/linkedin.svg'
              width={30}
              height={30}
            />
          </a>
        </div>

        <p className='text-sm md:text-[11px] mt-5 md:mt-0'>
          Join our productivity community
        </p>
        <div className='relative flex bg-white h-10 md:h-8 p-1 rounded-lg overflow-hidden'>
          <input
            className='w-2/3 h-full p-1 outline-none'
            placeholder='Enter email address'
          />
          <button className='bg-green-800 text-white rounded-md text-[11px] h-full w-1/3'>
            Request to join
          </button>
        </div>
      </div>
      {/* next */}
      <div className='flex text-sm gap-10 pr-5'>
        <div className='text-cgray flex flex-col gap-2'>
          <h3 className='text-base font-medium text-white'>Company</h3>
          <p>About us</p>
          <p>For business</p>
          <p>List your space</p>
        </div>
        <div className='text-cgray flex flex-col gap-2'>
          <h3 className='text-base font-medium text-white'>Support</h3>
          <p>Contact us</p>
          <p>FAQs</p>
          <p>Become a partner</p>
        </div>
        <div className='text-cgray flex flex-col gap-2'>
          <h3 className='text-base font-medium text-white'>Legal</h3>
          <p>Terms and condition</p>
          <p>Privacy Policy </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
