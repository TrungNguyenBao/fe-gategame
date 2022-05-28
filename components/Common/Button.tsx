interface ButtonProps {
    className?: string,
    children: any,
    href?: string,
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ className, children }) => {
    return (
        <button className={`inaline-block w-auto bg-[#0a85ed] hover:bg-black transition-all py-3 px-10 rounded-md font-semibold ${className}`}>
            {children}
        </button>
    )
}

export const ButtonLinkPrimary: React.FC<ButtonProps> = ({ className, children, href }) => {
    return (
        <a href={href} className={`inaline-block w-auto bg-[#0a85ed] hover:bg-black transition-all py-3 px-10 rounded-md font-semibold ${className}`}>
            {children}
        </a>
    )
}