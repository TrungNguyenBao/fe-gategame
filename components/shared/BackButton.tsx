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
    <div className='mb-5'>
      <button className={`text-14 font-semibold inline-block opacity-[0.68] hover:opacity-100 duration-200  ${className}`} onClick={() => router.back()}>
        <FaChevronLeft className="inline-block mr-2"/>Back
      </button>
    </div>
  )
}

export default BackButton
