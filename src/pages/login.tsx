import { auth } from "@lib//firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import { loginVs } from "@lib//validations";
import { InputTemp } from "@components/InputTemp";
import Image from "next/image";
import Link from "next/link";
import vector from "public/signinVector.png";
import EwsLogo from "public/EWSLogo.svg";
import useMediaQuery from "@lib/Hooks/useMediaQuery";

const Login = () => {
  const router = useRouter();
  const mq = useMediaQuery("(min-width: 800px)");

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
    <div className='w-screen h-screen flex justify-center items-center bg-[#D9D9D9]'>
      <div className='w-11/12 md:w-3/5 flex rounded-[27px] overflow-hidden drop-shadow-md'>
        {mq && (
          <div className='bg-ews w-[39%] p-5 flex flex-col justify-center gap-4'>
            <Image alt='vector' src={vector} width={800} />

            <h2 className='text-white font-semibold text-2xl'>
              Connect to <span className='text-[#033A40]'>workspaces</span> near
              you with EWS
            </h2>
          </div>
        )}
        {/* divider */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginVs}
          onSubmit={login}>
          {({ dirty, touched, errors, getFieldProps }) => (
            <Form className='flex flex-col gap-4 w-full md:w-[61%] p-7 items-center h-full bg-[#F6F3EF]'>
              <EwsLogo className='mb-5' />

              <div className='w-11/12 md:w-9/12 space-y-5'>
                <p className='text-start font-medium text-2xl'>Login</p>

                <InputTemp
                  fieldProps={getFieldProps("email")}
                  heading='Email'
                  placeholder='johnmoon@example.com'
                  type={"email"}
                  error={errors.email}
                  touched={touched.email}
                />
                <div className='flex flex-col items-end gap-2'>
                  <InputTemp
                    fieldProps={getFieldProps("password")}
                    heading='Password'
                    placeholder='password'
                    type={"password"}
                    error={errors.password}
                    touched={touched.password}
                  />
                  <Link
                    href={"/forgot-password"}
                    className='text-[#EB5757] text-xs w-fit italic'>
                    Forgot password?
                  </Link>
                </div>
                <button
                  className='w-full p-2 rounded-2xl btn-green-g text-white font-semibold'
                  type='submit'>
                  Login
                </button>

                <p className='text-xs'>
                  By signing up, you are indicating that you have read and agree
                  to the <a className='text-[#0F2980]'>Terms of Use</a> and{" "}
                  <a className='text-[#0F2980]'>Privacy Policy</a>.
                </p>
              </div>

              <button
                className='flex gap-3 items-center text-lg border border-white
               text-white rounded-2xl py-1 px-4 drop-shadow-md hover:bg-white/40'>
                <h3>Or continue with google</h3>
                <button className='drop-shadow-md'>
                  <Image
                    alt='google'
                    src='/google.svg'
                    width={35}
                    height={35}
                  />
                </button>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
