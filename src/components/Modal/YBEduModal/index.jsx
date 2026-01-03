export function YBEduModal({isOpen, onClose}) {
    if (!isOpen) return null;
  
    return (
        <section className="bg-transparent">
            <div className="bg-amber-50 w-[540px] h-[700px] fixed 
            sm:flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            >
                Hello World
            </div>
        </section>
    );
}
