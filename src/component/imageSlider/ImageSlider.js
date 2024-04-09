import { useEffect } from "react"

import useStatusClass from "../../hooks/useStatusClass"



function ImageSlider({slides , currentIndex , active , statusSlider , length}){


    let [prevAnimate , nextAnimate] = useStatusClass({slides , currentIndex , active , statusSlider , length})

    return(

        <div 
            key={active}
            className={`image-slider ${nextAnimate} ${prevAnimate}
                
            ` } 
            style={{backgroundImage:`url(${slides.url})`}}>

        </div>
    )
}

export default ImageSlider