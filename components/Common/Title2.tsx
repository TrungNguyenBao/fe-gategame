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
