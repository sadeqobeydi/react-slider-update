import { useEffect } from "react"



function ImageSlider({slides , currentIndex , active}){

    useEffect(()=>{
        console.log('renderd slide');
    })

    return(

        <div 
            key={active}
            className={`image-slider 
                ${currentIndex === active && 'next-next'}
                ${currentIndex > 0 && currentIndex - active === 1 && 'next-previous'} 
               
            ` } 
            style={{backgroundImage:`url(${slides.url})`}}>

        </div>
    )
}

export default ImageSlider