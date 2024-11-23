// lsdkfjaldfj
// email, phone, linkedin, github
// flexbox: box: icon, label, text
import "../styles/Contacts.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Divider, Grid } from "@mui/material"
import { Box, padding } from '@mui/system';
import React from 'react';
import { spacing } from '@mui/system';
import Header from './Header';
export default function ContactsPage() {
    return (
        <div id="contact-page">
            <Header />
            <div id="contact-header">
                <h1 className="no-bottom-margin title">Contact Me</h1>
                <p className="impact-text">
                    Feel free to reach out any time through email or LinkedIn.
                </p>
                <p className="impact-text">
                    I take calls between 12pm and 9pm EST. If I miss your call, please leave a voicemail.
                </p>
            </div>
            <Grid container spacing={4} id="contact-grid">

                <Grid item xs={12} sm={6} md={3} id="first-grid-item">
                    <Card variant="outlined" >
                        <CardContent className="contact-card">
                            <a href="mailto:olivia.zhou@mail.utoronto.ca" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="email" color="primary">
                                    <EmailIcon />
                                </IconButton>
                            </a>
                            <h3>Email</h3>
                            <p className="no-top-margin"> olivia.zhou@mail.utoronto.ca </p>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card variant="outlined" >
                        <CardContent className="contact-card">
                            <a href="tel:778-708-8075" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="phone" color="primary">
                                    <PhoneIcon />
                                </IconButton>
                            </a>
                            <h3>Phone</h3>
                            <p className="no-top-margin"> +1 778-708-8075 </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Card variant="outlined" >
                        <CardContent className="contact-card">
                            <a href="https://www.linkedin.com/in/olivia-zhou-5a3991208/" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="linkedin" color="primary">
                                    <LinkedInIcon />
                                </IconButton>
                            </a>
                            <h3>LinkedIn</h3>
                            <p className="no-top-margin"> https://www.linkedin.com/in/olivia-zhou-5a3991208/ </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Card variant="outlined" >
                        <CardContent className="contact-card">
                            <a href="https://github.com/OliviaYZhou" target="_blank" rel="noopener noreferrer">
                                <IconButton aria-label="github" color="primary">
                                    <GitHubIcon />
                                </IconButton>
                            </a>
                            <h3>GitHub</h3>
                            <p className="no-top-margin"> https://github.com/OliviaYZhou </p>
                        </CardContent>
                    </Card>

                </Grid>

            </Grid>

        </div>
    )
}