import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"

const ImageDetails = ({image , texte, filtreText, hoverBis}) => {
    return (
    <div id="details">
      <img src={image} alt={texte} /> 
      <div className="legende"> {texte} </div>
      <input
       id="filtre" type="text" placeholder="filtre image..."
       value = {filtreText}
       onChange = {(e) => hoverBis(e.target.value) }
       />
    </div>
    
    );
  }
  
export default ImageDetails;
  