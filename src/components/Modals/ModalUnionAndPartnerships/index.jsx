import { useEffect } from 'react';

<<<<<<< HEAD
export function Modal({ isOpen, onClose, children, color}) {
    const isMobileOrTablet = window.matchMedia("(max-width: 1024px)").matches;
=======
export function Modal({ isOpen, onClose, children, Color}) {
>>>>>>> dev
    useEffect(() => {
    if (isOpen) {
      isMobileOrTablet ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm" onClick={onClose}></div>
            {/* Modal content */}
<<<<<<< HEAD
            <div className={`relative z-10 w-94 max-w-sm sm:max-w-md lg:max-w-lg max-h-176 
            rounded-2xl ${color} p-10 shadow-xl flex flex-col items-center justify-center gap-4`}>
=======
            <div className={`relative z-10 w-98 h-112 max-w-sm sm:max-w-md lg:max-w-lg 
            rounded-2xl ${Color} p-10 shadow-xl flex flex-col items-center justify-center gap-4`}>
>>>>>>> dev
                {children}
            </div>
        </div>
    );  
};