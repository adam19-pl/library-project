import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Image = ({ src, altText, width }) => {
    return (
        <div>
            <LazyLoadImage src={src} alt={altText} width={width} />
        </div>
    )
}


export default Image;