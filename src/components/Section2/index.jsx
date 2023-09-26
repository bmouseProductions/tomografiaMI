import Botao from "../Botao";
import machine from '../../assets/image/machineGreen.webp'


import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Section2(){
    return (
        <section className="container mx-auto">
            <div className="px-5 md:px-16 lg:px-24 py-10 md:py-20 gap-9 flex flex-col  items-center ">
                <div className="flex flex-col lg:flex-row-reverse gap-9 ">
                    <div className="lg:w-2/3 flex flex-col justify-center">
                        <h2 className="font-bold text-4xl text-center mb-6">Processo da Tomografia Computadorizada</h2>
                        <p className="text-center">
                            A tomografia computadorizada é um exame médico que usa radiação e computadores para criar imagens detalhadas do interior do corpo. Durante o procedimento, o paciente repousa em uma mesa que desliza para dentro de um anel chamado de scanner. O scanner gira ao redor do corpo, emitindo feixes de raios-X capturados por detectores. O computador então combina essas informações para criar imagens transversais das estruturas internas, oferecendo uma visão clara de ossos, tecidos e órgãos, dados precisos para que os especialistas da Medic Imagem elaborem diagnósticos.
                        </p>
                        
                        <div className="hidden md:block">
                            <Botao />
                        </div>
                        
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <img src={machine} className="rounded w-full md:max-w-[400px] lg:max-w-none" alt="" />
                    </div>

                    <div className="md:hidden">
                        <Botao />
                    </div>
                </div>
                
                <div className="w-full rounded">
                    <Accordion multiple activeIndex={[0]} >
                        <AccordionTab header="Orientações especiais" >
                            <ul className="flex flex-col gap-1">
                                <li>
                                Trazer exames anteriores,  se houver.
                                </li>

                                <li>
                                Exame realizado somente com solicitação médica (cadastro do médico).
                                </li>

                                <li>
                                Pacientes menores de 18 anos deverão vir acompanhados de um responsável legal.
                                </li>

                                <li>
                                Este exame não é realizado em gestantes, exceto em circunstâncias especiais.
                                </li>

                                

                            </ul>
                        </AccordionTab>

                        <AccordionTab header="Preparo:" >
                            <ul className="flex flex-col gap-1">
                                <li>
                                    Este exame requer um jejum  de 2 horas .
                                </li>
                            </ul>
                        </AccordionTab>

                        <AccordionTab header="Suspensão de medicamentos:" >
                            <ul className="flex flex-col gap-1">
                                <li>
                                    O paciente deve suspender,  o uso do medicamento metformina (Dimefor®, Glifage®, Glucoformin®, Glucovance® ou Starform®) no dia da realização do exame,  caso venha a receber contraste iodado intravenoso e retornar a sua utilização 48 horas após. ATENÇÃO: se NÃO for necessário realizar a administração deste contraste, não precisa modificar a utilização deste remédio
                                </li>

                                <li>
                                    Clientes que fazem uso dos medicamentos sildenafila (Revatio® e Viagra®), tadalafila (Cialis®) ou vardenafila (Levitra® e Vivanza®), não devem usar estes medicamentos nas 24 horas que antecedem o exame e nas 24 horas após o exame. Caso não tenha suspendido, isso não é uma contra-indicação.
                                </li>

                                <li>
                                    Aos clientes em uso de betabloqueadores (propranolol, carvedilol, atenolol, pindolol, metoprolol) ou bloqueadores do canal de cálcio do tipo diltiazem ou verapamil recomenda-se que tomem a medicação antes da vinda ao exame, pois essa medida ajuda no controle da frequência do coração.
                                </li>
                            </ul>
                        </AccordionTab>

                        <AccordionTab header="Pacientes alérgicos:" >
                            <ul className="flex flex-col gap-1">
                                <li>
                                    Pacientes que já tiveram algum tipo de reação alérgica após a aplicação do meio de contraste iodado devem entrar em contato com a central de atendimento .
                                </li>

                                <li>
                                    Pacientes que tenham alergias a outras substâncias, asma e bronquite,  podem realizar um preparo de dessensibilização (entre em contato com a central de atendimento).
                                </li>

                                <li>
                                    Pacientes com insuficiência renal, diabéticos e mieloma múltiplo, também  precisam entrar em contato.
                                </li>
                            </ul>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}