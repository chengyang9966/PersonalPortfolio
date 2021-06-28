
import { BsPlusCircle,AiFillLinkedin,AiFillYoutube} from "react-icons/all";


const FloatButton=()=>{

    return(
        <div className="fixedButton" >
            <div className="dropdown-content">
            {/* <div className="hiddenButton ">
            <AiFillLinkedin/>
            </div> */}
            <div className="hiddenButton ">
                <a href="https://www.youtube.com/channel/UCvJY8ybuCLmyFVlM47f400g" target="_blank" rel="noreferrer">
            <AiFillYoutube/>
                </a>
            </div>
            <div className="hiddenButton ">
            <a href="https://www.linkedin.com/in/chengyangong/" target="_blank" rel="noreferrer"><AiFillLinkedin/>
                </a> 
            </div>
            </div>
        <div className="roundedFixedBtn ">
            <BsPlusCircle/>
        </div>
        </div>
    )
}

export default FloatButton