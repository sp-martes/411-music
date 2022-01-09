const SystemNotifications = (props) => {
    return (
      <div>
        <h3>System Notifications:</h3>
        <ol>
          {props.messages.map((message, index) => {
            return (
              <li key={index}>{message}</li>
            )
          })}
        </ol>
      </div>
    )
  }
  
  export default SystemNotifications