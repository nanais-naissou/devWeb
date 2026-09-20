import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"

import ImageWall from "./imageWall.component.jsx";
import ImageDetails from "./imageDetails.component.jsx";

import { useState } from "react";

const ImageApp = () => {

  const [image, setImage] = useState("../images/image5.jpg");
  const [texte, setTexte] = useState("la plus belle....");
  const [filterText, setFilterText] = useState(""); 

  const imageChanged = (newImage, newText) => {
    setImage(newImage);
    setTexte(newText);
  };

  const filterChanged = (newFilterText) => {
    setFilterText(newFilterText);
  };

  return (
    <div> 
    <ImageWall images = {dataImages}  hover = {imageChanged} filterText={filterText} />
    <ImageDetails image = {image} texte = {texte} filterText={filterText} hoverBis = {filterChanged}/>
    </div>
  );
}
export default ImageApp;
 
