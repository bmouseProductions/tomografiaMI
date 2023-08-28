import logo from '../../assets/image/Logo_Medic_Imagem.webp'

export default function Header(){
    return (
        <>
            <header className="w-full h-auto flex justify-center py-5 ">
                <img src={logo} alt="" />
            </header>
        </>
    )
}