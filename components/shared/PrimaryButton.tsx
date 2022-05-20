interface PrimaryButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`primary-btn text-center cursor-pointer text-white text-[16px] px-8 py-4 rounded-[12px] font-medium ${className} disabled:cursor-not-allowed disabled:bg-[#90909c]`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
