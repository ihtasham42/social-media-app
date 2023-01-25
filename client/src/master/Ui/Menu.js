import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function ItemMenu() {

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <IconButton
            // onClick={handleClick}
            size="small"
            sx={{ ml: 2 , display: 'flex', flexDirection: 'column'}}
            component={Link}
            to={"/master/posts/create"}

          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            <Typography sx={{ minWidth: 100 }} >Creact Post</Typography>
          </IconButton>
          <IconButton
            // onClick={handleClick}
            size="small"
            sx={{ ml: 2 , display: 'flex', flexDirection: 'column'}}
            component={Link}
            to={"/master/posts/create"}

          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            <Typography sx={{ minWidth: 100 }} >Creact Post</Typography>
          </IconButton>
          <IconButton
            // onClick={handleClick}
            size="small"
            sx={{ ml: 2 , display: 'flex', flexDirection: 'column'}}
            component={Link}
            to={"/master/posts/create"}

          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            <Typography sx={{ minWidth: 100 }} >Creact Post</Typography>
          </IconButton>
      </Box>
    </React.Fragment>
  );
}

export default  ItemMenu;