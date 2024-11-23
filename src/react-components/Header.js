import { Button, Divider, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import "../styles/Header.css"

export default function Header() {
    const navigate = useNavigate()
    const handleNavClick = (page) => {
        console.log(`/${page}`)
        navigate(`/${page}`)
    }
    return (
        <div id="header">
            <Grid
                container
                direction="row"
                columns={{ xs: 6, sm: 10, md: 12 }}
                justifyContent="space-between"
                alignItems="center"
                id="header-elements"
                className="margin-align">
                <Grid item xs={1} sm={2} md={3} align="left">
                    <Button variant="text" sx={{ pl: "0px" }}>
                        <span className="logo" onClick={() => handleNavClick("")}>
                            Olivia
                        </span>
                    </Button>
                </Grid>
                <Grid item align="center">
                    <Button variant="text" onClick={() => handleNavClick("")}>
                        Home
                    </Button>
                </Grid>
                <Grid item align="center">
                    <Button variant="text" onClick={() => handleNavClick("about")}>
                        About
                    </Button>
                </Grid>
                <Grid item align="center">
                    <Button variant="text" onClick={() => handleNavClick("experience")}>
                        Experience
                    </Button>
                </Grid>
                <Grid item align="center">
                    <Button variant="text" onClick={() => handleNavClick("skills")}>
                        Skills
                    </Button>
                </Grid>
                <Grid item align="center">
                    <Button variant="text" onClick={() => handleNavClick("projects")}>
                        Projects
                    </Button>
                </Grid>
                <Grid item xs={1} sm={3} md={4} align="center">
                    <Button variant="outlined" onClick={() => handleNavClick("contact")}>Let's Chat</Button>
                </Grid>
            </Grid>
            <Divider variant="middle"></Divider>
        </div>
    )
}
