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
    <div className="Container flex flex-col w-[100%] bg-[#e9e6e5] items-center justify-center  ">
      
      <div className="TopImg mb-[40px] w-[500px] h-[400px]  ">
        <img className="w-[600px] h-[400px] rounded-[5px]" src={image} alt="img" />
      </div>
      <div className="BottomImgs w-[1040px]  h-[150px] flex gap-[10px] ">
       
        <img onClick={Selected} className="w-[200px] h-[150px] cursor-pointer rounded-[5px]" src={img1} alt="img1" />
        <img onClick={Selected} className="w-[200px] h-[150px] cursor-pointer rounded-[5px]" src={img2} alt="img2" />
        <img onClick={Selected} className="w-[200px] h-[150px] cursor-pointer rounded-[5px]" src={img3} alt="img3" />
        <img onClick={Selected} className="w-[200px] h-[150px] cursor-pointer rounded-[5px]" src={img4} alt="img4" />
        <img onClick={Selected} className="w-[200px] h-[150px] cursor-pointer rounded-[5px]" src={img5} alt="img5" />
      </div>
    </div>
  );
}

export default GalleryApp;
