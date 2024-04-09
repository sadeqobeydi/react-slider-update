import { useEffect } from "react"

import useStatusClass from "../../hooks/useStatusClass"



function ImageSlider({slides , currentIndex , active , statusSlider , length}){


    // let [prevAnimate , nextAnimate] = useStatusClass({slides , currentIndex , active , statusSlider , length})

    return(

        <div 
            key={active}
            className={`image-slider 
                ${ statusSlider === 'next' && currentIndex === active && 'next-next'}
                ${statusSlider === 'next' && currentIndex > 0 && currentIndex - active === 1 && 'next-previous'}
                
                ${ statusSlider === 'previous' && currentIndex === active && 'previous-next'}
                ${statusSlider === 'previous' && currentIndex > 0 && currentIndex - active === 1 && 'previous-previous'}

               
            ` } 
            style={{backgroundImage:`url(${slides.url})`}}>

        </div>
    )
}

export default ImageSlider