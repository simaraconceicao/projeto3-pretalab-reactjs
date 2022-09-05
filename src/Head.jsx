
import { useEffect } from "react";

export function Head({title}){
    useEffect(()=>{
        document.title = 'PretaLab | ' + title;
    },[title])

    return <></>
}