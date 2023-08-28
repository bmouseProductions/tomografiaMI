import Header from '../../components/Header/Index.jsx'
import Footer from '../../components/Footer/Index.jsx'
import Slider from '../../components/swiper/Index.jsx'
import About from '../../components/About/Index.jsx';

import Section1 from '../../components/Section1/index.jsx';
import Section2 from '../../components/Section2/index.jsx';
import Section3 from '../../components/Section3/Index.jsx';

export default function Home(){
    const slideContent = ['Texto do Slide 1', 'Texto do Slide 2', 'Texto do Slide 3'];
    const slideCount = slideContent.length;
    return (
        <>
            <Header />
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <About />
            </main>
            <Footer />
        </>
    )
}