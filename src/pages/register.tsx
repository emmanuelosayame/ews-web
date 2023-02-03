import { auth, db } from "@lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { regVs } from "@lib/validations";
import { doc, setDoc, updateDoc } from "firebase/firestore";

const userRef = doc(db, "users", "user-id");

const Register = () => {
  const router = useRouter();
  const register = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(userRef, {});
    } catch (err) {}
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          phoneNo: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={regVs}
        onSubmit={register}>
        {({ dirty, errors, getFieldProps }) => <div></div>}
      </Formik>
    </div>
  );
};

export default Register;
