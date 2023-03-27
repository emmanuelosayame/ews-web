import Layout from "@components/Layout";
import WifiIcon from "public/wifi.svg";
import TvIcon from "public/tv-outline.svg";
import AcIcon from "public/ac.svg";
import OfficeIcon from "public/office.svg";
import { workspaces } from "@lib/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import mainImage from "public/product.png";
import image1 from "public/product3.png";
import image2 from "public/product5.png";
import image3 from "public/product4.png";
import image4 from "public/product3.png";
import NoSmoking from "public/no-smoking.svg";
import { api } from "src/server/api";
import { Loading } from "@components/Loading";

const Display = () => {
  const router = useRouter();
  const id = router.query.id?.toString();

  const { data, isFetching, isLoading } = api.space.one.useQuery(
    { id },
    { enabled: !!id }
  );

  if (isFetching || isLoading) return <Loading />;

  return (
    <Layout>
      <div className='mx-auto w-11/12 md:w-10/12 h-full'>
        <div
          className='block md:grid grid-cols-1 md:grid-cols-4 grid-rows-2 mt-24 gap-2 md:h-[580px]
         rounded-3xl overflow-hidden'>
          <Image
            alt='product image'
            src={mainImage}
            className='col-span-1 md:col-span-2 row-span-2 w-full h-full'
          />
          <Image
            alt='product image'
            src={image1}
            className='col-span-1 row-span-1 w-full h-full'
          />
          <Image
            alt='product image'
            src={image2}
            className='col-span-1 row-span-1 w-full h-full'
          />
          <Image
            alt='product image'
            src={image3}
            className='col-span-1 row-span-1 w-full h-full'
          />
          <Image
            alt='product image'
            src={image4}
            className='col-span-1 row-span-1 w-full h-full'
          />
        </div>
        <div className='md:flex p-4'>
          <div className='w-full'>
            <div className='flex items-center gap-3 my-5'>
              <h3 className='text-2xl font-semibold'>{data?.name}</h3>
              <p className='rounded-md py-1 px-2 bg-neutral-300 text-white'>
                {data?.sub}
              </p>
            </div>
            <h3 className='text-lg font-medium'>About this space</h3>
            <p className='text-sm font-medium'>Workspace - {"1"} occupant</p>
            <p className='text-sm'>
              Looking for an office alternative to get work done and increase
              effectiveness? Look no further! Located at Ella’s Coffeehouse.
            </p>
            <p className='text-sm'>
              EWS -1 provides WiFi, a Smart TV, and a private backyard space
              with Adirondack chairs for relaxation during short breaks.
              Experience productivity like never before!
            </p>
            <div className='w-full border-b border-b-neutral-200 my-3' />
            <h3 className='text-lg font-medium'>Amenities</h3>
            <div className='grid grid-cols-3 py-2 text-sm gap-y-4'>
              <AmenityBlock text='Wifi'>
                <WifiIcon />
              </AmenityBlock>
              <AmenityBlock text='Office furniture'>
                <OfficeIcon />
              </AmenityBlock>
              <AmenityBlock text='Air conditioner'>
                <AcIcon />
              </AmenityBlock>
              <AmenityBlock text='No smoking'>
                <NoSmoking />
              </AmenityBlock>
              <AmenityBlock text='TV'>
                <TvIcon />
              </AmenityBlock>
            </div>
            <button className='text-blue-400 text-sm'>
              View all amenities
            </button>

            <h3 className='text-lg font-medium pt-10'>Policy</h3>
            <p>Policy cancellation</p>
            <div className='w-full border-b border-b-neutral-200 my-3' />
            <div className='text-sm'>
              <p>
                <span className='font-semibold'>
                  100% refund of amount paid
                </span>{" "}
                if you cancel at least 14 days before check-in.
              </p>
              <p>
                <span className='font-semibold'>50% refund of amount paid</span>{" "}
                (minus the service fee) if you cancel at least 7 days before
                check-in.
              </p>
              <p>
                {
                  "No refund if you cancel less than 7 days before check-in. Free cancellation deadlines are in the property's timezone. Learn more about cancellation policies."
                }
              </p>
            </div>
          </div>

          <div className='w-full p-2 motion-reduce:p-5 h-full'>
            <div
              className='bg-white rounded-2xl drop-shadow-xl w-full md:w-11/12 mx-auto
             border border-neutral-100 h-full'>
              <div className='h-20  p-5'>yoo</div>
              <div className='w-full border-b border-b-neutral-200 my-3' />
              <div className='flex flex-col gap-3 p-3'>
                <button className='rounded-xl py-2 px-4 bg-green-800 text-white mx-auto'>
                  BOOK NOW
                </button>
                <h3 className='text-2xl font-semibold'>
                  Hosted by Ella Luscious Delice
                </h3>
                <p>Language: English</p>
                <button className='text-sm text-blue-500 self-start'>
                  Contact host
                </button>
              </div>
              <div className='w-full border-b border-b-neutral-200 my-3' />
              <div className='p-4'>
                <div
                  className='border border-neutral-200 rounded-lg flex flex-col
                 md:flex-row items-center justify-between p-3 gap-3 md:gap-0'>
                  <div className='text-sm flex flex-col justify-center gap-4'>
                    <p>
                      {
                        "It’s easy to contact hosts and keep track of all your bookings when you have a EWS account"
                      }
                    </p>
                    <button
                      onClick={() => router.push("/login")}
                      className='p-1 border border-blue-400 text-blue-400 rounded-xl 
                      w-10/12 mx-auto hover:opacity-50'>
                      sign in
                    </button>
                  </div>

                  <Image
                    alt='vector'
                    src={"/vector.png"}
                    className=''
                    width={150}
                    height={80}
                  />
                </div>

                <div className='mx-auto text-center mt-10 space-y-4'>
                  <div className='flex items-center justify-center gap-3'>
                    <h3 className='font-semibold text-xl'>{data?.name}</h3>
                    <p className='rounded-md py-1 px-2 bg-neutral-300 text-white'>
                      {data?.sub}
                    </p>
                  </div>
                  <Link href='' className='text-blue-400'>
                    Report this property
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const AmenityBlock = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <div className='flex items-center gap-2'>
      {children}
      <p>{text}</p>
    </div>
  );
};

export default Display;
