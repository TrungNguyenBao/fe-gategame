import { Dialog } from '../shared/dialog/dialog'
import Panel from '../shared/panel'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from '../shared/form/button'
import { BiLinkExternal, BiCopy } from 'react-icons/bi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useRef, useState } from 'react'
import Toast from '../shared/toast'
import { useForm } from 'react-hook-form'
import useDevice from 'lib/hooks/useDevice'

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

  const onSubmit = async (data) => {
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
      <Panel className="w-full sm:w-[800px] h-auto sm:h-[660px]">
        <div className="flex justify-end px-[6px]">
          {/* <div className="font-bold text-[20px] leading-[1.1] dark:text-white">
            Your Wallet
          </div> */}
          <AiOutlineClose
            className="text-white cursor-pointer mt-3"
            onClick={onClose}
          />
        </div>
        <div className="mt-[10px] sm:flex flex-wrap ">
        {isMobile && <div className=" w-full">
            <ul className="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => setTab(1)}
                  className={`inline-flex p-4 group ${
                    tab === 1
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
                  className={`inline-flex p-4 group ${
                    tab === 2
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
          <div className=" w-full sm:w-1/2">
            {tab === 1 ? (
              <div className="break-words">
                <img className=" sm:relative" src="/images/icon/bg_login.png" />
                <p className="absolute text-center leading-10 bottom-[25rem] sm:bottom-[5rem] ml-[10px] break-words text-[32px] font-extrabold text-white">
                  WELCOME TO <br /> GATEGAME
                </p>
              </div>
            ) : (
              <div className="break-words">
                <img className="relative" src="/images/icon/bg_register.png" />
                <p className="absolute  text-center leading-10 bottom-[35rem] sm:bottom-[5rem] ml-[10px] break-words text-[32px] font-extrabold text-white">
                  WELCOME TO <br /> GATEGAME
                </p>
              </div>
            )}
          </div>
          <div className=" w-full sm:w-1/2">
            {!isMobile && <ul className="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a
                  href="#"
                  onClick={() => setTab(1)}
                  className={`inline-flex p-4 group ${
                    tab === 1
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
                  className={`inline-flex p-4 group ${
                    tab === 2
                      ? 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                      : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                  }`}
                  aria-current="page"
                >
                  SIGN UP
                </a>
              </li>
            </ul>}
            <div className="lg:ml-3">
              {tab === 1 ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </Panel>
    </Dialog>
  )
}
export default LoginModal

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const onSubmit = async (data) => {
    console.log(data)

    // await login(data.email, data.password);
    // reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          htmlFor="password_repeat"
          className="block text-[#f3efefad] text-sm mb-2"
        >
          Retype password
        </label>
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
          placeholder="Retype your password"
          id="password_repeat"
          aria-invalid={errors.password_repeat ? 'true' : 'false'}
          {...register('password_repeat', {
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
        {errors.password_repeat && (
          <span className="text-red-400" role="alert">
            {errors.password_repeat.message}
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
      <div className="flex justify-between items-center mb-6">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck3"
          />
          <label className="form-check-label inline-block text-[#f3efefad]">
            I agree to{' '}
            <a
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
              href="https://gategame.io/term-of-use"
            >
              terms
            </a>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Register
      </button>
    </form>
  )
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    // await login(data.email, data.password);
    // reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            id="exampleCheck3"
          />
          <label className="form-check-label inline-block text-[#f3efefad]">
            Remember me
          </label>
        </div>
        <a
          href="#!"
          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
        >
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Login
      </button>
    </form>
  )
}
