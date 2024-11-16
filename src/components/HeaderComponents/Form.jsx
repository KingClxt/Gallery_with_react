/* eslint-disable react/prop-types */
import { Plus } from "lucide-react";

export default function Form({addImage}){
     return (
          <form onSubmit={addImage} className="w-full px-5 md:px-0 md:w-1/2 mx-auto ">
               <label htmlFor="" className="flex gap-2">
                    <input type="text" name="url" className="input input-bordered w-full" placeholder="Saisir l'url de l'image"/>
                    <button className="btn btn-outline">
                         <Plus />
                    </button>
               </label>
          </form>
     )
}