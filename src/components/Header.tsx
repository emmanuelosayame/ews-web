import Image from "next/image";
import { Bars3Icon, HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import useMediaQuery from "@lib/Hooks/useMediaQuery";
import Avatar from "public/avatar.svg";
import { useRouter } from "next/router";

const Header = ({ initialTrans }: { initialTrans: boolean }) => {
  // const mq = useMediaQuery();
  const router = useRouter();
  return (
    <div
      className={`flex items-center fixed inset-x-0 top-0 z-50
     text-white px-2 md:px-14 py-3 gap-3 text-xl ${
       !initialTrans ? "bg-clightblue" : ""
     }`}>
      <div className='flex items-center gap-2 flex-1 '>
        <Image
          alt='logo'
          src='/logo.png'
          width={140}
          height={44}
          className=''
        />
      </div>

      <Link href='' className='hidden md:block text-white text-base'>
        List your space
      </Link>

      <Link href='' className='hidden md:block text-base'>
        Join our community
      </Link>

      <button
        onClick={() => router.push("/login")}
        className='flex items-center gap-2 ml-4'>
        <Avatar />
        <p>Login</p>
      </button>
    </div>
  );
};

export default Header;
