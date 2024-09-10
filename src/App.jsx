/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react"
import Header from "./components/Header"
import Body from "./components/Body"

const initial = [
    {
        id:1,
        src:"https://images.unsplash.com/photo-1722426365503-c406f62ed994?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isShow:false
    },
    {
        id:2,
        src:"https://images.unsplash.com/photo-1723242015501-2a52cfb64ed9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isShow:false
    },
    {
        id:3,
        src:"https://images.unsplash.com/photo-1723231462029-1e1f3ae64385?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isShow:false
    },
    
]

const galeriContext = createContext(null)
export const useGalerie = ()=>{
    const context = useContext(galeriContext)
    if(!context)return false
    return context
}
function App() {
    const [images, setImages] = useState(initial)
    const open = (id)=>{
        setImages(images.map(image=>image.id === id?{
            ...image,
            isShow: true
        }:image
    ))
}
    const hiddeImage = (id)=>{
        setImages(images.map(image=>image.id === id?{
            ...image,
            isShow: false
        }:image
    ))
    }

    const deleteImage = (id)=>{
        setImages(images.filter(image=>image.id !== id))
    }
    const addImage = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        setImages([
            ...images,
            {
                src: formData.get('url'),
                isShow:false
            }
        ])
    }
    return (
        <galeriContext.Provider value={{
            images,
            open,
            hiddeImage,
            deleteImage,
            addImage
        }}>
                <Header addImage={addImage} />
                <Body />
        </galeriContext.Provider>
  )

}
export default App
