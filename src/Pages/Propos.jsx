import React, {useState} from 'react'
import '../App.css';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Progress from './Progress'
import Temoignage from './Temoignage'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'



const Propos = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <Navbar />
      <main id="main">


        <section class="breadcrumbs">
          <div class="container">

            <div class="d-flex justify-content-between align-items-center">
              <h2>A Propos de Nous</h2>
              <ol>
                <li><a href="index.html">Accueil</a></li>
                <li>A propos de Nous</li>
              </ol>
            </div>

          </div>
        </section>
        <section class="about" data-aos="fade-up">
          <div class="container">

            <div class="row">
              <div class="col-lg-6">
                <img src="bak-stores/img/femmes-affaires.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i class="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i class="bi bi-check2-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i class="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

          </div>
        </section>
        <section className="facts section-bg mb-5" data-aos="fade-up">
          <div class="container">

            <div class="row counters">

              <div class="col-lg-3 col-6 text-center">

                <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                    {counterOn && <CountUp start={0} end={254} duration={2} delay={0}/>}
                </ScrollTrigger>
                <p>Clients</p>

              </div>

              <div class="col-lg-3 col-6 text-center">
                <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                    {counterOn && <CountUp start={0} end={521} duration={2} delay={0}/>}
                </ScrollTrigger>
                <p>Projets</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                    {counterOn && <CountUp start={0} end={1463} duration={2} delay={0}/>}
                </ScrollTrigger>
                <p>Hours Of Support</p>
              </div>

              <div class="col-lg-3 col-6 text-center">
                <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                    {counterOn && <CountUp start={0} end={16} duration={2} delay={0}/>}
                </ScrollTrigger>
                <p>Hard Workers</p>
              </div>

            </div>

          </div>
        </section>

        <Progress />
        
        <Temoignage />

      </main>
      <Footer />
    </div>
  )
}

export default Propos
