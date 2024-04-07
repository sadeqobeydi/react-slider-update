


function ImageSlider({slides , current , currentIndex}){

    console.log(current);
    console.log(slides[current].dataId);
    console.log(currentIndex);

    return(

        <div 
            className={`image-slider ${slides[current].dataId === currentIndex ? 'next-next' : ''}`} 
            style={{backgroundImage:`url(${slides[current].url})`,}}></div>
    )
}

export default ImageSlider