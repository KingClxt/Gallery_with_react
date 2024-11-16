/* eslint-disable react/jsx-key */
import { useGalerie } from "../App"
import Cart from "./BodyComponent/Cart"

export default function Body(){
     const context = useGalerie()
     return (
         
          <div>
               <h1 className="text-3xl italic text-center md:text-start  font-bold mx-5 my-6 uppercase">Vos photos: </h1>
               <div className="grid grid-col-1 md:grid-cols-3 gap-5 justify-items-center mx-6">
                    {context.images.map(image=><Cart 
                                                       image={image} 
                                                       open={()=>{
                                                            context.open(image.id)
                                                       }}
                                                       hidde={()=>{
                                                            context.hiddeImage(image.id)
                                                       }}
                                                       deleteImage={()=>{
                                                            context.deleteImage(image.id)
                                                       }}
                     />)}
               </div>
          </div>
         
     )
}