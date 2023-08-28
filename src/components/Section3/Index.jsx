import Botao from "../Botao";
import drAna from '../../assets/image/Dra. Ana.webp'

export default function Section3 () {
    return (
        <section className=" bg-gradient-to-r from-[#009637] to-slate-900 text-white">
            <div className="px-5 md:px-16 lg:px-40 pt-10 md:pt-0 gap-9 flex flex-col md:flex-row items-center bg-design">
                <div className="md:w-[90%]">
                    <h2 className="font-bold text-3xl mb-6">Sua saúde merece o melhor tratamento</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi saepe minima totam nemo, expedita eius, nam aliquam neque consequuntur magni ducimus beatae alias corrupti velit voluptas hic perferendis provident rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum libero deserunt atque! Consectetur repellendus iusto sapiente libero magnam fugiat at ab doloremque minus praesentium sed eum eos est, ipsum accusamus!</p>
                    <Botao />
                </div>

                <div className="w-full">
                    <img className="h-[400px] md:h-[550px]" src={drAna} alt="imagem coceitual dra ana" />
                </div>
            </div>
            
        </section>
    )
}