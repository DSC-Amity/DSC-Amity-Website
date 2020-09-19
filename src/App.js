import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'
import Particles from "react-tsparticles";
import logo from './assets/DSClogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function App() {
    return (
        <div className="App" id="App">
        <div className="main-page">
            <Navbar />
            <Home />
            <Team />
            <Contact />
            <Footer />
        </div>
            <Particles
                id="tsparticles"
                options={{
                    detectRetina: false,
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push"
                            },
                            onDiv: {
                                elementId: "repulse-div",
                                enable: false,
                                mode: "repulse"
                            },
                            onHover: {
                                enable: true,
                                mode: "bubble",
                                parallax: {
                                    enable: false,
                                    force: 2,
                                    smooth: 100
                                }
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 10,
                                duration: 2,
                                opacity: 8,
                                size: 6,
                                speed: 3
                            },
                            connect: {
                                distance: 80,
                                lineLinked: {
                                    opacity: 0.5
                                },
                                radius: 60
                            },
                            grab: {
                                distance: 400,
                                lineLinked: {
                                    opacity: 0.7
                                }
                            },
                            push: {
                                quantity: 4
                            },
                            remove: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 200,
                                duration: 1
                            },
                            slow: {
                                active: false,
                                radius: 0,
                                factor: 1
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: ["#EF2D18", "#44EF18","#1895EF"]
                        },
                        lineLinked: {
                            blink: true,
                            consent: false,
                            distance: 100,
                            enable: true,
                            opacity: 0.8,
                            width: 1
                        },
                        move: {
                            attract: {
                                enable: false,
                                rotate: {
                                    x:10,
                                    y:10
                                }
                            },
                            bounce: true,
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: true,
                            speed: 1,
                            straight: true,
                            warp:true
                        },
                        number: {
                            density: {
                                enable: false,
                                area: 500
                            },
                            limit: 0,
                            value: 300
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.5,
                                speed: 1,
                                sync: false
                            },
                            random: true,
                            value: 0.5
                        },
                        shape: {
                            character: {
                                fill: true,
                                font: "Verdana",
                                style: "",
                                value: "*",
                                weight: "400"
                            },
                        },
                        size: {
                            animation: {
                                enable: true,
                                minimumValue: 1,
                                maximumValue: 30,
                                speed: 2,
                                sync: false
                            },
                            random: true,
                            value: 5
                        }
                    },
                    
                   
                }}
                className="particles-bg" />
        </div>
    )
}

