import React, { useState } from 'react'
//import ImagesZoomt from 'react-images-zoom';
import iron from './iron.png'
import Sun from './Sun.jpeg'
import product from './product.jpg'
import Lightbox from 'react-images-zoom/lib/Lightbox'

export const GalleryTest: React.FC = () =>{
    const [open, setOpen]=useState(false);
const PrintPage=()=>{

    window.print();
    return false;
}
    return(
        <div>
    <Lightbox
                
                images={[{src: iron},{ src: product }, {src: Sun}]}
                isOpen={open}
                rotatable={true}
                zoomable={true}
                onClose={()=>setOpen(!open)}
                onSave={() => console.log("save")}
                onPrint ={() => PrintPage()}
                
            />
            <button onClick={()=>setOpen(true)}>click me</button>
        </div>

    )
}