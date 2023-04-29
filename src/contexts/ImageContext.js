import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

const ImageContextProvider = (props) => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: 'https://picsum.photos/id/1011/300/300',
      label: 'nature',
    },
    {
      id: 2,
      url: 'https://picsum.photos/id/1020/300/300',
      label: 'animals',
    },
    {
      id: 3,
      url: 'https://picsum.photos/id/103/300/300',
      label: 'food',
    },
    {
      id: 4,
      url: 'https://picsum.photos/id/1015/300/300',
      label: 'nature',
    },
    {
      id: 5,
      url: 'https://picsum.photos/id/1016/300/300',
      label: 'animals',
    },
    {
      id: 6,
      url: 'https://picsum.photos/id/1018/300/300',
      label: 'nature',
    },
    {
      id: 7,
      url: 'https://picsum.photos/id/1021/300/300',
      label: 'animals',
    },
    {
      id: 8,
      url: 'https://picsum.photos/id/1024/300/300',
      label: 'food',
    },
    {
      id: 9,
      url: 'https://picsum.photos/id/1025/300/300',
      label: 'nature',
    },
    {
      id: 10,
      url: 'https://picsum.photos/id/1027/300/300',
      label: 'animals',
    },
    {
      id: 11,
      url: 'https://picsum.photos/id/1035/300/300',
      label: 'nature',
    },
    {
      id: 12,
      url: 'https://picsum.photos/id/1037/300/300',
      label: 'food',
    },
  ]);

  const addImage = (image) => {
    setImages([...images, image]);
  };

  const removeImage = (imageId) => {
    setImages(images.filter((image) => image.id !== imageId));
  };

  const getImage = (imageId) => {
    return images.find((image) => image.id === imageId);
  };

  return (
    <ImageContext.Provider value={{ images, addImage, removeImage, getImage }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;