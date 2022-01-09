import Switch from '@material-ui/core/Switch';

export default function OnlineSwitch( props ) {
  const { notifications, setNotifications, isOnline, setIsOnline } = props

  const handleChange = (event) => {
        setIsOnline(!isOnline);
        let warning = "Your application is offline. You won't be able to share or stream music to other devices."
        let found = notifications.find(message => message === warning)
        
        if(event.target.checked && found){
            let filteredArray = notifications.filter(message => message !== found)
            console.log("filtered array-->", filteredArray)
            return setNotifications([...filteredArray])
          }
        setNotifications([...notifications,warning])
    }

    return(
        <div>
        <Switch
          checked={isOnline}
          onChange={handleChange}
          name="online"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </div>
    );
    
  }