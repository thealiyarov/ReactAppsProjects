import React , {useState} from "react";
import img1 from "./Assets/Img1.jpg"
import img2 from "./Assets/Img2.jpg"
import img3 from "./Assets/Img3.jpg"
import img4 from "./Assets/Img4.jpg"
import img5 from "./Assets/Img5.jpg"

function GalleryApp() {
    const [image , setImg] = useState(img1);

    
    
    function Selected (e){
      setImg(e.target.src)
      
    }


  return (
    <div className="Container flex flex-col items-center mt-[20px] ">
      
      <div className="TopImg mb-[40px] w-[500px] h-[400px]  ">
        <img className="w-[600px] h-[400px]" src={image} alt="img" />
      </div>
      <div className="BottomImgs w-[1040px]  h-[150px] flex gap-[10px] ">
       
        <img onClick={Selected} className="w-[200px] h-[150px] cursor-pointer" src={img1} alt="img1" />
        <img onClick={Selected}  className="w-[200px] h-[150px] cursor-pointer" src={img2} alt="img2" />
        <img onClick={Selected}  className="w-[200px] h-[150px] cursor-pointer" src={img3} alt="img3" />
        <img onClick={Selected}  className="w-[200px] h-[150px] cursor-pointer" src={img4} alt="img4" />
        <img onClick={Selected}  className="w-[200px] h-[150px] cursor-pointer" src={img5} alt="img5" />
      </div>
    </div>
  );
}

export default GalleryApp;
