import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Skills from "./react-components/Skills"
import Projects from "./react-components/Projects"
import ExperiencePage from "./react-components/experience"
import AboutPage from "./react-components/AboutPage"
import ContactsPage from "./react-components/Contact"

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     // <React.StrictMode>
//     <App />
//     // {/* </React.StrictMode> */}
// )

root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/experience" element={<ExperiencePage />} />
            <Route exact path="/contact" element={<ContactsPage />} />
            {/* <Route exact path="/bio" render={() => < />} /> */}
            {/* <Route exact path="/book/view" render={() => <BookViewer />} /> */}
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
