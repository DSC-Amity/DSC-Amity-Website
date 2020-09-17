import React from 'react'
import 'CardView.css'
export default function CardView() {
    return (
        <div className="container">
            <img src={"src\assets\icon.jpg"} className="cardImg" id={}/>
            <p className="CardName">Name</p>
            <i>LinkedIn</i>
            <i>Github</i>
        </div>
    )
}
