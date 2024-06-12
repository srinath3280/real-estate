import React, { useEffect, useRef } from 'react';
import './home.css';

const Home = () => {
  const images = [
    '/images/slider1.jpeg',
    '/images/slider2.jpeg',
    '/images/slider3.jpeg'
  ]

  const carouselRef = useRef(null);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current && window.bootstrap) {
      const carouselElement = carouselRef.current;

      new window.bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel'
      });
    }
  }, []);


  const boxRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      boxRefs.current.forEach(ref => {
        const boxTop = ref.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          ref.classList.add('in-view');
        } else {
          ref.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight / 4 * 4;
      serviceRefs.current.forEach(ref => {
        const boxTop = ref.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          ref.classList.add('in-view');
        } else {
          ref.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const marquees = document.querySelectorAll('.marquee');

    marquees.forEach((marquee) => {
      marquee.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
      });

      marquee.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
      });
    });
  }, []);


  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" ref={carouselRef}>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* about section starts here */}
      <section class="about">
        <div className='aboutheading'>
          <div className='aboutheadingline'></div>
          <h1 class="aboutheadingtext">About Us</h1>
        </div>
        <div class="aboutcontainer">
          <div class="aboutleftcontent">
            <video ref={videoRef} muted>
              <source src="/videos/about-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="aboutrightcontent">
            <h3>We will provide you the best work which you dreamt for!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              praesentium fuga, iure cum error consequatur recusandae sunt numquam
              inventore quaerat delectus molestiae ipsam doloribus! Labore
              aspernatur perspiciatis placeat dolor similique.
            </p>
            <div class="aboutbutton">
              <a href="/" class="about-btn">Read More</a>
            </div>
          </div>
          <div class="aboutbottomcontent">
            <div class="box" data-direction="top" ref={el => boxRefs.current[0] = el}>
              <h3>20+</h3>
              <p>years of experience</p>
            </div>

            <div class="box" data-direction="left" ref={el => boxRefs.current[1] = el}>
              <h3>200+</h3>
              <p>project completed</p>
            </div>

            <div class="box" data-direction="bottom" ref={el => boxRefs.current[2] = el}>
              <h3>100%</h3>
              <p>Work Accuracy</p>
            </div>

            <div class="box" data-direction="right" ref={el => boxRefs.current[3] = el}>
              <h3>100+</h3>
              <p>Active workers</p>
            </div>
          </div>
        </div>
      </section>
      {/* about sections ends here */}

      {/* services sections starts here */}
      <section class="service">
        <div className='serviceheading'>
          <div className='serviceheadingline'></div>
          <h1 class="serviceheadingtext">Our Services</h1>
        </div>
        <div class="servicecontainer">
          <div class="servicebox" data-direction="bottom" ref={el => serviceRefs.current[0] = el}>
            <img src="/images/architecture.png" />
            <h3>Architectural Design</h3>
            <p>
              Our architects create functional and stunning spaces tailored to
              your needs and style.
            </p>
          </div>

          <div class="servicebox" data-direction="right" ref={el => serviceRefs.current[1] = el}>
            <img src="/images/construction.png" />
            <h3>Construction and Planning</h3>
            <p>
              We handle every stage of construction, ensuring seamless execution
              and on-time completion.
            </p>
          </div>

          <div class="servicebox" data-direction="left" ref={el => serviceRefs.current[2] = el}>
            <img src="/images/residential.png" />
            <h3>Residential Housing Projects</h3>
            <p>
              We specialize in crafting beautiful and livable spaces for families
              of all sizes.
            </p>
          </div>

          <div class="servicebox" data-direction="top" ref={el => serviceRefs.current[3] = el}>
            <img src="/images/commercial.png" />
            <h3>Commercial Projects</h3>
            <p>
              Design spaces that elevate your brand and functionality, fostering
              productivity and customer engagement.
            </p>
          </div>

          <div class="servicebox" data-direction="top-left" ref={el => serviceRefs.current[4] = el}>
            <img src="/images/interiordesign.png" />
            <h3>Interior Design and Execution</h3>
            <p>
              Our designers create harmonious and aesthetically pleasing interiors
              that reflect your vision.
            </p>
          </div>
          <div class="servicebox" data-direction="bottom-right" ref={el => serviceRefs.current[5] = el}>
            <img src="/images/majorrenovations.png" />
            <h3>Major Renovations Projects</h3>
            <p>
              We handle complex renovations, seamlessly integrating your existing
              structure with modern design.
            </p>
          </div>
        </div>
      </section>
      {/* services sections ends here */}

      {/* projects sections starts here */}
      <section class="project">
        <div className='projectheading'>
          <div className='projectheadingline'></div>
          <h1 class="projectheadingtext">Our Projects</h1>
        </div>
        <div class="card-container projectcardcontainer">
          <div class="card">
            <img src="/images/p1.webp" alt="Client 1 Image" class="card-image" />
            <div class="card-content">
              <h2 class="client-name">Mr. Sandy's Home</h2>
              <div class="card-details">
                <div class="detail-item">
                  <span class="icon">📍</span>
                  <span class="text">Bangalore</span>
                </div>
                <div class="detail-item">
                  <span class="icon">🏠</span>
                  <span class="text">G+2</span>
                </div>
                <div class="detail-item">
                  <span class="icon">📏</span>
                  <span class="text">3,350 sq.ft</span>
                </div>
                <div class="detail-item">
                  <span class="icon">💰</span>
                  <span class="text">30 Lakhs</span>
                </div>
              </div>
              <a href="/" class="know-more">Know more</a>
            </div>
          </div>
          <div class="card">
            <img src="/images/p2.webp" alt="Client 2 Image" class="card-image" />
            <div class="card-content">
              <h2 class="client-name">Mr. Amruth's Home</h2>
              <div class="card-details">
                <div class="detail-item">
                  <span class="icon">📍</span>
                  <span class="text">Mumbai</span>
                </div>
                <div class="detail-item">
                  <span class="icon">🏠</span>
                  <span class="text">G+3</span>
                </div>
                <div class="detail-item">
                  <span class="icon">📏</span>
                  <span class="text">4,500 sq.ft</span>
                </div>
                <div class="detail-item">
                  <span class="icon">💰</span>
                  <span class="text">50 Lakhs</span>
                </div>
              </div>
              <a href="/" class="know-more">Know more</a>
            </div>
          </div>
          <div class="card">
            <img src="/images/p3.webp" alt="Client 3 Image" class="card-image" />
            <div class="card-content">
              <h2 class="client-name">Mr. Sanath's Home</h2>
              <div class="card-details">
                <div class="detail-item">
                  <span class="icon">📍</span>
                  <span class="text">Chennai</span>
                </div>
                <div class="detail-item">
                  <span class="icon">🏠</span>
                  <span class="text">G+1</span>
                </div>
                <div class="detail-item">
                  <span class="icon">📏</span>
                  <span class="text">2,800 sq.ft</span>
                </div>
                <div class="detail-item">
                  <span class="icon">💰</span>
                  <span class="text">25 Lakhs</span>
                </div>
              </div>
              <a href="/" class="know-more">Know more</a>
            </div>
          </div>
        </div>
      </section>
      {/* projects sections ends here */}

      {/* contact sections starts here */}
      <section class="contact">
        <div className='contactheading'>
          <div className='contactheadingline'></div>
          <h1 class="contactheadingtext">Contact Us</h1>
        </div>
        <div class="contactcontainer">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.670830340825!2d75.7940167!3d13.308491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77f6b8853b5%3A0xaefdd637ace50db8!2sDev%E2%80%99s%20residence!5e0!3m2!1sen!2sin!4v1717173694838!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <form action="" class="form">
            <h3>Get in Touch</h3>
            <input type="text" placeholder="Name" class="form-box" />
            <input type="email" placeholder="Email" class="form-box" />
            <input type="number" placeholder="Phone" class="form-box" />
            <textarea
              type="text"
              placeholder="Message"
              class="form-box"
              id=""
              cols="20"
              rows="5"
            ></textarea>
            <div class="submit-btn">
              <a href="">Submit</a>
            </div>
          </form>
        </div>
      </section>
      {/* contact sections ends here */}

      {/* brands sections starts here */}
      <section class="brand">
        <div className='brandheading'>
          <div className='brandheadingline'></div>
          <h1 class="brandheadingtext">We choose <br />THE BEST BRANDS FOR YOU</h1>
        </div>
        <div className="marquee-container">
          <div className="marquee marquee-right-to-left">
            <div className="swiper-slide">
              <img src="/images/brand1.jpeg" alt="Brand 1" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand2.jpeg" alt="Brand 2" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand3.jpeg" alt="Brand 3" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand4.webp" alt="Brand 4" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand5.png" alt="Brand 5" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand6.webp" alt="Brand 6" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand7.webp" alt="Brand 7" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand8.webp" alt="Brand 8" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand9.png" alt="Brand 9" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand10.png" alt="Brand 10" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand11.jpg" alt="Brand 11" />
            </div>
            <div className="swiper-slide">
              <img src="/images/brand12.png" alt="Brand 12" />
            </div>
          </div>
        </div>
        {/* <div class="swiper">
          <div class="swiper-slide slide">
            <img src="/images/brand1.jpeg" alt="Brand 1" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand2.jpeg" alt="Brand 2" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand3.jpeg" alt="Brand 3" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand4.webp" alt="Brand 4" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand5.png" alt="Brand 5" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand6.webp" alt="Brand 6" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand7.webp" alt="Brand 7" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand8.webp" alt="Brand 8" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand9.png" alt="Brand 9" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand10.png" alt="Brand 10" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand11.jpg" alt="Brand 11" />
          </div>
          <div class="swiper-slide slide">
            <img src="/images/brand12.png" alt="Brand 12" />
          </div>
        </div> */}
      </section>

      {/* brands sections ends here */}

    </div>
  );
}

export default Home
