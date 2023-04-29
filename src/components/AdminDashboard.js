import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ImageGrid from './ImageGrid';
import LabelList from './LabelList';
import { ImageContext } from '../contexts/ImageContext';
import { updateImageLabel, deleteImage } from '../utils/api';

function AdminDashboard() {
  const { images, labels, setImages } = useContext(ImageContext);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const sourceIndex = source.index;
    const destinationIndex = destination.index;
    const sourceLabel = source.droppableId;
    const destinationLabel = destination.droppableId;

    // move within the same list
    if (sourceLabel === destinationLabel) {
      const newImages = [...images];
      const imagesInList = newImages.filter(
        (image) => image.label === sourceLabel
      );
      const [removed] = imagesInList.splice(sourceIndex, 1);
      imagesInList.splice(destinationIndex, 0, removed);

      setImages(newImages);
    } else {
      // move between lists
      const updatedImage = { ...images[sourceIndex], label: destinationLabel };

      updateImageLabel(updatedImage.id, updatedImage.label).then(() => {
        const newImages = images.filter((image) => image.id !== updatedImage.id);
        setImages([...newImages, updatedImage]);
      });
    }
  };

  const handleLabelChange = (imageId, newLabel) => {
    const updatedImage = { ...images.find((image) => image.id === imageId), label: newLabel };

    updateImageLabel(updatedImage.id, updatedImage.label).then(() => {
      const newImages = images.filter((image) => image.id !== updatedImage.id);
      setImages([...newImages, updatedImage]);
    });
  };

  const handleDeleteImage = (imageId) => {
    deleteImage(imageId).then(() => {
      const newImages = images.filter((image) => image.id !== imageId);
      setImages(newImages);
    });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <LabelList labels={labels} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Droppable droppableId="images">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <ImageGrid
                    images={images}
                    onLabelChange={handleLabelChange}
                    onDeleteImage={handleDeleteImage}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
        </Grid>
      </DragDropContext>
    </div>
  );
}

export default AdminDashboard;

// import React, { useContext } from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import ImageGrid from './ImageGrid';
// import LabelList from './LabelList';
// import { ImageContext } from '../contexts/ImageContext';

// function AdminDashboard() {
//   const { images, labels } = useContext(ImageContext);

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Admin Dashboard
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <LabelList labels={labels} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <ImageGrid images={images} />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default AdminDashboard;
