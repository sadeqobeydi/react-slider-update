function useStatusClass ({currentIndex , active , statusSlider , length}){
    
    let prevAnimate = '' 
    let nextAnimate = ''

        //condition with next slide active class in on click previous and next button  

    if(statusSlider === 'next' &&  currentIndex === active ){
        nextAnimate = 'next-next'
    }
    else if(statusSlider === 'previous' && currentIndex === active ){
        nextAnimate = 'previous-next'
    }
  
    //condition with back slide active class in on click previous and next button  

    if (statusSlider === 'next'){
            if(currentIndex > 0 && currentIndex - active === 1) prevAnimate = 'next-previous'

            else if (currentIndex === 0 && active === length) prevAnimate = 'next-previous'
    } 
    else if (statusSlider === 'previous'){

            if( currentIndex >= 0 && currentIndex + 1  === active) prevAnimate = 'previous-previous'
            else if( currentIndex === length &&  active === 0) prevAnimate = 'previous-previous'
    }

    return [prevAnimate , nextAnimate]
}

export default useStatusClass