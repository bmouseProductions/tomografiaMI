import Botao from '../Botao/index.jsx';

import exame1 from '../../assets/image/exames/exameExecutando.webp'

export default function Section1(){
    return (
        <section className=" bg-gradient-to-r from-slate-900 to-[#009637] ">
            <div className='container mx-auto px-5 md:px-16 lg:px-40 py-5 md:py-20 flex flex-col-reverse md:flex-row items-center gap-5 text-white'>
                <div className='w-full md:w-[50%]'>
                    <h1 className="font-bold text-4xl mb-6">Tomografia Computadorizada</h1>
                    <p className='mb-7'>
                        É um método de diagnóstico que produz múltiplas imagens de alta resolução de todas as partes do corpo, que são processadas e  podem ter  reconstruções tridimensionais muito precisas que ajudam os médicos a fazerem os diagnósticos   de forma confiável e rápida.
                    </p>
                    <p>
                        A  TOMOGRAFIA COMPUTADORIZADA permite o diagnóstico de várias patologias, além de ser também utilizada para planejar corretamente cirurgias, guiar biópsias e outros procedimentos minimamente invasivos. Pode ser necessário o uso de um meio de contraste endovenoso, à base de iodo, para realçar vasos, ecidos e as eventuais lesões.
                    </p>
                    <Botao />
                </div>

                <div className='w-full md:w-[50%]'>
                    <img src={exame1} alt="Ressonância sendo realizada" className='bgExame1 rounded lg:max-w-[500px] lg:m-auto'/>
                </div>
            </div>
        </section>
    )
}