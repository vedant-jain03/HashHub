import React, { useEffect } from 'react'
import './ml.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import group27 from "../images/Group 2.7.png"
import group26 from "../images/Group 2.6.png"


const Resources = [
    {
        imgsrc: "https://img.icons8.com/ios/452/machine-learning.png",
        title: "Machine Learning",
        sname: "Linear Algebra",
        link: "https://www.youtube.com/watch?v=JnTa9XtvmfI&t=0s"
    },
    {
        imgsrc: "https://img.icons8.com/ios/452/machine-learning.png",
        title: "Machine Learning",
        sname: "Daniel Bourke",
        link: "https://www.youtube.com/channel/UCr8O8l5cCX85Oem1d18EezQ"

    },
    {
        imgsrc: "https://img.icons8.com/ios/452/machine-learning.png",
        title: "Machine Learning",
        sname: "Tech with Tim",
        link: "https://www.youtube.com/watch?v=WFr2WgN9_xE&t=0s"

    },
    {
        imgsrc: "https://img.icons8.com/ios/452/machine-learning.png",
        title: "Machine Learning",
        sname: "Lex Fridman",
        link: "https://www.youtube.com/user/lexfridman"

    },
    {
        imgsrc: "https://img.icons8.com/ios/452/machine-learning.png",
        title: "Machine Learning",
        sname: "Stanford CS231N",
        link: "https://www.youtube.com/playlist?list=PLC1qU-LWwrF64f4QKQT-Vg5Wr4qEE1Zxk"

    },
    {
        imgsrc: "https://img.icons8.com/ios/452/machine-learning.png",
        title: "Machine Learning",
        sname: "Christos",
        link: "https://github.com/ChristosChristofidis/awesome-deep-learning"
    }
]
function Card(props) {
    return (
        <>
            <div className="cardsml">
                <div className="cardml">
                    <img src={props.imagesrc} alt="" />
                    <div className="cardmlinfo">
                        <span className="cardmltitle">{props.title}</span>
                        <h3 className="cardmlname">{props.name}</h3>
                        <a href="" className="cardmllink">
                            <button>Visit Channel</button>
                        </a>
                    </div>

                </div>

            </div>

        </>
    )
}
const Machinelearning = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);
    return (
        <>

            <div id="ml">
                <div className="Landingpage" data-aos="fade-left">
                    <div className="left">
                        <h2>HashHub</h2>
                        <h1>Machine Learning</h1>
                        <p> “The field of Machine Learning seeks to answer the question ‘How can we build computer systems that automatically improve with experience, and what are the fundamental laws that govern all learning processes?’”</p>

                    </div>
                    <div className="right">
                        <img src="https://www.pngkey.com/png/full/492-4928937_website-development-auckland-design-system-illustration.png" alt="" />

                    </div>
                </div>
                <div className="whatsection" data-aos="fade-right">
                    <div id="leftwhat">
                        <h1>What is Machine Learning?</h1>
                        <p>Machine learning is a branch of artificial intelligence (AI) focused on building applications that learn from data and improve their accuracy over time without being programmed to do so.
                            Today, examples of machine learning are all around us. Digital assistants search the web and play music in response to our voice commands. Websites recommend products and movies and songs based on what we bought, watched, or listened to before. Robots vacuum our floors while we do . . . something better with our time. Spam detectors stop unwanted emails from reaching our inboxes. Medical image analysis systems help doctors spot tumors they might have missed. And the first self-driving cars are hitting the road.
                        </p>
                        

                    </div>
                    <div id="rightwhat">
                        <img src="https://www.seekpng.com/png/full/96-966849_learning-vector-artificial-intelligence-artificial-intelligence-brain-png.png" alt="" />

                    </div>

                </div>
                <div className="Who" data-aos="slide-up">
                    <div id="leftwho">
                        <img src="https://symantec-enterprise-blogs.security.com/sites/default/files/styles/social_media_meta/public/2018-06/GettyImages-950196458.jpg?h=9aaba3c2&itok=jmtpTzdV" alt="" />


                    </div>
                    <div id="rightwho">
                        <h1>Why you should do MachineLearning?</h1>
                        <p>“Machine Learning is the new SQL for Big Data “

This quote illustrates that machine learning will be a major bifurcation in 2018.

Machine Learning is no longer just a niche subfield of computer science but technology giants have been using it for years – Machine learning algorithms power Walmart product recommendations, surge pricing at Uber, fraud detection at top financial institutions, content that Twitter, LinkedIn, Facebook and Instagram display on social media feeds or Google Maps. Machine learning products are being used daily, perhaps without realizing it. The future of machine learning is already here, it’s just that machine learning career is exploding now because of smart algorithms being used everywhere from email to mobile apps to marketing campaigns. If you are in search of the most in-demand and most-exciting career domains, gearing up yourself with machine learning skills is a good move now.</p>


                    </div>

                </div>
                <div className="prereq">
                    <div id="precontent">
                        <h1>Prerequisites of MachineLearning</h1>
                        {/* <img src="https://www.modernrequirements.com/wp-content/uploads/2019/07/product-img.png" alt="" /> */}
                        <ul >
                            <li data-aos="fade-right">Statistics, Calculus, Linear Algebra and Probability</li>
                            <li data-aos="fade-right">Programming Knowledge</li>
                            <li data-aos="fade-right">As Machine Learning and AI cover the advanced aspects of Data Science and analytics in general, there is a moderate requirement of mathematical knowledge.</li>
                            <li data-aos="fade-right">Statistics play a dynamic role in the field of ML and AI.</li>
                            <li data-aos="fade-right">The last and perhaps the most important pre-requisite would be of having the motivation to learn about these advanced concepts.</li>


                        </ul>

                    </div>

                </div>
                <div className="roadmap">
                    <h1>Roadmap To MachineLearning</h1>
                    <div id="imageroad" data-aos="zoom-out">
                        <img src="https://miro.medium.com/max/2628/1*8wU0hfUY3UK_D8Y7tbIyFQ.png" alt="" />

                    </div>

                </div>
                <div className="resourcesml">
                    <div id="leftup">
                        <h1>Resources To learn MachineLearning</h1>
                        <img id="leftupimg" data-aos="fade-up" src="https://www.tensorflow.org/site-assets/images/marketing/resources/edu-hero.svg" alt="" />
                    </div>
                    <div className="Resourcespro">
                        <div id="wrapperres">

                            {
                                Resources.map((item) => (
                                    <Card imagesrc={item.imgsrc} title={item.title} name={item.sname} link={item.link} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="footer" id="explore-footer" style={{ background: 'none' }}>
                    <img src={group26} alt="" />
                    <div>
                        <h1>Hash/Hub</h1>
                        <h3>Copyright © 2021 — 2023</h3>
                    </div>
                    <img src={group27} alt="" />
                </div>




            </div>
        </>
    )
}
export default Machinelearning