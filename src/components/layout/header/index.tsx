//import file svg public/next.svg
import Image from "next/image";



export default function Header(Prop: { scrollToItem: (index: number) => void }) {

    const downloadResume = () => {

    }
    return (
        <>
            <header className="flex items-center justify-between w-full py-4 px-6 xl:px-20 bg-gray-100 rounded-b-lg text-black sticky">
                <div className="flex gap-2 items-center">
                    <Image
                        className="relative drop-shadow-lg"
                        src="/p.svg"
                        alt="Next.js Logo"
                        width={24}
                        height={12}
                        priority
                    />
                    <p>
                        <span className="font-bold text-h5">Portfolio</span>
                    </p>
                </div>
                <div className="hidden lg:block">
                    <ul className=" font-semibold flex justify-between gap-12 text-h5">
                        <li className="inline-block cursor-pointer hover-underline-animation"
                            onClick={() => Prop.scrollToItem(0)}
                        >Home</li>
                        <li className="inline-block cursor-pointer  hover-underline-animation"
                            onClick={() => Prop.scrollToItem(1)}
                        >Skills</li>
                        <li className="inline-block cursor-pointer  hover-underline-animation"
                            onClick={() => Prop.scrollToItem(2)}
                        >My Experience</li>
                        <li className="inline-block cursor-pointer  hover-underline-animation"
                            onClick={() => Prop.scrollToItem(3)}
                        >About me</li>
                        <li className="inline-block cursor-pointer  hover-underline-animation"
                            onClick={() => Prop.scrollToItem(4)}
                        >Projects </li>
                        <li className="inline-block cursor-pointer  hover-underline-animation"
                            onClick={() => Prop.scrollToItem(5)}
                        >Contact me</li>
                    </ul>
                </div>
                <div className="">
                    {/* Download resume button */}

                    <button className="bg-black text-white px-5 py-4 rounded-md text-button  hover:invert hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,0.7)_inset] duration-500">
                        <a href="/CV_Patarapong_Chareonpol.pdf" download className="flex gap-2 justify-center items-center">
                            <span>Resume</span>
                            <Image
                                className="relative drop-shadow-lg invert w-[20px] h-auto"
                                src="/icon/download.svg"
                                alt="Next.js Logo"
                                width={0}
                                height={0}
                                priority
                            />
                        </a>
                    </button>
                </div>
            </header>
        </>
    );
}