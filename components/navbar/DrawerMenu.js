import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import { Close, MenuBook } from '@mui/icons-material';
import { categories, editLink } from '@/context/utils';

export default function DrawerMenu() {
  const [isMenuDrawer, setIsMenuDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsMenuDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List>
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={editLink(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
     
        <React.Fragment>
          <IconButton
          className="menu-icon"
          color="default"
          size="large"
          onClick={toggleDrawer(true)}
        >
          <MenuBook
          />
          
        </IconButton>
          <Drawer
            anchor={"right"}
            
            open={isMenuDrawer}
            onClose={toggleDrawer(false)}
          >
            <IconButton
            className='close-icon'
                onClick={toggleDrawer(false)}
            >
                <Close/>
            </IconButton>
            {list()}
          </Drawer>
        </React.Fragment>
  
    </div>
  );
}