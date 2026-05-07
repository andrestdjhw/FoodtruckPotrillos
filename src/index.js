import React from "react"
import ReactDOM from "react-dom/client"
import Person from "./scripts/Person"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
import ContactForm from "./scripts/ContactForm"

const person1 = new Person("Brad")

if (document.querySelector("#render-react-example-here")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-react-example-here"))
  root.render(<ExampleReactComponent />)
}

if (document.querySelector("#navbar-root")) {
  const root = ReactDOM.createRoot(document.querySelector("#navbar-root"))
  root.render(<Navbar />)
}

if (document.querySelector("#footer-root")) {
  const root = ReactDOM.createRoot(document.querySelector("#footer-root"))
  root.render(<Footer />)
}

if (document.querySelector("#reservation-form-root")) {
  const root = ReactDOM.createRoot(document.querySelector("#reservation-form-root"))
  root.render(<ContactForm />)
}

if (document.querySelector("#contact-form-root")) {
  const root = ReactDOM.createRoot(document.querySelector("#contact-form-root"))
  root.render(<ContactForm />)
}