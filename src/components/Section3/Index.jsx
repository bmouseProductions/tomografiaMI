import Botao from "../Botao";
import drAna from '../../assets/image/DraAna.webp'

export default function Section3 () {
    return (
        <section className="bg-gradient-to-r from-[#009637] to-slate-900 ">
            <div className="container mx-auto text-white">
                <div className="px-5 md:px-16 lg:px-24 pt-10 lg:pt-0 gap-9 flex flex-col lg:flex-row items-center bg-design">
                    <div className="md:w-[90%]">
                        <h2 className="font-bold text-3xl text-center mb-6">Sua saúde merece o melhor tratamento</h2>
                        <p className="text-center">
                            Na Medic Imagem Diagnósticos, você realiza a sua tomografia computadorizada em aparelhos de última tecnologia, com profissionais qualificados e, o melhor de tudo, com facilidade na hora de agendar o seu exame. Agende o seu horário com a clínica que é referência na região há mais de 20 anos e cuide da sua saúde, ela merece o melhor tratamento.
                        </p>
                        <Botao />
                    </div>

                    <div className="w-full flex justify-center">
                        <img className="h-[400px] md:h-[550px]" src={drAna} alt="imagem coceitual dra ana" />
                    </div>
                </div>
            </div>
        </section>
    )
}