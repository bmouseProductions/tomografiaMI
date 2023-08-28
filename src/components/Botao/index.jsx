import wpp from "../../assets/image/whatsapp.png"
export default function Botao(){
    return (
        <div className="w-full flex items-center justify-center pt-5 mt-3">
            <a href="https://api.whatsapp.com/send?phone=553438268400" className="flex py-4 px-6 rounded shadow-xl  bg-slate-900 boder-4 animate-bounce">    
                <button className="flex items-center gap-4 font-semibold text-lg m-0 text-white ">
                    <img className="w-[32px] " src={wpp} alt="imagem de icone do whatsapp" />
                    Agende seu horário
                </button>
            </a>
        </div>
    )
}