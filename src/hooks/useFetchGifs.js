import { useEffect, useState } from "react";
import { getGifs } from "../service/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const newGifs = await getGifs(category);
    setImage(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
