import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash="LOJ7Q.-AEUbv_MRj-pkWKRXS?Gxa"
          width={330}
          height={296}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && <img src={src} alt="" />}
    </>
  );
};

export default ImageComponent;
