import { use } from "react";
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
            <div className="relative z-10 w-135 h-175 max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                {children}
            </div>
        </div>
    );
}            