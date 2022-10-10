import "./index.scss"
import "./test.css"

import logo from "./images/webpacklogo.jpg"
let component = function() {

    let element = document.createElement('div')
    element.classList.add("hello")
    element.innerHTML = `
    <h1 class="hello__h1">Test min side</h1>
       <p> Hello, Webpack </p>
       <img class="hello__img" src="${logo}" alt="web"/>
       
    `

    return element

}

document.body.append(component())