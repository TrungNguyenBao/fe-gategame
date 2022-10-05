import { INFO_ME, TOKEN_ME, useAuth } from '../../lib/providers/auth-provider'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import useDevice from '../../lib/hooks/useDevice'
import { signin, signup } from '../../lib/services/auth'
import { Dialog } from '../shared/dialog/dialog'
import Panel from '../shared/panel'

interface LoginModalProps extends ReactProps {
  isOpen: boolean
  onClose: () => any
  logout: () => void
}
const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  logout,
}: LoginModalProps) => {
  const [tab, setTab] = useState(1)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const { isMobile } = useDevice()

  const onSubmit = async (data: any) => {
    console.log(data)

    // await login(data.email, data.password);
    // reset()
  }
  //   const handleFormSubmit = (e) => {
  //     e.preventDefault();

  //     // let email = e.target.elements.email?.value;
  //     // let password = e.target.elements.password?.value;

  //     // console.log(email, password);
  // };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      wrapperClass="fixed w-full h-screen top-0 left-0 z-100 flex flex-col items-center overflow-y-scroll py-20 no-scrollbar backdrop-blur"
      slideFromBottom="none"
    >
      <Panel className="relative w-full sm:w-[800px] h-auto ">
        <div className="absolute top-2 right-4 flex justify-end px-[6px]">
          {/* <div className="font-bold text-[20px] leading-[1.1] dark:text-white">
            Your Wallet
          </div> */}
          <AiOutlineClose
            className="text-white cursor-pointer mt-3"
            onClick={onClose}
          />
        </div>
        <div className="sm:flex gap-4 p-2">
          {isMobile && <div className=" w-full">
            <ul className="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => setTab(1)}
                  className={`inline-flex p-4 group ${tab === 1
                    ? 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    }`}
                >
                  SIGN IN
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => setTab(2)}
                  className={`inline-flex p-4 group ${tab === 2
                    ? 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    }`}
                  aria-current="page"
                >
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>}

          {/* cover image */}
          <div className="h-full w-full sm:w-1/2">
            {tab === 1 ? (
              <div className="relative">
                <img className="w-full h-full sm:relative object-cover rounded" src="/images/icon/bg_login.png" />
                <p className="absolute text-center leading-10 bottom-[25rem] sm:bottom-[5rem] ml-[10px] break-words text-[32px] font-extrabold text-white">
                  WELCOME TO <br /> GATEGAME
                </p>
              </div>
            ) : (
              <div className="relative">
                <img className="w-full h-full sm:relative object-cover rounded" src="/images/icon/bg_register.png" />
                <p className="absolute  text-center leading-10 bottom-[35rem] sm:bottom-[5rem] ml-[10px] break-words text-[32px] font-extrabold text-white">
                  WELCOME TO <br /> GATEGAME
                </p>
              </div>
            )}
          </div>

          {/* tab pc */}
          <div className="flex flex-col h-full w-full sm:w-1/2">
            {!isMobile && <ul className="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => setTab(1)}
                  className={`inline-flex p-2 group font-semibold ${tab === 1
                    ? 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    }`}
                >
                  SIGN IN
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => setTab(2)}
                  className={`inline-flex p-2 group font-semibold ${tab === 2
                    ? 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    }`}
                  aria-current="page"
                >
                  SIGN UP
                </a>
              </li>
            </ul>}
            <div className=" overflow-auto">
              {tab === 1 ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </Panel>
    </Dialog>
  )
}
export default LoginModal


const RegisterVerify = ({ email }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
    clearErrors,
  } = useForm()
  const auth = useAuth()
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data)
    setLoading(true)
    const { Error, Result } = await auth.verify({
      code: data.code,
      email
    });
    if (Error) {
      setError('registerError', { type: 'custom', message: Error });
      setLoading(false)
      return;
    }
  }

  const resendCode = async () => {
    setLoading(true)
    const { Error, Result } = await auth.resend({
      email
    });
    if (Error) {
      setError('registerError', { type: 'custom', message: Error });
      setLoading(false)
      return;
    }
    setLoading(false)
    setSent(true)
    setTimeout(() => {
      setSent(false)
    }, 3000)
  }

  return (
    <form className={loading ? 'opacity-60 pointer-events-none' : ''} onSubmit={e => {
      clearErrors()
      handleSubmit(onSubmit)(e)
    }}>
      <div className="mb-3 mt-3">
        <label
          className="block text-[#f3efefad] text-sm mb-2 pt-4"
          htmlFor="code"
        >
          We have sent a verify code to <a className='text-blue-300'>{email}</a>. Please check your mail to get the code. <br /><br />
          Verify Code:
        </label>
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Input your code here"
          id="code"
          aria-invalid={errors.username ? 'true' : 'false'}
          {...register('code', {
            required: 'Please enter your code',
          })}
        />
        <a onClick={resendCode} className={`text-blue-400 mt-2 block text-right cursor-pointer active:opacity-50 ${sent ? 'pointer-events-none opacity-30' : ''}`}>Resend verify code</a>
        {errors.username && (
          <span className="text-red-400" role="alert">
            {errors.code.message}
          </span>
        )}
      </div>
      {errors.registerError && (
        <span className="block text-red-400 px-2 pb-2" role="alert">
          {errors.registerError.message}
        </span>
      )}
      <button
        type="submit"
        className="inline-block px-7 py-3 bg-blueCustom text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Verify
      </button>
    </form>
  )
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError,
    clearErrors
  } = useForm()
  const auth = useAuth()
  const [showVerifyOtp, setShowVerifyOtp] = useState<boolean>(false)
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(false);
  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit = async (data: any) => {
    console.log(data)

    setLoading(true)
    setEmail(data?.email)

    const { Error, Result } = await auth.register(data);
    if (Error) {
      setError('registerError', { type: 'custom', message: Error });
      setLoading(false)
      return;
    }

    if (Result === 1 || Result === "1") {
      setShowVerifyOtp(true)
    }

    // await login(data.email, data.password);
    // reset()
  }

  return showVerifyOtp ? <RegisterVerify email={email} /> : (
    <form className={loading ? 'opacity-60 pointer-events-none' : ''} onSubmit={e => {
      clearErrors()
      handleSubmit(onSubmit)(e)
    }}>
      <div className="mb-3 mt-3">
        <label
          className="block text-[#f3efefad] text-sm mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Input your username here"
          id="username"
          aria-invalid={errors.username ? 'true' : 'false'}
          {...register('username', {
            required: 'Please enter your username',
          })}
        />
        {errors.username && (
          <span className="text-red-400" role="alert">
            {errors.username.message}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label className="block text-[#f3efefad] text-sm mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Input your email here"
          id="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Please enter your email',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        {errors.email && (
          <span className="text-red-400" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-[#f3efefad] text-sm mb-2"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Password from 6 - 32 characters"
          id="password"
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', {
            required: 'Please enter your password',
            minLength: {
              value: 6,
              message: 'Min length is 5',
            },
            maxLength: {
              value: 32,
              message: 'Max length is 32',
            },
          })}
        />
        {errors.password && (
          <span className="text-red-400" role="alert">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password_confirmation"
          className="block text-[#f3efefad] text-sm mb-2"
        >
          Retype password
        </label>
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Retype your password"
          id="password_confirmation"
          aria-invalid={errors.password_confirmation ? 'true' : 'false'}
          {...register('password_confirmation', {
            required: 'Please enter your password',
            minLength: {
              value: 6,
              message: 'Min length is 5',
            },
            maxLength: {
              value: 32,
              message: 'Max length is 32',
            },
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
        />
        {errors.password_confirmation && (
          <span className="text-red-400" role="alert">
            {errors.password_confirmation.message}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label
          className="block text-[#f3efefad] text-sm mb-2"
          htmlFor="referer_code"
        >
          Referer Code
        </label>
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Enter referer code"
          id="referer_code"
        // aria-invalid={errors.email ? 'true' : 'false'}
        // {...register('referer_code', {
        //   required: 'Please enter your username',
        // })}
        />
        {/* {errors.referer_code && (
        <span className="text-red-400" role="alert">
          {errors.referer_code.message}
        </span>
      )} */}
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="agreeRegister"
            name="agree"
            {...register('agree', {
              validate: (value) =>
                value === true || 'Please agree term of services.',
            })}
          />
          <label htmlFor='agreeRegister' className="form-check-label inline-block text-[#f3efefad]">
            I agree to{' '}
            <a
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
              href="https://gategame.io/term-of-use"
            >
              terms
            </a>
          </label>

          {errors.agree && (
            <span className="block text-red-400 p-2" role="alert">
              {errors.agree.message}
            </span>
          )}
        </div>
      </div>

      {errors.registerError && (
        <span className="block text-red-400 px-2 pb-2" role="alert">
          {errors.registerError.message}
        </span>
      )}

      <button
        type="submit"
        className="inline-block px-7 py-3 bg-blueCustom text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Register
      </button>
    </form>)

}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors
  } = useForm()

  const [loading, setLoading] = useState<boolean>(false)

  const auth = useAuth();

  const onSubmit = async (data: any) => {
    console.log(data)

    setLoading(true)
    const { Error } = await auth.login(data);
    if (Error) {
      setError('loginError', { type: 'custom', message: Error });
      return;
    }

    setLoading(false)
  }

  return (
    <form className={loading ? 'opacity-60 pointer-events-none' : ''} onSubmit={e => {
      clearErrors()
      handleSubmit(onSubmit)(e)
    }}>
      <p className="text-[#f3efefad] my-3">
        The platform based on blockchain technology, data will be guaranteed
        immutability and transparency.
      </p>
      <div className="mb-6">
        <label className="block text-[#f3efefad] text-sm mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Input your email here"
          id="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Please enter your email',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        {errors.email && (
          <span className="text-red-400" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-[#f3efefad] text-sm mb-2"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Password from 6 - 32 characters"
          id="password"
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', {
            required: 'Please enter your password',
            minLength: {
              value: 6,
              message: 'Min length is 5',
            },
            maxLength: {
              value: 32,
              message: 'Max length is 32',
            },
          })}
        />
        {errors.password && (
          <span className="text-red-400" role="alert">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="loginRememberMe"
          />
          <label htmlFor='loginRememberMe' className="form-check-label inline-block text-[#f3efefad] cursor-pointer">
            Remember me
          </label>
        </div>
        <a
          href="#!"
          className="text-blueCustom hover:text-white focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
        >
          Forgot password?
        </a>
      </div>

      {errors.loginError && <span className="block text-red-400 mb-4" role="alert">
        {errors.loginError.message}
      </span>}

      <button
        type="submit"
        className="inline-block px-7 py-3 bg-blueCustom text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Login
      </button>
    </form>
  )
}
