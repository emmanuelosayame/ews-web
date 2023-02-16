import { db } from "@lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ewscRef = doc(db, "ewsc", "ewsc-id");

const CheckIn = () => {
  const router = useRouter();
  const ewscId = router.query.id?.toString();

  const [ewsc, setEwsc] = useState<any>({});

  useEffect(() => {
    (async () => {
      const { data } = await getDoc(ewscRef);
      setEwsc(data());
    })();
  }, []);
  return (
    <>
      <div>
        <button>Checkin</button>
      </div>
    </>
  );
};

export default CheckIn;
