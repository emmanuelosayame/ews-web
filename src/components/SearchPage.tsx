import { useRouter } from "next/router";
import { ChangeEvent } from "react";

const SearchPage = () => {
  const router = useRouter();

  const handleSearch = async (e: ChangeEvent) => {
    //handle search
  };
  return (
    <>
      <div>
        <input onChange={handleSearch} />
      </div>
    </>
  );
};

export default SearchPage;
