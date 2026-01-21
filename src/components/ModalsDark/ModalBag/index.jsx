import { useEffect } from "react";

export function ModalBag({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-2 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm" onClick={onClose}></div>
            {/* Modal content */}
            <div className="relative z-10 w-lg h-120 max-w-lg 
            rounded-2xl bg-(--color-blue-dark) p-6 shadow-xl flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}            