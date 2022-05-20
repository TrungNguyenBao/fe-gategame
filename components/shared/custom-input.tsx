import { DECIMAL_SCALE } from '../../constants'
import NumberFormat from '../../components/NumberFormat'

interface CustomInputProps {
  className?: string
  placeholder?: string
  value?: any
  onChange?: (e: any) => void
  onKeyPress?: (e: any) => void
  type?: string
}
const CustomInput: React.FC<CustomInputProps> = ({
  className,
  placeholder,
  value,
  onChange,
  type,
  onKeyPress,
}: CustomInputProps) => {
  return type !== 'input' ? (
    <NumberFormat
      thousandSeparator
      value={value}
      placeholder={placeholder}
      decimalScale={DECIMAL_SCALE}
      onChange={(e: any) =>
        onChange(Number(e?.target?.value.replace(/[^0-9.-]+/g, '')))
      }
      className={`${className} w-full h-[40px] p-[20px] rounded-[12px] bg-transparent border-[1px] border-solid border-[#4b4b4b] dark:text-[#c4c4c4]`}
    />
  ) : (
    <input
      value={value}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onChange={onChange}
      className={`${className} w-full h-[40px] p-[20px] rounded-[12px] bg-transparent border-[1px] border-solid border-[#4b4b4b] dark:text-[#c4c4c4]`}
    />
  )
}

export default CustomInput
