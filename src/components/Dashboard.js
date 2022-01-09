import { useState } from "react"
import OnlineCard from "./cards/OnlineCard";
import VolumeCard from "./cards/VolumeCard";
import SystemNotifications from "./SystemNotifications";

const Dashboard = () => {
    const [isOnline, setIsOnline] = useState(true)
    const [notifications, setNotifications] = useState([])
    const [volume, setVolume] = useState(30)
    return(
        <div>
        <OnlineCard isOnline = {isOnline} setIsOnline = {setIsOnline} notifications = {notifications} setNotifications = {setNotifications} />
        <VolumeCard notifications = {notifications} setNotifications = {setNotifications} volume = {volume} setVolume = {setVolume} />
        <SystemNotifications messages = {notifications}/>
        </div>
    )
}

export default Dashboard;