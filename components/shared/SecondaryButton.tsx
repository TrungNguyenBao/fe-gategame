interface SecondaryButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}
const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}: SecondaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` secondary-btn cursor-pointer text-center text-white text-[16px] px-8 py-4 rounded-[12px] font-medium ${className} disabled:cursor-not-allowed disabled:bg-[#90909c]`}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
