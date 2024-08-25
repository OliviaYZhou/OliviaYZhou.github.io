import logo from "./logo.svg"
import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./styles/CommonStyles.css"
import * as Mui from "@mui/material"
import HomePage from "./react-components/HomePage"
import Header from "./react-components/Header"
import Projects from "./react-components/Projects"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Stack from "@mui/material/Stack"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import Skills from "./react-components/Skills"

function App() {
    return (
        <div>
            {/* <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Mui.Button variant="contained">Hello World</Mui.Button>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div> */}
            <Header />
            <Alert severity="info">
                This website is still under development. Existing pages are functional but
                formatting and content are still being updated. Skill Button clicks will work soon!
            </Alert>
            <HomePage />
            {/* <Projects /> */}
        </div>
        // <BrowserRouter>
        //     <Routes>
        //         <Route exact path="/" element={<HomePage />} />
        //         <Route exact path="/skills" element={<Skills />} />
        //         <Route exact path="/projects" element={<Projects />} />
        //         {/* <Route exact path="/bio" render={() => < />} /> */}
        //         {/* <Route exact path="/book/view" render={() => <BookViewer />} /> */}
        //     </Routes>
        // </BrowserRouter>
    )
}

export default App
