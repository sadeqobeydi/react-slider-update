import {useState } from "react"
import bootstrapImage from './accet/images/bootstrap.png'
import javascriptImage from './accet/images/javascript.jpg'
import githubImage from './accet/images/github.jpg'
import reactImage from './accet/images/react.jpg'
import "./index.css"
import ImageSlider from "./component/imageSlider/ImageSlider"
import { Row } from "react-bootstrap"
import { SlArrowLeft , SlArrowRight  } from "react-icons/sl";


function App() {
    
    const [currentIndex , setCurrentIndex] = useState(0)
    const [statusSlider , setStatusSlider] = useState("next")


    const slide = [
        {url: bootstrapImage , title :"bootstrap" , dataId : 0},
        {url: javascriptImage , title :"javascript" , dataId : 1},
        {url: githubImage , title :"github" , dataId : 2},
        {url: reactImage , title :"react" , dataId : 3}
    ]

    const goToPrevious = ()=>{
        currentIndex === 0 ? setCurrentIndex(slide.length-1) : setCurrentIndex(currentIndex-1);
        setStatusSlider("previous")
    }

    const goToNext = ()=>{
        currentIndex === slide.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1);
        setStatusSlider("next")
    }


    const goToSlide = (index)=>{
        currentIndex < index ? setStatusSlider('next') : setStatusSlider('previous')
        setCurrentIndex(index)
    }



    return (
        <>
            <Row className="content px-1 align-items-center justify-content-center">
                <div className="containerSLider col-md-7 col-lg-5 mx-auto p-0 overflow-hidden">

                    {slide.map( (item , index) => {
                                return (
                                    <ImageSlider slides = {slide[index]} 
                                        currentIndex = {currentIndex} 
                                        active = {index}
                                        statusSlider = {statusSlider}
                                        length = {slide.length-1}
                                    />
                                )
                            }
                        )
                    }
                
                    <button className="previous-item" onClick={goToPrevious}>
                        <SlArrowLeft  size="25px"/>
                    </button>
                    <button className="next-item" onClick={goToNext}>
                        <SlArrowRight size="25px"/> 

                    </button>
                </div>
                <div className="containerdote">
                    {
                        slide.map( (itemd , slideIndex) =>{
    
                            return <div className={`point ${slideIndex === currentIndex ? "active" : ""}`} 
                            key={slideIndex} 
                            onClick={()=>{goToSlide(slideIndex)}}></div>
                        })
                    }
                </div>
            </Row>            
        </>
    )
}

export default App