import { useState, useEffect } from "react";

export const useRandomBackground = (folderPath: string) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const backgrounds = ["background-01.jpg", "background-02.jpg", "background-03.jpg", "background-04.jpg", "background-05.jpg"];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];
    const imagePath = `${folderPath}/${selectedBackground}`;

    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      setBackgroundImage(imagePath);
      setIsImageLoaded(true);
    };
  }, [folderPath]);

  return { backgroundImage, isImageLoaded };
};
