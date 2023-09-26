import Botao from '../Botao/index.jsx';

//import exame1 from '../../assets/image/exames/exameExecutando.webp'

export default function Section1(){
    return (
        <section className=" bg-gradient-to-r from-slate-900 to-[#009637] ">
            <div className='container mx-auto px-5 md:px-16 lg:px-24 py-5 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-5 text-white'>
                <div className='w-full lg:w-[50%]'>
                    <h1 className="font-bold text-4xl text-center mb-6">Tomografia Computadorizada</h1>
                    <p className='text-center'>
                        A  TOMOGRAFIA COMPUTADORIZADA permite o diagnóstico de várias patologias, além de ser também utilizada para planejar corretamente cirurgias, guiar biópsias e outros procedimentos minimamente invasivos. Pode ser necessário o uso de um meio de contraste endovenoso, à base de iodo, para realçar vasos, ecidos e as eventuais lesões.
                    </p>
                    <Botao />
                </div>

                <div className='w-full lg:w-[50%]'>
                    <iframe className='rounded w-full h-[230px] md:h-[330px] lg:h-[250px] xl:h-[350px]' src="https://www.youtube.com/embed/Gr0Ti6hiNhQ?si=YF0OglL4goDOAKT5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}