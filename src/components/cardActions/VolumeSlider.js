import Slider from '@material-ui/core/Slider';
  
const VolumeSlider = (props) => {
    const { notifications, setNotifications, volume, setVolume } = props
    
    const handleChange = (event, value) => {
      setVolume(value)
      let warning = "Listening to music at a high volume could cause long-term hearing loss."
      let found = notifications.find(message => message === warning)
      if(volume > 80 && !found){
        setNotifications([...notifications, warning])
      }
      else if (value < 80) {
        let filteredArray = notifications.filter(message => message !== found)
        setNotifications([...filteredArray])
      }
      
    };
  
    return (
      <div style={{width:250}}>
        <Slider
          defaultValue={30}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
          onChange={handleChange}
        />
      </div>
    );
  }

  export default VolumeSlider