import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const Temoignage = () => {
    return (
        <div>

            <section className="testimonials" data-aos="fade-up">
                <div className="container">
                    <div className="swiper-wrapper">

                        <div className="section-title">
                            <h2>Temoignages</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide className='slide'>
                                <div className="testimonial-item swiper-slide">
                                    <img src="bak-stores/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                    <h3>Felix Goodman</h3>
                                    <h4>Co &amp; Fondateur</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='slide'>
                                <div className="testimonial-item swiper-slide">
                                    <img src="bak-stores/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                    <h3>Celine Kwame</h3>
                                    <h4>Designeur</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='slide'>
                                <div class="testimonial-item swiper-slide">
                                    <img src="bak-stores/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                    <h3>Epiphanie Liska</h3>
                                    <h4>Store Owner</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='slide'>
                                <div className="testimonial-item swiper-slide">
                                    <img src="bak-stores/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Nate Down</h3>
                                    <h4>Freelance</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </SwiperSlide >

                            <SwiperSlide className='slide'>
                                <div className="testimonial-item swiper-slide">
                                    <img src="bak-stores/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </section>






        </div>
    )
}

export default Temoignage
