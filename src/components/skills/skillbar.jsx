import "./skills.css";
export const Skillbar = (props) => {
    const color = props.skillLevel
    return (
        <div className="skillbar-con">
            <h1>{props.skill}</h1>
            <div className="skillbar-con-skillbar">
              <div className={color === "Beginner" ? `yel lev` : `lev ger`}><p>Beginner</p></div>
              <div className={color === "Skilled" ? `yel lev` : `lev ger`}><p>Skilled</p></div>
              <div className={color === "Cleverness" ? `yel lev` : `lev ger`}><p>Cleverness</p></div>
            </div>
        </div>
    )
}