import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = (props) => {
    const {loggedIn, setLoggedIn} = props
    const handleSubmit = () => {
        setLoggedIn(!loggedIn)
      }
    return (
      <form onSubmit={handleSubmit}>
        <TextField label="Username*" />
        <TextField label="Password*" />
        <Button type="submit">
        Login
        </Button>
      </form>
    )
  }

export default Login