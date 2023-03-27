import Layout from "@components/Layout";
import { Loading } from "@components/Loading";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { api } from "src/server/api";

const Catalogue = () => {
  const { data, isFetching } = api.space.many.useQuery({});

  if (isFetching && !data) return <Loading />;

  return (
    <Layout>
      <div className='pt-20 px-2 pb-10 w-full md:w-10/12 mx-auto'>
        <h3 className='text-lg md:text-2xl font-medium my-2'>
          Explore spaces that suit you
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4'>
          {data?.map((workspace) => (
            <Link
              key={workspace.id}
              href={`/catalogue/${workspace.id}`}
              className='text-sm p-1'>
              <Image
                alt='workspace'
                src={workspace.thumbnail}
                width={100}
                height={100}
                className='rounded-lg w-full'
              />
              <div className='md:flex items-center justify-between py-2'>
                <div className='flex items-center gap-3'>
                  <h3 className='font-semibold'>{workspace.name}</h3>
                  <p className='rounded-md py-1 px-2 bg-neutral-300 text-white'>
                    {workspace.sub}
                  </p>
                </div>
                <p className='inline-flex items-center gap-1 leading-4'>
                  <span>
                    <StarIcon width={18} />
                  </span>
                  {workspace.rating}
                </p>
              </div>
              <p className='text-[13px] leading-3'>{"1"} occupant</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Catalogue;
