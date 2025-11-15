import { Col } from "react-bootstrap";

const style={
    width:"50%",
    height:"30px",
    borderRadius:"10px",
    text: "center",
    backgroundColor:"black",
    color:"white"
}
export const ProjectCard = ({ title, description, imgUrl,demo,code }) => {
  function openDemo(demo){
    // console.log(demo)
    window.open(demo)
   }
   function openCode(code){
    // console.log(code)
    window.open(code)
   }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}  alt={title}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{"display":"flex",
          "flexDirection":"column" ,
          "justifyContent":"space-between",
          "alignItems":"center",
          "marginTop":"10px"}}>
          <button style={{...style, "marginTop":"10px","marginBottom":"10px"}}
          onClick={()=>openDemo(demo)}>Demo</button>
          <button style={style}
          onClick={()=>openCode(code)}>Code</button>
          </div>
          
        </div>
      </div>
    </Col>
  )
}