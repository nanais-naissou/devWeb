import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"

const ImageWall = ({images, hover, filterText}) => {

  const filter = images.filter((img) =>
    img.texte.toLowerCase().includes(filterText.toLowerCase())
  );
  
    return (
      <div id="mur">
      {filter.map((img) => (
          <img src={img.image} alt={img.texte} title={img.texte} key={img.image} onMouseEnter={() => hover(img.image, img.texte) 
          } 
      />
    ))}
  </div>
);
};

export default ImageWall;
  
