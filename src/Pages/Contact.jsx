import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <main id="main">


                <section class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Contact</h2>
                            <ol>
                                <li><a href="index.html">Accueil</a></li>
                                <li>Contact</li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    <div class="container">

                        <div class="row">

                            <div class="col-lg-6">

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="info-box">
                                            <i class="bx bx-map"></i>
                                            <h3>Notre Addresse</h3>
                                            <p>Hlm Grand Yoff, Dakar, Sénégal</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="info-box">
                                            <i class="bx bx-envelope"></i>
                                            <h3>Email</h3>
                                            <p>info@bak-store.com<br />contact@bak-store.com</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="info-box">
                                            <i class="bx bx-phone-call"></i>
                                            <h3>Appelez-Nous</h3>
                                            <p>+221 33 000 00 00<br />+221 33 6678 2544</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-6">
                                <form action="forms/contact.php" method="post" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="nom" class="form-control" id="nom" placeholder="Votre Nom" required />
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Votre Email" required />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Sujet" required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Chargement</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Envoi Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
                <section class="map mt-2">
                    <div class="container-fluid p-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15433.961349650193!2d-17.47144606436168!3d14.741382787838452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d3815c75c01%3A0xd0ac2464e4d7df36!2sHlm%20grand%20yoff%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1677604056431!5m2!1sfr!2ssn" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Contact
