import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageGrid from './ImageGrid';
import { ImageContext } from '../contexts/ImageContext';

function NormalDashboard({ handleLogout }) {
  const { images } = useContext(ImageContext);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Normal User Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ImageGrid images={images} />
        </Grid>
      </Grid>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NormalDashboard;
