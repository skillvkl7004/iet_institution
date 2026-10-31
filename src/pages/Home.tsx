import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home: React.FC = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600',
            title: 'Premium Distance Education',
            subtitle: 'Advance your career from the comfort of your home'
        },
        {
            url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600',
            title: 'Global University Network',
            subtitle: 'Access courses from leading accredited universities'
        },
        {
            url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600',
            title: 'Modern Digital Learning',
            subtitle: 'Expert-led programs designed for the future'
        }
    ];

    return (
        <div className="home-page">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ height: '500px' }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{slide.title}</h1>
                            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{slide.subtitle}</p>
                            <Link to="/enquiry" className="btn btn-primary">Enquire Now</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <section className="container" style={{ padding: '4rem 0' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose IET?</h2>
                <div className="grid">
                    <div className="card">
                        <h3>Flexible Learning</h3>
                        <p>Access your study material 24/7 and learn at your own pace.</p>
                    </div>
                    <div className="card">
                        <h3>Expert Faculty</h3>
                        <p>Learn from industry experts and experienced academicians.</p>
                    </div>
                    <div className="card">
                        <h3>Placement Support</h3>
                        <p>Dedicated career guidance to help you land your dream job.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
