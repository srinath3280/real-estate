import React from 'react';
import './about.css';
import { useLocation } from 'react-router-dom';
import useCounter from './useCounter.js';

const AboutUs = () => {
    const location = useLocation();
    const duration = 2000; // 2 seconds

    // Individual calls to useCounter for each counter
    const count1 = useCounter('100', duration);
    const count2 = useCounter('4', duration);
    const count3 = useCounter('10', duration);
    const count4 = useCounter('3', duration);
    const count5 = useCounter('1234', duration);

    const counters = [
        { count: count1, text: 'Sqft of Built Space' },
        { count: count2, text: 'Ongoing Projects' },
        { count: count3, text: 'Completed Projects' },
        { count: count4, text: 'Upcoming Projects' },
        { count: count5, text: 'Happy Families' }
    ];

    const formatCount = (count) => {
        if (count === 100) {
            return (count / 1).toFixed(0) + 'K+';
        }
        return count;
    };

    return (
        <div>
            <div className='aboutpage'>
                <div className='aboutpagecontent'>
                    <h1>ABOUT VDHATRI HOMES</h1>
                    <p>Creating Synergy Between Lifestyle And Aesthetics</p>
                    <p className='path'>HOME &nbsp;&nbsp;<span style={{ color: "red" }}>{location.pathname}</span></p>
                </div>
            </div>
            <section className='aboutpagecontainer'>
                <div className='aboutpagestatus'>
                    {counters.map((counter, index) => (
                        <div key={index}>
                            <h1>{formatCount(counter.count)}</h1>
                            <p>{counter.text}</p>
                        </div>
                    ))}
                </div>
                <hr></hr>
            </section>
            <section className='aboutpagedata'>
                <h1>
                    IT IS AMAZING TO LIVE IN A HOME <br />
                    THAT FEELS LIKE IT WAS MADE <br />
                    JUST FOR YOU
                </h1>
                <p>
                    Redefining the concept of affordable apartments in Bangalore- matching luxury with affordability- making the impossible, possible!- this was the primary idea behind the establishment of Vdhatri Homes. This continues to be the central objective of all our work.
                </p>
                <p>
                    We, the team of Vdhatri Homes, constantly strive to seek and secure this objective in every project, in every way possible. We conceive and develop ready-to-move apartments in Bangalore that are not just affordable, but optimal in every way too. Adopting futuristic ideas to sustain nature and using state-of-art technology, we deliver affordable apartments- the best homes to our customers within short time frames.
                </p>
                <p>
                    Our team comprises adept realtors with over a decade of experience in the real estate sector. The keen observational capabilities of the promoters along with their understanding of the market conditions, legal formalities, and quality requisites enable us to offer cost-efficient apartments with uncompromised quality and comfort.
                </p>
                <p>
                    With Vdhatri Homes, buying an apartment that makes the perfect dream home, is a breeze.
                </p>
            </section>
            <section className='aboutpagedata2'>
                <div>
                    <h1>
                        HOME IS NOT A PLACE, IT’S AN EMOTION
                    </h1>
                </div>
                <div>
                    <img src="/images/aboutimage.jpeg" alt="" />
                </div>
            </section>
            <section className='aboutpagedata3'>
                <div className='leftblock'>
                    <h1><i class="bi bi-eye"></i></h1>
                    <h2>Our Vision</h2>
                    <p>
                        To become one of the leading realtors in India by fostering trust and building a long-term relationship with the customers based on integrity, performance, value, and customer satisfaction. We will strive toward our vision by successfully delivering projects that meet the highest quality standards above and beyond the expectations of our valued customers, initially in Bangalore and eventually expanding into larger territories.
                    </p>
                </div>
                <div className='rightblock'>
                    <h1><i class="bi bi-sort-up"></i></h1>
                    <h2>Our Mission</h2>
                    <p>
                        To realize our vision with strong conviction and commitment, by setting a road map based on our valued fundamental principles. We aim to constantly explore and utilize cost-effective methods to adopt cutting-edge technology in the process of the development of apartments. We wish to bring excellence in every aspect of home creation to accomplish customer satisfaction. We aspire to deliver the best homes with the absolute quality of construction, complete legal clearances, on-time delivery, faultless safety, and no environmental concerns.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;












// import React from 'react';
// import './about.css';
// import { useLocation } from 'react-router-dom';

// const AboutUs = () => {
//     const location = useLocation();
//     return (
//         <div>
//             <div className='aboutpage'>
//                 <div className='aboutpagecontent'>
//                     <h1>ABOUT VDHATRI HOMES</h1>
//                     <p>Creating Synergy Between Lifestyle And Aesthetics</p>
//                     <p className='path'>HOME &nbsp;&nbsp;<span style={{ color: "red" }}>{location.pathname}</span></p>
//                 </div>
//             </div>
//             <section className='aboutpagecontainer'>
//                 <div className='aboutpagestatus'>
//                     <div>
//                         <h1>100K+</h1>
//                         <p>Sqft of Built Space</p>
//                     </div>
//                     <div>
//                         <h1>4</h1>
//                         <p>Ongoing Projects</p>
//                     </div>
//                     <div>
//                         <h1>10</h1>
//                         <p>Completed Projects</p>
//                     </div>
//                     <div>
//                         <h1>3</h1>
//                         <p>Upcoming Projects</p>
//                     </div>
//                     <div>
//                         <h1>1234</h1>
//                         <p>Happy Familes</p>
//                     </div>
//                 </div>
//                 <hr></hr>
//             </section>
//             <section>

//             </section>
//         </div>
//     )
// }

// export default AboutUs
