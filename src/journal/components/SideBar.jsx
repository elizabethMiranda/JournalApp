import { TurnedInNot } from '@mui/icons-material';
import { Box, Drawer, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material'; 

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: {sm: drawerWidth}, flexShrink:{ sm:0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            {/* contenido del Drawer */}
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Usuario Consulta
                </Typography>
            </Toolbar>

            <List>
                    {
                        ['Enero','Febrero','Marzo','Abril'].map(text =>(
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    
                                    <Grid container>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary={ 'Ea excepteur ex consectetur irure aute cillum ea magna .' } />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
            </List>

        </Drawer>
    </Box>
  )
}
