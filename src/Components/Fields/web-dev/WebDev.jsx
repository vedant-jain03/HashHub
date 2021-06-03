import React,{useEffect} from 'react'
import "./webdev.css"
import 'aos/dist/aos.css';
import AOS from "aos"

function WebDev() {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);
    return (
        <div>
            <div id="webdev">
            <div id="landingpage">
                <div className="left">
                    <h2>Hashhub</h2>
                    <h1>Web Development</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius ullam molestias aliquid rem explicabo totam doloremque modi beatae mollitia expedita eveniet, enim odio sint distinctio nesciunt aperiam facilis deserunt?</p>
                </div>
                <div className="right">
                <img src="https://www.pngkey.com/png/full/492-4928937_website-development-auckland-design-system-illustration.png" alt="" />
                </div>
            </div>
            <div className="component-wd">
                <h1 data-aos="fade-right">Components of Web Development</h1>
                <div className="info" data-aos="fade-left">
                    <h2>Front-end </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat soluta neque qui? Nihil vero placeat enim doloribus ut. Qui quibusdam corrupti cum nemo labore, corporis dolores possimus voluptatum laudantium mollitia.</p>
                    <h2>Back-end</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque at accusantium expedita. Neque rerum omnis repellat sapiente, obcaecati quidem temporibus ipsum minima! Similique consequuntur ipsam vitae reprehenderit provident quaerat.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WebDev
