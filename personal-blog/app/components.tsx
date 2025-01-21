import { motion, AnimatePresence, px } from "framer-motion";
import { useEffect, useRef, useState } from "react";



interface DropdownMenuProps { // defining the required parameter for the sake of Typescript
    isOpen: boolean;
    navbarEffect: boolean;
    setIsOpen : (isOpen: boolean) => void;
}

export default function DropDownMenu({ isOpen, navbarEffect, setIsOpen }: DropdownMenuProps) {
    const SCROLL_THRESHOLD_PX = 30;
    

    useEffect(() => {

        function handleScroll() {
            const scrollposition = window.scrollY;
            if (scrollposition > SCROLL_THRESHOLD_PX){
                setIsOpen(false);
            }
        }

        document.addEventListener("scroll", handleScroll);

        return () => { document.removeEventListener("scroll", handleScroll)};
        
    }, [setIsOpen, isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                exit={{ opacity: 0}}
                 className="fixed left-1/2 -translate-x-1/2 mt-[50px] z-10">
                    <div className={`p-[8px] flex justify-center items-center gap-[8px] bg-neutral-800 w-max rounded-2xl transition-all duration-1000  ${
                        navbarEffect
                        ? "" 
                        : ""
                    }`}>
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src="/tribute.gif"
                            className="group-hover:scale-125 group-hover:opacity-75 group-hover:blur-md w-[300px] h-[200px] object-cover rounded-xl overflow-hidden duration-200 opacity-80 relative"
                        />
                            <p className="absolute left-[15px] bottom-[80px] w-[30px] text-white font-Inter font-semibold group-hover:underline">Tributes</p>
                            <p className="absolute left-[15px] bottom-[10px] w-[200px] text-wrap text-neutral-200 font-Inter font-normal text-justify text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                        <img
                            src="/steps.gif"
                            className="group-hover:scale-125 group-hover:opacity-75 group-hover:blur-md w-[300px] h-[200px] object-cover rounded-xl overflow-hidden duration-200 opacity-80 relative"
                        />
                            <p className="absolute left-[15px] bottom-[80px] w-[30px] text-white font-Inter font-semibold group-hover:underline">Tributes</p>
                            <p className="absolute left-[15px] bottom-[10px] w-[200px] text-wrap text-neutral-200 font-Inter font-normal text-justify text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

