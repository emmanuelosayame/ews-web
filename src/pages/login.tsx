import { auth } from "@lib//firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import { loginVs } from "@lib//validations";
import { InputTemp } from "@components/InputTemp";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log(email, password);
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-11/12 md:w-2/5 bg-white rounded-xl p-5 drop-shadow-md'>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginVs}
          onSubmit={login}>
          {({ dirty, touched, errors, getFieldProps }) => (
            <Form className='flex flex-col gap-4 w-full items-center h-full'>
              <div className='w-full space-y-2'>
                <p className='text-center font-semibold text-lg'>login</p>

                <InputTemp
                  fieldProps={getFieldProps("email")}
                  heading='Email'
                  placeholder='email'
                  type={"email"}
                  error={errors.email}
                  touched={touched.email}
                />
                <InputTemp
                  fieldProps={getFieldProps("password")}
                  heading='Password'
                  placeholder='password'
                  type={"password"}
                  error={errors.password}
                  touched={touched.password}
                />
                <button
                  className='w-full p-2 rounded-lg bg-green-500 text-white'
                  type='submit'>
                  Login
                </button>
                <div className='flex w-full justify-between'>
                  <Link
                    href={"/forgot-password"}
                    className='text-[13px] text-blue-500'>
                    Forgot Password ?
                  </Link>
                  <Link href={"/register"}>{"Don't have an acount yet?"}</Link>
                </div>
              </div>

              <div className='flex flex-col items-center'>
                <h3>Or continue with google</h3>
                <button className='drop-shadow-md'>
                  <Image
                    alt='google'
                    src='/google.svg'
                    width={50}
                    height={50}
                  />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
