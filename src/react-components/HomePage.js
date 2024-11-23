import "../styles/HomePage.css"
import { ButtonGroup, Button, Box, Container, Grid } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { spacing } from "@mui/system"
import SchoolIcon from "@mui/icons-material/School"
import { useNavigate } from "react-router-dom"
export default function HomePage() {
    const navigate = useNavigate()
    const handleNavClick = (page) => {
        console.log(`/${page}`)
        navigate(`/${page}`)
    }
    return (
        <div id="homepage">
            <Grid container columns={{ xs: 1, sm: 2, md: 2 }} spacing={0} id="home-grid">
                <Grid item id="intro-page" xs={1}>
                    <div id="intro-column" className="margin-align">
                        <h1 className="no-bottom-margin title">
                            Hi! I Am <br></br> Olivia Zhou
                        </h1>
                        <p className="vertical-margin impact-text">
                            Developer, Student Researcher, Lifelong Learner
                        </p>
                        <div className="button-div">

                            <Button variant="contained" onClick={() => handleNavClick("contact")}> Contact Me</Button>


                            <Button variant="text" sx={{ marginLeft: "1em" }} onClick={() => handleNavClick("experience")}>
                                Experience <ArrowOutwardIcon />{" "}
                            </Button>
                        </div>
                        <Grid
                            container
                            sx={{ marginUp: "40px", justifyContent: "left" }}
                            rowGap="1em"
                            columnGap="0.5em"
                            id="intro-points"
                            columns={{ xs: 1, sm: 3, md: 3 }}>
                            <Grid item xs={1}>
                                <div className="intro-headers">
                                    20 <span className="impact-text"> Months </span>
                                </div>

                                <span className="impact-text">full-time internship experience</span>
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={1}>
                                <h3 className="intro-headers">4</h3>
                                <span className="impact-text">internship Terms</span>
                            </Grid>
                            <Grid item xs={1}>
                                <h3 className="intro-headers">Contact:</h3>
                                <span className="impact-text">olivia.zhou@mail.utoronto.ca</span>
                            </Grid>

                            <div>
                                <br />
                            </div>
                        </Grid>
                        <div className="black-box"></div>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    {/* <img src="./cartoonprogrammer-gray.png" id="profile-pic"></img> */}
                    <div id="profile-pic-wrapper-box">
                        <img src="./ProfessionalPFP.jpg" id="profile-pic"></img>
                    </div>
                </Grid>
            </Grid>
            {/* <Container>
                {" "}
                <ExpandMoreIcon />{" "}
            </Container> */}
        </div>
    )
}
