import React, {useState, useEffect} from "react";
import images1 from "../../Assets/avata1.jpg";
import images2 from "../../Assets/avata2.jpg";
import images3 from "../../Assets/avata3.jpg";
import images4 from "../../Assets/avata4.jpg"
import PropTypes from "prop-types";
import { SliderShowWrapper, Wrapper} from "./style";
const SliderShow = () => {
    const [currenSelect, setCurrenSelect] = useState(0);
    const img = [
        {
            id: 1,
            images: images1,
            caption: 'Caption 01'
        },
        {
            id: 2,
            images: images2,
            caption: 'Caption 02'
        },
        {
            id: 3,
            images: images3,
            caption: 'Caption 03'
        },
        {
            id: 4,
            images: images4,
            caption: 'Caption 04'
        },
    ]
    const imagesSelect = img[currenSelect];

    const handleNext = () => {
        const length = img.length
        if(currenSelect + 1 === length){
            setCurrenSelect(0)
        }else{
            setCurrenSelect(currenSelect + 1)
        }
        
    }

    const handlePrev = () => {
        if(currenSelect === 0){
            setCurrenSelect(img.length - 1)
        }else{
            setCurrenSelect(currenSelect - 1)
        }
    }

    const handleOnClickImages = (index) => {
        setCurrenSelect(index)
    }
    return(
        <React.Fragment>
            <Wrapper>
                <SliderShowWrapper>
                    <div className="images">
                        <div className="number">
                            <img src={imagesSelect.images} alt="ảnh lỗi"/>
                        </div>
                    </div>
                    <div className="control">
                        <button className="btn btn-next" onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
                        <button className="btn btn-prev" onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>      
                        <p className="caption">{imagesSelect.caption}</p>           
                    </div>
                </SliderShowWrapper>
                <div className="list-dot">
                    {
                        img.map((item, index)=>{
                            return(
                                <span 
                                    className={`dost ${index === currenSelect ? "active" : ""}`} 
                                    key={item.id}
                                    onClick={()=>handleOnClickImages(index)} 
                                ></span>
                            )
                        })
                    }
                </div>
            </Wrapper>
        </React.Fragment>
    )
}
SliderShow.prototype={

}
export default SliderShow;