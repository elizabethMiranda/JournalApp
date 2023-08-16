import { IconButton } from "@mui/material";
import { JournalLayout } from "../journal/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography component='h1'>Quis ex mollit deserunt officia consequat laboris elit amet. Est enim cupidatat proident consequat in irure ad anim enim dolore dolor. Amet in Lorem consectetur elit ex labore excepteur incididunt. Consectetur irure sit cupidatat ut esse eiusmod laboris adipisicing deserunt. Dolor non non deserunt amet eu.</Typography> */}
    
    {/* NothinSelected */}
    {/* <NothingSelectedView /> */}

    {/* NoteView */}
    <NoteView />

    <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover':{ backgroundColor: 'error.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{ fontSize: 30}} />
    </IconButton>


    
    </JournalLayout>
  )
}
