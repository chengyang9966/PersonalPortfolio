
import { BsPlusCircle,AiFillLinkedin} from "react-icons/all";


const FloatButton=()=>{

    return(
        <div className="fixedButton" >
            <div className="dropdown-content">
            <div className="hiddenButton ">
            <AiFillLinkedin/>
            </div>
            <div className="hiddenButton ">
            <AiFillLinkedin/>
            </div>
            <div className="hiddenButton ">
            <AiFillLinkedin/>
            </div>
            </div>
        <div className="roundedFixedBtn ">
            <BsPlusCircle/>
        </div>
        </div>
    )
}

export default FloatButton