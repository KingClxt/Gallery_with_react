/* eslint-disable react/prop-types */

import { Trash2Icon } from "lucide-react";
import LargeImage from "./LargeImage";

/* eslint-disable no-unused-vars */
export default function Cart({image, open, hidde, deleteImage}){
     return (
          <>
               <div className="card group card-compact w-96 h-60 bg-base-100  shadow-xl relative cursor-pointer transition-all
                         hover:scale-x-105 hover:scale-y-105      
               ">
               <button onClick={deleteImage} className="absolute z-10 -right-3 -top-4 btn btn-error">
                    <Trash2Icon className=" text-white" />
               </button>
               
               <img className="rounded-lg h-full w-full"
                    src={image.src}
                    alt="Shoes" />
               
               <div onClick={open}className="absolute hidden w-full h-full  group-hover:flex justify-center items-center">
                    <button className="btn btn-sm w-1/2 mx-auto  ">View</button>
               </div>
          </div>
          {image.isShow && <LargeImage image={image.src} hidde={hidde} />}
          </>
          
     )
}