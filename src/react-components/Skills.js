import styled from "@emotion/styled"
import { Button, Divider, List, ListItem } from "@mui/material"
import { blue, green } from "@mui/material/colors"
import RectangleIcon from "@mui/icons-material/Rectangle"
import "../styles/Skills.css"
import Header from "./Header"

const proficiencyColor = {
    3: { "background-color": "#1976d2", color: "white" },
    2: { "background-color": "#61a7ec", color: "white" },
    1: { "background-color": "#dcebfb", color: "#0f457a" },
}
// const SkillButton = styled(Button)(({ proficiency }) => ({
//     // width: 300,
//     borderRadius: 100,
//     color: proficiencyColor[proficiency],
//     // '& .MuiSlider-thumb': {
//     //   '&:hover, &.Mui-focusVisible': {
//     //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
//     //   },
//     //   '&.Mui-active': {
//     //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
//     //   },
//     // },
// }))
// Skill levels: beginner, intermediate, advanced
function Skill(props) {
    function clickSkill() {
        // Go to projects
        // Search props.skillName
    }
    return (
        <Button
            className="skill-button"
            variant="contained"
            sx={{
                borderRadius: "15px",
                marginRight: "5px",
                height: "30px",
                backgroundColor: proficiencyColor[props.proficiency]["background-color"],
                color: proficiencyColor[props.proficiency]["color"],
                "&:hover": {
                    // backgroundColor: "black",
                    color: "white",
                },
            }}>
            {props.skillName}
        </Button>
    )
}
export function SkillBox(props) {
    return (
        <div className="skill-box">
            <h2 className="no-top-margin" style={{ textAlign: "center" }}>
                {props.skillType}
            </h2>
            <ul className="skill-list">
                {props.skillList.map((skill) => (
                    <li className="skill-element">
                        <Skill skillName={skill[0]} proficiency={skill[1]} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function SmallSkillBox(props) {
    return (
        <div className="small-skill-box">
            <h4 style={{ textAlign: "left" }}>{props.skillType}</h4>
            <ul className="small-skill-list">
                {props.skillList.map((skill) => (
                    <li className="skill-element">
                        <Skill skillName={skill[0]} proficiency={skill[1]} />
                    </li>
                ))}
            </ul>
            {/* {props.skillList.length > 3 && (
                <Button variant="outlined" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Collapse" : "Expand"}
                </Button>
            )} */}
        </div>
    )
}

export function ColorCode() {
    return (
        <div>
            <List>
                <ListItem>
                    <RectangleIcon sx={{ color: "#1976d2" }} />: Advanced
                    <p>
                        <br />I have learned this skill in university and used it in many large
                        scale projects
                    </p>
                </ListItem>
                <ListItem>
                    <RectangleIcon sx={{ color: "#1976d2" }} />: Intermediate
                    <br />
                    <p>I have used this skill in a few large scale projects or many </p>
                </ListItem>
                <ListItem>
                    <RectangleIcon sx={{ color: "#1976d2" }} />: Beginner
                    <br />
                </ListItem>
            </List>
        </div>
    )
}
export default function Skills() {
    const languages = [
        ["Python", 3],
        ["Javascript", 3],
        ["PostgreSQL", 3],
        ["C", 2],
        ["C++", 2],
        ["Java", 2],
        ["Swift", 2],
        ["MIPS Assembly", 2],
        ["R", 2],
        ["Shell Script", 2],
        ["Bash", 2],
        ["HTML", 3],
        ["CSS", 3],
    ]
    const frameworks = [
        ["reactJS", 3],
        ["flask", 3],
        ["expressJS", 2],
        ["mongoDB", 2],
        ["nodeJS", 2],
        ["jQuery", 2],
    ]
    const libraries = [
        ["pandas", 3],
        ["selenium", 3],
        ["scikit-learn", 2],
        ["numpy", 2],
        ["psycopg2", 2],
        ["spacy", 2],
        ["matplotlib", 2],
        ["quantlib", 1],
        ["jieba", 1],
    ]
    const concepts = [
        ["Object Oriented Programming (OOP)", 3],
        ["Complexity Analysis", 3],
        ["Logic Gates and Circuits", 2],
        ["Agile Methodology", 2],
        ["SDLC", 2],
    ]
    const software = [
        ["VScode", 3],
        ["pycharm", 3],
        ["Android Studio", 2],
        ["Xcode", 2],
        ["intellij", 2],
        ["MS Excel", 2],
        ["Unity", 1],
        ["Jira", 1],
    ]
    const platforms = [
        ["mac", "3"],
        ["Unix", "3"],
        ["windows", "3"],
        ["linux", "2"],
        ["android", "2"],
        ["ios", "1"],
    ]
    return (
        <div id="skills-page">
            <Header />
            {/* <h1 style={{ margin: "0px", textAlign: "center" }}>Skills</h1> */}
            {/* <ColorCode /> */}
            <List>
                {/* {["languages", "frameworks", "libraries", "concepts", "software", "platforms"].map((skilltype) => (
                       <ListItem className="skill-list-item">
                       <SkillBox skillType={skilltype} skillList={skilltype} />
                   </ListItem>
                ))} */}
                <ListItem className="skill-list-item">
                    <SkillBox skillType="Languages" skillList={languages} />
                </ListItem>
                <Divider />
                <ListItem className="skill-list-item">
                    <SkillBox skillType="Frameworks" skillList={frameworks} />
                </ListItem>
                <Divider />
                <ListItem className="skill-list-item">
                    <SkillBox skillType="Libraries" skillList={libraries} />
                </ListItem>
                <Divider />
                <ListItem className="skill-list-item">
                    <SkillBox skillType="Concepts/theories:" skillList={concepts} />
                </ListItem>
                <Divider />
                <ListItem className="skill-list-item">
                    <SkillBox skillType="Software" skillList={software} />
                </ListItem>
                <Divider />
                <ListItem className="skill-list-item">
                    <SkillBox skillType="Platforms" skillList={platforms} />
                </ListItem>
            </List>
        </div>
    )
}
