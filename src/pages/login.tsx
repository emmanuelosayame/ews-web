import { auth } from "@lib//firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { loginVs } from "@lib//validations";

const Login = () => {
  const router = useRouter();
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {}
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginVs}
        onSubmit={login}>
        {({ dirty, errors, getFieldProps }) => <div></div>}
      </Formik>
    </div>
  );
};

export default Login;
