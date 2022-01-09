import CardTemplate from "./CardTemplate";
import VolumeSlider from "../cardActions/VolumeSlider";

const VolumeCard = (props) => {
    const { notifications, setNotifications, volume, setVolume } = props
    return(
        <CardTemplate
        title='Master Volume' 
        body='Overrides all other sound settings in this application'>
        <VolumeSlider notifications = {notifications} setNotifications = {setNotifications}  volume = {volume} setVolume = {setVolume} />
        </CardTemplate>
    )
    
}

export default VolumeCard