import React from 'react';
import { Box, Typography } from '@mui/material';

const IFrameComponent = ({ src, title, width = '100%', height = '500px', style = {} }) => {
  const [error, setError] = React.useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        position: 'relative',
        ...style
      }}
    >
      {error ? (
        <Typography color="error" align="center" sx={{ py: 2 }}>
          İçerik yüklenemedi. Lütfen daha sonra tekrar deneyiniz.
        </Typography>
      ) : (
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          style={{
            border: 'none',
            borderRadius: '8px',
            backgroundColor: 'transparent',
          }}
          loading="lazy"
          allowFullScreen
          onError={() => setError(true)}
        />
      )}
    </Box>
  );
};

export default IFrameComponent;
