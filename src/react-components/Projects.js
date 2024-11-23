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

export function Project(props) {
    return (
        <div>
            <CardContent>
                <Mui.Grid container spacing={2}>
                    <Mui.Grid item xs={8}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {props.projectType}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {props.projectName}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {props.projectSummary}
                        </Typography>
                        <Typography className="project-description" variant="body2">
                            {props.projectDescription}
                        </Typography>
                    </Mui.Grid>

                    <Mui.Grid item xs={4}>
                        <Mui.Grid container direction="column" spacing={2}>
                            <Mui.Grid item>
                                <SmallSkillBox skillType="Areas" skillList={props.developmentAreas} />
                            </Mui.Grid>
                            { }
                            <Mui.Grid item>
                                <SmallSkillBox skillType="Skills Used" skillList={props.skillsUsed} />
                                {/* The issue is with props.skillsUsed in Experience */}
                            </Mui.Grid>
                            { }
                        </Mui.Grid>
                    </Mui.Grid>

                </Mui.Grid>
            </CardContent>
            {/* <CardActions><Button size="small">Learn More</Button></CardActions> */}
        </div>
    )
}
export default function Projects() {
    // projects: [projectName, projectType, projectSummary, projectDescription, skillsUsed]
    const projects = [
        [
            "LitInsight Website Backend",
            "Backend Web Development",
            "Knowlecy: Website for AI research article parsing",
            "• LitInsight is a website that uses AI to parse and interpret uploaded research articles, based on past preferences of the user. \n\
            • This project was a fully functional prototype website made in a UofT student group (7 members) for startup company Knowlecy.\n\
            • As the Backend Lead developer, I made backend API and database support for file upload, download, pdf to markdown\n\
            conversion, file creation, editing, reordering and deletion, folders for files, reordering and deletion, signup, login and user\n\
            information update, and assisted implementation of AI prompt chat history. Utilized OpenAI API as LLM AI agent.\n\
            • Lead student project design and direction, heavily involved in regular meetings with Knowlecy, and in project design document,\n\
            all deliverable documents, deployment of backend and database, final handoff and presentation.",
            [
                ["Python", 3],
                ["FastAPI", 3],
                ["MySQL", 3],
                ["Git", 2],
                ["HTML", 3],
                ["CSS", 3],
                ["JavaScript", 3],
                ["Typescript", 3],
                ["Git", 3],
                ["RESTful API", 3],
            ],
            [
                ["Web Development", 3],
                ["Full Stack", 3],
                ["Frontend", 3],
                ["Backend", 3],
                ["Database", 3],
            ]
        ],
        [
            "ReadMe Novels",
            "Full Stack Web Development",
            "Full stack novel reading website",
            "• Enables reading, writing, and publishing of online novels, as well as various user interactions with novels.\n \
            •	Features include: user authentication, user profile, admin functionality to moderate platform. Follow, review and rate, or give kudos to novel. Follow authors. Publish books with custom cover, genres, chapters. Edit or update book. Annotate novel text, comment on annotations, upvote/downvote comments.\n\
            •	Implemented frontend, API, and database functionality of the book details page, user reporting, warnings, and all admin components, and made significant contributions to backend of UserProfile and BookEditor, and frontend of BookView.\n\
            •	Made in group of 4, lead the group’s collaborative efforts and organized all group meetings, helped bridge communication between team members.\n\
            ",
            [
                ["ReactJS", 3],
                ["ExpressJS", 2],
                ["MongoDB", 2],
                ["NodeJS", 2],
                ["HTML", 3],
                ["CSS", 3],
                ["JavaScript", 3],
                ["Git", 3],
                ["RESTful API", 3],
            ],
            [
                ["Web Development", 3],
                ["Full Stack", 3],
                ["Frontend", 3],
                ["Backend", 3],
                ["Database", 3],
            ]
        ],
        [
            "DnD ToolKit",
            "Full Stack Real Time Web Application",
            "Virtual platform for tabletop game Dungeons and Dragons.",
            "•	Users can build and play a custom DnD game with characters, enemies, stats, inventories, status effects, and setting. \n\
            •	Uses WebSockets for low latency real time dice boards shared between players in a group.\n\
            •	Backend combines both RESTful API and SocketIO for optimised cost and performance.\n\
            •	PostgreSQL database schema built optimised to minimize redundancy, connected to Flask with Psycopg2\n\
            •	Deployed on AWS EC2 to Linux Ubuntu server, built CI/CD pipeline with GitHub Actions Runner; configured Nginx, Gunicorn, Supervisor, and Gevent for deployment.\n\
            ",

            [
                ["ReactJS", 3],
                ["Flask", 3],
                ["PostgreSQL", 3],
                ["SocketIO", 3],
                ["RESTful API", 3],
                ["Python", 3],
                ["HTML", 3],
                ["CSS", 3],
                ["JavaScript", 3],
                ["CI/CD", 2],
                ["AWS", 2],
                ["Git", 3],
                ["GitHub Actions", 2],
            ],
            [
                ["Web Development", 3],
                ["Full Stack", 3],
                ["Frontend", 3],
                ["Backend", 3],
                ["Database", 3],
                ["System Design", 2],
            ]
        ],
        [
            "Novel Recommendation System",
            "Machine Learning",
            "Recommends novels on jjwxc.net",
            "•	Used web scraping to collect user and novel data, jieba for natural language preprocessing and word segmentation. \n\
            •	Used SciKit-Learn linear regression model model to predict user score of novels, with inputs including novel genre, points, average score, views, published status, etc. Categorical variables were dummy coded using Pandas. \n\
            •	GUI made using Tkinter\n\
            ",
            [
                ["Python", 3],
                ["Selenium", 3],
                ["Machine Learning", 3],
                ["NLP", 3],
                ["Pandas", 3],
                ["SciKit-Learn", 2],
                ["Jieba", 1],
                ["Tkinter", 1],
            ],
            [
                ["Web Scraping", 3],
                ["Data Processing", 3],
                ["Data Analysis", 3],
                ["Machine Learning", 3],
            ]
        ],
        [
            "Reddit Political Classifier",
            "Machine Learning",
            "Classifies Reddit posts as left or right leaning",
            "•	Predicts the political orientation of a reddit user based on their posts\n\
            •	Uses Spacy word segmentation for NLP, collecting parts of speech, pronouns, slang usage, Bristol norms of used vocabulary, etc. \n\
            •	Implemented preprocessing functions for a total of 173 features. \n\
            •	Used RandomForestClassifier from SciKit-Learn to classify\n\
            •	Numpy used to vectorize and manipulate data\n\
            ",
            [
                ["Python", 3],
                ["NLP", 3],
                ["Machine Learning", 3],
                ["SciKit-Learn", 2],
                ["Spacy", 2],
                ["Numpy", 2],
            ],
            [
                ["Data Processing", 3],
                ["Data Analysis", 3],
                ["Machine Learning", 3],
            ]
        ],
        [
            "Othello Game AI",
            "Artificial Intelligence",
            "AI for Othello game",
            "•	Made AI agent that beats the game Othello using Game Tree Search Minimax algorithm.\n\
            •	AI works by computing utility of possible states, picking the move that leads to highest utility.\n\
            •	Utility was computed with a node ordering heuristic and custom built heuristic for Othello game, which maximizes predicted game scores\n\
            •	Runtime optimized using Alpha Beta Pruning and state caching. \n\
            ",
            [
                ["Python", 3],
                ["Algorithms", 3],
                ["Heuristics", 3],
            ],
            [
                ["AI", 3],
            ]
        ],
        [
            "Handcrafted Handwritten Digit Classifier",
            "Machine Learning",
            "Classifies handwritten digits",
            "•	Recognises and classifies handwritten digits\n\
            •	Uses K-Nearest-Neighbours algorithm for classification by minimizing Euclidian and Cosine distance of image pixels\n\
            •	Written entirely from scratch using C \n\
            •	Which took 3x longer than it had to but now I know C\n\
            ",
            [
                ["C", 3],
                ["Algorithms", 3],
                ["Machine Learning", 3],
            ],
            [
                ["Machine Learning", 3],
            ]
        ],
        [
            "Doodle Jump Game",
            "Game Development",
            "Recreation of Doodle Jump Platmormer Game using assembly",
            "•	Doodle Jump Game complete with platforms, powerups, a scoring system, opening scene, game over scene, and a pause menu.\n\
            •	Can be run on MARS MIPS Assembly Simulator\n\
            •	Each pixel was individually rendered\n\
            •	Each array individually looped through\n\
            •	32 Registers used for memory instead of variables\n\
            •	I drew all the pixel art and every number and letter and loaded them into memory with pixel values\n\
            •	I got a computer virus from the pixel editor I used\n\
            •	But eventually I defeated the virus and reclaimed my laptop.",
            [
                ["MIPS Assembly", 3],
                ["Game Development", 3],
                ["Artistic Talent", 3],
            ],
            [
                ["Game Development", 3],
            ]
        ],
    ]
    return (
        <div>
            <Header />
            <ul className="projects-list">
                {projects.map((project) => (
                    <li>
                        <Project
                            projectName={project[0]}
                            projectType={project[1]}
                            projectSummary={project[2]}
                            projectDescription={project[3]}
                            skillsUsed={project[4]}
                            developmentAreas={project[5]}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
