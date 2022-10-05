import React from 'react'
import { ButtonPrimary } from '../../../components/Common/Button'
import { useForm } from 'react-hook-form'

const ChangePasswordTab: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data: any) => {
    console.log(data)
  }

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[60%] xxs:w-full">
        <div className="mb-[30px]">
          <label
            className="block text-[14px] leading-[20px] text-white font-semibold mb-2"
            htmlFor="email"
          >
            Current password
          </label>
          <div>
            <input
              type="email"
              className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
              placeholder="Enter your current password"
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
              <span className="text-red-400 text-[12px]" role="alert">
                {errors.email.message}
              </span>
            )}
          </div>

          <a
            href="#"
            className="text-blue hover:text-white focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out "
          >
            Forgot password?
          </a>
        </div>
        <div></div>

        <div className="mb-[30px]">
          <label
            htmlFor="password"
            className="block text-[14px] leading-[20px] text-white font-semibold mb-2"
          >
            New password
          </label>
          <input
            type="password"
            className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
            placeholder="Enter your new password"
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
            <span className="text-red-400 text-[12px]" role="alert">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="mb-[30px]">
          <label
            htmlFor="password"
            className="block text-[14px] leading-[20px] text-white font-semibold mb-2"
          >
            Confirm new password
          </label>
          <input
            type="password"
            className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
            placeholder="Confirm your new password"
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
            <span className="text-red-400 text-[12px]" role="alert">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex sm:flex-row xxs:flex-col">
          <ButtonPrimary
            className="bg-[#006dff] hover:bg-[#0a85ed]"
            type="submit"
          >
            Save change
          </ButtonPrimary>
          <ButtonPrimary
            className="sm:ml-[20px] xxs:ml-[unset] xxs:mt-[15px] sm:mt-[unset] bg-[#030303] text-white hover:text-white text-[16px] leading-[24px] border-solid border-[1px] rounded-[5px] border-white font-bold"
            onClick={() => reset()}
          >
            Discard
          </ButtonPrimary>
        </div>
      </form>
    </div>
  )
}

export default ChangePasswordTab
