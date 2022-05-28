interface TitleProps {
    className?: string,
    children: any
}

export const Title2: React.FC<TitleProps> = ({ className, children }) => {
    return (
        <h2 className={`font-semibold text-28 leading-10 ${className}`} >
            {children}
        </h2>
    )
}

export const Title6: React.FC<TitleProps> = ({ className, children }) => {
    return (
        <h6 className={`flex items-center gap-2 text-xs font-semibold ${className}`}>
            {children}
        </h6>
    )
}