import "../styles/Bio.css"
import { ButtonGroup, Button, Box, Container, Grid } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { spacing } from "@mui/system"
import SchoolIcon from "@mui/icons-material/School"
import { useNavigate } from "react-router-dom"
import Header from "./Header"
export default function AboutPage() {

    return (
        <div id="aboutpage">
            <Header />
            <div id="about-content-wrapper" className="margin-align">
                <Box sx={{ typography: "body1", marginRight: "4em" }}>
                    <h1>About Me </h1>
                    <p>
                        Hi! I'm Olivia Zhou, a final year Computer Science student at the University of Toronto. I will be graduating in May 2024 and am searching for new grad positions, or select internship positions for companies I'm very interested in.
                    </p>
                    <p>
                        I'm passionate about software development, and I'm always looking for opportunities to learn and grow.
                        I have experience working in 4 full-time software internship terms spanning 20 months, as well as 2 contractual projects with companies, and research experience at the CHAI Labs in University of Toronto.
                        I've made over 20 projects both in school and on my own. I'm always looking for new exciting projects to work on, and I'm known for being a strong contributer to any development group I've joined. I never leave a job half done because everything I work on must become something I'm proud of.
                        I've worked with a variety of skills and frameworks but am most experienced in backend development, data management, and machine learning, and primarily looking for roles in these areas.

                        Additionally, I have extracurricular interests in healthcare, especially pharmaceuticals, and am always interested in opportunities to participate in the development of biotechnology.
                    </p>
                    <p>
                        Thank you for looking through my website. It is still in development so I am still making UI improvements.
                        I have below a copy of my resume and a general cover letter for download.
                    </p>
                    <p>
                        If you have any questions or would like to chat, please feel free to reach out to me at my email:{" "}
                        <a href="mailto:olivia.zhou@mail.utoronto.ca" target="_blank" rel="noopener noreferrer">
                            olivia.zhou@mail.utoronto.ca.
                        </a>

                    </p>
                    <p>
                        Alternatively, you can reach me on LinkedIn at{" "}
                        <a href="https://www.linkedin.com/in/olivia-zhou-5a3991208/" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/in/olivia-zhou-5a3991208/
                        </a>

                    </p>
                </Box>
                {/* Brief Intro */}

                {/* Later, make it look like a resume */}
                {/* Grid */}
                {/* download resume button, download coverletter button */}
                <Box id="download-buttons" sx={{ typography: "body1", display: "flex" }}>
                    <a href="./Olivia_Zhou_Resume.pdf" download={"Olivia_Zhou_Resume.pdf"}>
                        <Button variant="outlined">Download Resume</Button>
                    </a>

                    <a href="./Olivia_Zhou_CoverLetter.pdf" download={"Olivia_Zhou_CoverLetter.pdf"}>
                        <Button variant="outlined">Download Cover letter</Button>
                    </a>
                </Box>

            </div>

        </div>
    )
}