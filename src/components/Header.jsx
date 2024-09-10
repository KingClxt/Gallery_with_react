/* eslint-disable react/prop-types */
import Form from "./HeaderComponents/Form";
import Title from "./HeaderComponents/Title";

export default function Header({addImage}){
     return <>
          <Title  text="GALERIE DE CLXT" />
          <Form addImage={addImage}/>
     </>
}