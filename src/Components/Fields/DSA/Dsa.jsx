import React, { useEffect, useState } from "react"
import "./Dsa.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import group27 from "../images/Group 2.7.png"
import group26 from "../images/Group 2.6.png"
import { Link } from "react-router-dom";
const Dsa = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <div id="opensource">
            <div id="landingpage">
                <h1><center><Link to="/" style={{ textDecoration: 'none', position: 'absolute', top: '11%', left: '4rem', color: '#ff9800' }}>Hash/Hub</Link></center></h1>
                <div className="content">
                    <h2 style={{ fontSize: '3rem', color: 'white' }}>Data Structues and Algorithms</h2>
                    <p>DSA is a must-do computer-science subject that is considered as the building blocks for becoming a good software developer.Having a good grip over this field helps you to solve many real world problems. <br /> Programmers who are competent in data structures and algorithms can easily perform the tasks related to data processing, automated reasoning, or calculations. Data structure and algorithm is significant for developers as it shows their problem-solving abilities amongst the prospective employers.</p>
                </div>
                <img src="https://www.pngkey.com/png/full/492-4928937_website-development-auckland-design-system-illustration.png" alt="" />
            </div>
            <div className="components-OS" data-aos="fade-left">
                <h1>Classification of Problem-Solving Skill</h1>
                <br />
                <h3 style={{ color: 'yellow' }}>Problem solving skill is broadly divided into two parts:</h3><br />

                <h2>Data-Structures:</h2>
                <br />
                <p data-aos="fade-right">Data structures are the way of storing and managing data that helps us to access the data easily.
                    <br />
                    Arrays,LinkedList,Stack are some most used data structures.
                </p>
                <br /><br />
                <h2>Algorithms:</h2>
                <br />
                <p data-aos="fade-right">Algorithms are the step by step process to solve a given problem written in any language.All algorithms we learn apply on data structures for performing data operations.</p>

                <img src="https://www.cdn.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg" alt="Dsa" style={{ height: '300px', width: '400px' }} />
            </div>
            <center><h1>Division Of RoadMap</h1></center>
            <div className='main1'>

                <div className='card1'>
                    <h1>Basic</h1>
                    <p>Choose a programming language and learn the basics of that.<br />Do the basic theory and try to understand the real world use of each ds.</p>



                </div>
                <div className='card1'>
                    <h1>Intermediate</h1>
                    <p>Try to solve some basic questions .<br />Try to develop a good understanding of each concept.<br />Try some more up  level questions.</p>

                </div>
                <div className='card1'>
                    <h1>Advanced</h1>
                    <p>Try all medium and hard level question.<br />Participate in coding contests.<br />Make as many projects as possible</p>

                </div>
            </div>
            <br /><br /><br />



            <center><h1 className='rhead'>RoadMap for Learning DSA</h1></center>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />


            <div className="timeline">
                <div>
                <ul>
                    <li>
                        <div>
                            <h3> Language selection & Basics</h3>
                            <p>Pick any programming language of your choice. If you want to build DSA from scratch, highly recommndable is  C/C++ or Java.</p>
                            <button className="btn1"><a href="https://www.javatpoint.com" style={{ textDecoration: 'none', color: 'black' }}>Learn More</a></button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Arrays(DS)</h3>
                            <p>Learn about what is an array, how do they work, how data is stored in an array, how memory is managed in an array, and all other things.<br />
                                <h4>2.  Searching and Sorting Algorithms</h4>
                                Linear search and Binary search,Sorting such as bubble sort,quick sort..

                                <button className='btn1'> <a href='https://www.tutorialspoint.com/cplusp...'> Learn More</a></button>

                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>DIVIDE AND CONQUER (A)</h3>
                            <p>Learn about Divide and Conquer methodology. Sorting algorithms such as merge sort</p>
                            <button className='btn1'> <a href='https://www.youtube.com/watch?v=2Rr2tW9zvRg'> Learn More</a></button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>LINKED LISTS (DS)</h3>
                            <p>Learn about what is a linked list, how do they work, how data is stored, how memory is managed, and all other things.</p>
                            <button className='btn1'> <a href=' https://www.tutorialspoint.com/data_s...'> Learn More</a></button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>STACKS AND QUEUES (DS)
                            </h3>
                            <p>Learn about what are stacks and queues, how do they work, how data is stored, how memory is managed, and all other things.</p>
                            <button className='btn1'> <a href=' https://www.geeksforgeeks.org/stack-d...'> Learn More</a></button>

                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>TREES AND GRAPHS (DS)
                            </h3>
                            <p>Learn about binary trees, binary search trees, traversal methods, the height of a tree, and all other operations. Learn about the Depth-first search and Breadth-first search.</p>
                            <button className='btn1'><a href='https://www.tutorialspoint.com/graph_theory/graph_theory_trees.htm'>Learn More</a></button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>GREEDY METHODOLOGY (A)</h3>
                            <p>Greedy Algorithms





                                1.Dijkstra’s shortest path algorithm.





                                2.Prim’s and Kruskal's Minimum Spanning Tree.





                                3.Dial’s Algorithm (Optimized Dijkstra for small range weights)


                            </p>
                            <button className='btn1'><a href='https://www.youtube.com/watch?v=ARvQcqJ_-NY'>Learn More</a></button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Dynamic Programming and Backtracking</h3>
                            <p>Algorithms





                                1.Traveling salesman problem





                                2.Coin change problem





                                3.Bit Masking.</p>
                            <button className='btn1'><a href='https://www.youtube.com/watch?v=5dRGRueKU3M'>Learn More</a></button>
                        </div>
                    </li>
                </ul>
                </div>
            </div>

            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

            <div className="mostusedlang">
                <h1>Languages For Learning DSA</h1>
                <img src="https://www.w3resource.com/w3r_images/matplotlib-piechart-exercise-1.png" alt="" />
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



    );
}
export default Dsa;