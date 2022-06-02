import { FaChevronLeft } from 'react-icons/fa'
import React from 'react'
import { useRouter } from 'next/router'

interface BackButtonProps {
  className?: string
}
const BackButton: React.FC<BackButtonProps> = ({
  className,
}: BackButtonProps) => {
  const router = useRouter()
  return (
    <button
      className={`flex items-center text-[#ffffff78] text-[14px] leading-[24px] mb-[20px]  ${className}`}
      onClick={() => router.back()}
    >
      <FaChevronLeft className="mr-[5px]" />
      Back
    </button>
  )
}

export default BackButton
