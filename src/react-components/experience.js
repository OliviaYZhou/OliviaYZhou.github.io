import Header from "./Header"
import * as Mui from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { SmallSkillBox } from "./Skills"
import "../styles/Projects.css"
import { Project } from "./Projects"
export default function ExperiencePage() {
    const jobs = [
        [
            "Software Developer Engineer Intern • Selling Partners Financial Technology Department",
            "Amazon",
            "May 2024 - August 2024",
            "Worked in Amazon Selling Partners Financial Technology team to fix long standing issue with large sales tax report requests overwhelming the hosts and browning out the service, and stretch goal to update tax report generation status for users. \n\
            • Investigated memory usage of system and developed a solution to predict the size of tax reports and throttle those that exceed predicted system capacity, and redirect them to a larger host and automatically rerun the process. \n\
            \t o This mitigated regular SEV-2 tickets for the team and sped up impacted reports by an average of 2 business days. \n\
            • Made full stack change to update failed report status in the team’s controlled webpage Tax Document Library (TDL) by sending \n\
            status from TaxReportGeneratorService to DynamoDB, interpreting in TDL backend, and displaying in frontend. \n\
            • All changes fully covered by unit tests, integration tests, end to end testing in local, alpha, beta, and monitored in prod. \n\
            • Wrote and presented project design documents and organized meetings between team members to discuss project design.   \n\
            • Java, PostgreSQL, Typescript, ReactJS, Git, Agile, AWS (DynamoDB, EC2, Aurora RDS, ELB)",
            [
                ["Java", 3],
                ["PostgreSQL", 2],
                ["Typescript", 3],
                ["ReactJS", 3],
                ["Git", 3],
                ["Agile", 3],
                ["AWS", 2]
            ],
            [
                ["Full Stack Development", 3],
                ["Database Management", 2],
                ["System Design", 2],
            ]
        ],
        [
            "Software Developer Intern • Fixed Income Technology Development Team",
            "Bank of Montreal",
            "May 2023 - August 2023",
            "•	Worked in the Capital Markets department Fixed Income Technology Development Team to maintain, debug, and extend the backend functionality of stock and bond trading systems DSTS and TOMS\n\
            •	Fixed errors with redundancy in data insertion to PostgreSQL Database in DSTSDataRouter by modifying database schema and implementing C++ code changes to detect the editing of a Security trade verses a new Security booking.\n\
            •	Created bash scripts to gather, filter, and redirect data from trade price report and sftp automatically to destination defined by client in database, and created AutoSys job to facilitate auto running of scripts in linux production server.\n\
            •	Implemented error handling for MQHandler on failure of read from MQ queue, generate log and email dev team.\n\
            •	PostgreSQL, Bash, C++, Java, IBM MQ, Linux, Autosys, Git, Jira, Confluence",
            [
                ["PostgreSQL", 3],
                ["Bash", 2],
                ["C++", 2],
                ["Java", 2],
                ["IBM MQ", 2],
                ["Linux", 2],
                ["Autosys", 2],
                ["Git", 3],
                ["Jira", 2],
                ["Confluence", 2],
            ],
            [
                ["Backend Development", 3],
                ["Database Management", 2],
                ["Automation", 2],
            ]
        ],
        [
            "Machine Learning Intern • Research and Development Team",
            "Bank of Montreal",
            "May 2022 - December 2022",
            "•	Assisted development of deep learning model to predict prices of swaptions.\n\
            \to	Tested efficacy of different machine learning models on data.\n\
            \to	Reconfigured data generation scripts to adapt to changes in formatting and better fit the model.\n\
            \to	Tested accuracy of generated data against historic data provided by Riskfuel.\n\
            •	Wrote web scraping scripts (selenium) and dataframe filtering scripts (pandas) to automate data collection and data cleaning for the BMO Emerging Technologies Newsletter.\n\
            •	Helped create a system to automatically update the team webpage with new data using Atlassian Confluence API.\n\
            •	Wrote python scripts to automate consolidation of quarterly financial reports using Pandas.\n\
            •	Python, Pandas, Selenium, SciKit-Learn, QuantLib, Jupyter Notebook, FuzzyWuzzy, HTML, CSS, JavaScript\n\
            ",
            [
                ["Python", 3],
                ["Pandas", 3],
                ["Selenium", 3],
                ["Machine Learning", 3],
                ["Natural Language Processing", 3],
                ["Scikit-Learn", 2],
                ["QuantLib", 2],
                ["Jupyter Notebook", 2],
                ["FuzzyWuzzy", 1],
                ["HTML", 3],
                ["CSS", 3],
                ["JavaScript", 3],
            ],
            [
                ["Web Development", 3],
                ["Data Analysis", 3],
                ["Automation", 3],
            ]
        ],
        [
            "Software Intern",
            "South Vancouver Community Policing Centre",
            "May 2021 - October 2021",
            "•	Renovated and redesigned www.svcpc.com.  \n\
            •	Added an online store and event booking system. \n\
            •	Streamlined and digitized the volunteer application process, by moving all paperwork online into electronic forms. \n\
            •	Increased website traffic by 15% after renovation. Volunteer applications increased by 50% in the following month. \n\
            •	Created a mobile app for Android that allows users to report hate crime to the police department.  \n\
            •	Java, Android Studio, HTML, CSS, JavaScript. \n\
            ",
            [
                ["HTML", 3],
                ["CSS", 3],
                ["JavaScript", 3],
                ["Java", 2],
                ["Android Studio", 2]
            ],
            [
                ["Web Development", 3],
                ["Mobile Development", 2],
            ]
        ],
    ]

    return (
        <div>
            <Header />
            <ul className="jobs-list">
                {jobs.map((job) => (
                    <li>
                        <Project
                            projectType={job[0]}
                            projectName={job[1]}
                            projectSummary={job[2]}
                            projectDescription={job[3]}
                            skillsUsed={job[4]}
                            developmentAreas={job[5]}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
