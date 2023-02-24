import Image from "next/image";
import { Bars3Icon, HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className='flex items-center fixed inset-x-0 top-0 z-50
     text-white px-14 py-2 gap-2 text-xl'>
      <div className='flex items-center gap-2 flex-1'>
        <Image alt='logo' src='/EWSLogo.png' width={50} height={50} />
        <div className='text-white '>
          <h3 className='text-2xl font-semibold '>ETERNAL</h3>
          <p className='text-base leading-3'>WORKSPACE</p>
        </div>
      </div>

      <Link href=''>List your space</Link>

      <div className='flex items-center gap-1'>
        <HeartIcon width={30} />
        <p>Wish lists</p>
      </div>

      <div className='flex items-center px-2 py-1 gap-2 rounded-3xl ring-2 ring-white'>
        <Bars3Icon width={20} />
        <Image alt='avatar' src='Avatar.svg' width={35} height={35} />
      </div>
    </div>
  );
};

export default Header;
