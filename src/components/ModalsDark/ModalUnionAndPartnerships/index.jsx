import { useEffect } from 'react';

export function Modal({ isOpen, onClose, children}) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

  if (!isOpen) return null;

    return (
        <div className="fixed inset-2 z-50 flex items-center justify-center">
            <div className="absolute inset-2 bg-black opacity-50 backdrop-blur-sm" onClick={onClose}></div>
            {/* Modal content */}
            <div className="relative z-10 w-98 h-128 max-w-sm sm:max-w-md lg:max-w-lg 
            rounded-2xl bg-(--color-blue-dark) p-10 shadow-xl flex flex-col items-center justify-center gap-4
">
                {children}
            </div>
        </div>
    );  
};