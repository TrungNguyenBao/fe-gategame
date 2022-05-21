interface PanelProps {
  children?: React.ReactNode
  className?: string
}
const Panel: React.FC<PanelProps> = ({ children, className }: PanelProps) => {
  return (
    <div
      className={`p-[5px] lg:p-[10px] rounded-[12px] bg-white dark:bg-[#252525] ${className}`}
    >
      {children}
    </div>
  )
}

export default Panel
