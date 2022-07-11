import { useState } from "react";
import { content } from "../content/landing";
import FontAwesome from "./misc/FontAwesome";

const InfoBanner = () => {
    const [open, setOpen] = useState(true);
    if(!content.info || !open){
        return <div></div>
    }
    return(
        <div className="flex items-center bg-cyan-500 text-white-500 text-sm pl-10 py-1">
            <div className="flex-grow">{content.info}</div>
            {
                !content.infoLink? null:
                <a className="border-2 border-white-300 rounded-lg py-0.5 px-2 cursor-pointer hover:bg-cyan-600" href={content.infoLink} target="_blank">
                    {content.infoButton}
                </a>
            }
            
            <div className="rounded-full hover:bg-cyan-600 cursor-pointer p-1 mx-5" onClick={()=>setOpen(false)}>
                <FontAwesome name="FaTimes" className="w-3 h-3"/>
            </div>
        </div>
    )
}

export default InfoBanner;