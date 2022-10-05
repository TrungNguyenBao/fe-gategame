import React, { MouseEventHandler } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: any
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ButtonPrimary: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block bg-[#0a85ed] leading-[38px] transition-all px-4 rounded font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const ButtonLinkPrimary: React.FC<ButtonProps> = ({
  className,
  children,
  href,
}) => {
  return (
    <a
      href={href}
      className={`inaline-block w-auto bg-[#0a85ed] hover:bg-black transition-all py-3 px-10 rounded-md font-semibold ${className}`}
    >
      {children}
    </a>
  )
}
