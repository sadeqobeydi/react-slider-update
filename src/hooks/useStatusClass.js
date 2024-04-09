function useStatusClass ({slides , currentIndex , active , statusSlider , length}){
    
    let prevAnimate = 'prev' 
    let nextAnimate = 'next'

    if(statusSlider === 'next' &&  currentIndex === active ){
        nextAnimate = 'next-next'
    }
    else if (statusSlider === 'next' && currentIndex > 0 && currentIndex - active === 1){
        prevAnimate = 'next-previous'
    }
    else if(statusSlider === 'previous' && currentIndex === active ){
        nextAnimate = 'previous-next'
    }
    else if (statusSlider === 'previous' && currentIndex > 0 && currentIndex - active === 1 ){
        prevAnimate = 'previous-previous'
    }
    

    return [prevAnimate , nextAnimate]
}

export default useStatusClass