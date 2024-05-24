
interface ButtonProps {
    className?: string;
    children: React.ReactNode;
}

const Button = ({ children,className }: ButtonProps) => {
    return (
        <>
            <button className={className+"bg-black text-white px-5 py-4 rounded-md text-button flex gap-2 justify-center items-center hover:invert hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,0.7)_inset] duration-500"}>
                {children}
            </button>
        </>
    );

}

export default Button;