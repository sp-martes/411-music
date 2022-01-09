import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const MusicAppBar= () =>{
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" >
            Music App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MusicAppBar