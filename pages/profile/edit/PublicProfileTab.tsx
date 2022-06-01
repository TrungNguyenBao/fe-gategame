import React, { useRef } from 'react'
import { ButtonPrimary } from '../../../components/Common/Button'
import { useForm } from 'react-hook-form'

const PublicProfileTab: React.FC = () => {
  const inputRef = useRef(null)

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
    <div className="p-2 flex lg:flex-row xxs:flex-col">
      <div className="flex-[1] flex flex-col">
        <div className="flex flex-col xxs:items-center lg:items-start">
          <img
            src="/images/icon/avatar_default.png"
            alt={'avatar'}
            className="object-cover items-center rounded-[32px] w-[197px] h-[206px] mb-[20px]"
          />
          <input type="file" ref={inputRef} accept="image/*" hidden />
          <ButtonPrimary
            onClick={() => {
              if (inputRef?.current) inputRef.current.click()
              return
            }}
            className="w-[197px] px-[10px]"
          >
            Change Picture
          </ButtonPrimary>
        </div>
      </div>
      <div className="flex-[4] px-[10px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-[60%] xxs:x-[100%] xxs:mt-[40px] lg:mt-[unset]"
        >
          <div className="mb-[30px]">
            <label className="block text-[14px] leading-[20px] text-white font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
              placeholder="Soda nguyen"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name', {
                required: 'Please enter your name',
              })}
              id={'name'}
            />
            {errors.name && (
              <span className="text-red-400 text-[12px]" role="alert">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="mb-[30px]">
            <label
              htmlFor="username"
              className="block text-[14px] leading-[20px] text-white font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
              placeholder="Enter your username"
              aria-invalid={errors.userName ? 'true' : 'false'}
              {...register('userName', {
                required: 'Please enter your username',
              })}
            />
            {errors.userName && (
              <span className="text-red-400 text-[12px]" role="alert">
                {errors.userName.message}
              </span>
            )}
          </div>

          <label
            className="block text-[14px] leading-[20px] text-white font-semibold mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <div>
            <input
              type="email"
              className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
              placeholder="Enter your email"
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

          <div className="mb-[30px]">
            <label
              htmlFor="phone"
              className="block text-[14px] leading-[20px] text-white font-semibold mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
              placeholder="Confirm your phone"
              id="phone"
              aria-invalid={errors.phone ? 'true' : 'false'}
              {...register('phone', {
                required: 'Please enter your phone',
              })}
            />
            {errors.phone && (
              <span className="text-red-400 text-[12px]" role="alert">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className="mb-[30px]">
            <label
              htmlFor="phone"
              className="block text-[14px] leading-[20px] text-white font-semibold mb-2"
            >
              Bio
            </label>
            <input
              type="text"
              className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
              placeholder="Confirm your bio"
              id="bio"
              aria-invalid={errors.bio ? 'true' : 'false'}
              {...register('bio', {
                required: 'Please enter your bio',
              })}
            />
            {errors.bio && (
              <span className="text-red-400 text-[12px]" role="alert">
                {errors.bio.message}
              </span>
            )}
          </div>

          <div className="mb-[30px]">
            <label
              htmlFor="phone"
              className="block text-[14px] leading-[20px] text-white font-semibold mb-2"
            >
              Country
            </label>
            <select
              className="form-control block w-full p-4 text-16 font-normal text-[#f3efefad] bg-black bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-[#f3efefad] focus:bg-black focus:border-black focus:outline-none"
              aria-label="Default select country"
            >
              <option selected>Open this select menu</option>
              <option value="1">Vietnam</option>
              <option value="2">Anh</option>
              <option value="3">My</option>
            </select>
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
    </div>
  )
}

export default PublicProfileTab
