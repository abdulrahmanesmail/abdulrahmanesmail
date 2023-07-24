import { Skillbar } from "./skillbar";
import "./skills.css";
export const Skills = () => {
    return (
        <div className="home skills">
            <h1>Skills</h1>
            <div className="AllskillS">
               <Skillbar skill="Web Design" skillLevel="Cleverness"/>
               <Skillbar skill="Mobile Design" skillLevel="Cleverness"/>
               <Skillbar skill="Prototyping" skillLevel="Cleverness"/>
               <Skillbar skill="UI Design" skillLevel="Cleverness"/>
               <Skillbar skill="UX Design" skillLevel="Skilled"/>
               <Skillbar skill="Product Design" skillLevel="Skilled"/>
               <Skillbar skill="Visual Design" skillLevel="Skilled"/>
               <Skillbar skill="Branding" skillLevel="Skilled"/>
               <Skillbar skill="Design Strategy" skillLevel="Skilled"/>
               <Skillbar skill="Design Strategy" skillLevel="Skilled"/>
               <Skillbar skill="User Research" skillLevel="Skilled"/>
               <Skillbar skill="Coding" skillLevel="Beginner"/>
            </div>
        </div>
    )
}