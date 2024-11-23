import { List, ListItem } from "@mui/material"

export function Course(props) {
    return (
        <div>
            <h3>{props.course_name}</h3>
            <p> Description: {props.description} </p>
        </div>
    )
}
export function CourseGroup() {}
export default function Courses() {
    return (
        <div id="courses-page">
            <List>
                <ListItem></ListItem>
            </List>
        </div>
    )
}
