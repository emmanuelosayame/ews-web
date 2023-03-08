import Image from "next/image";
import { Bars3Icon, HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import useMediaQuery from "@lib/Hooks/useMediaQuery";
import Avatar from "public/Avatar.svg";

const Header = ({ initialTrans }: { initialTrans: boolean }) => {
  // const mq = useMediaQuery();
  return (
    <div
      className={`flex items-center fixed inset-x-0 top-0 z-50
     text-white px-2 md:px-14 py-2 gap-3 text-xl ${
       !initialTrans ? "bg-clightblue" : ""
     }`}>
      <div className='flex items-center gap-2 flex-1'>
        <Image
          alt='logo'
          src='/logo.png'
          width={170}
          height={48}
          className=''
        />
      </div>

      <Link href='' className='hidden md:block text-cwhite'>
        List your space
      </Link>

      <div className='flex items-center gap-1 text-cwhite'>
        <HeartIcon width={30} color='white' />
        <p className='hidden md:block'>Wish lists</p>
      </div>

      <div className='flex items-center px-2 py-1 gap-2 rounded-3xl border-2 border-cwhite'>
        <Bars3Icon width={20} className='text-cwhite' />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
