import {Link, BrowserRouter} from "react-router-dom";

export default function Buttons() {
    return (
      <>
        <BrowserRouter>
            <Link to="#" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer">Experiência YellowBagEdu</Link>
            <Link to="#" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer">Movimento Social</Link>
            <Link to="#" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer">YellowBagEdu</Link>
            <Link to="#" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer">Uniões & Parcerias</Link>
            <footer>
                <Link to="#" target="_blank" >
                    <img src="" alt="" />
                </Link>
                <Link to="#" target="_blank" >
                    <img src="" alt="" />
                </Link>
                <Link to="#" target="_blank" >
                    <img src="" alt="" />
                </Link>
                <Link to="#" target="_blank" >
                    <img src="" alt="" />
                </Link>
            </footer>
        </BrowserRouter>
      </>  
    );
}

