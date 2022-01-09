import CardTemplate from "./CardTemplate";
import OnlineSwitch from "../cardActions/OnlineSwitch";

const OnlineCard = (props) =>{
    const { notifications, setNotifications, isOnline, setIsOnline } = props
    return(
        <CardTemplate
        title='Online Mode' 
        body='Is this application connected to the internet?'>
        <OnlineSwitch isOnline = {isOnline} setIsOnline = {setIsOnline} notifications = {notifications} setNotifications = {setNotifications}  />  
        </CardTemplate>
    )
   
}

export default OnlineCard