


function ImageSlider({slides , current , currentIndex , active}){


    return(

        <div 
            key={active}
            className={`image-slider 
                ${currentIndex === active ? 'next-next' : ''} 
               
            ` } 
            style={{backgroundImage:`url(${slides.url})`}}>

        </div>
    )
}

export default ImageSlider