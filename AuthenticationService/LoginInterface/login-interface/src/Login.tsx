import { Button, TextField } from "@mui/material";
import { LoginViewModel } from "./LoginViewModel";
import './Login.css'

type LoginProps = {
    model: LoginViewModel;
  }; 


  export const Login: React.FunctionComponent<LoginProps> = ({ model }) => (
    <div className="login-container">
        <TextField id="username-field" label="Username" variant="outlined" />
        <TextField id="password-field" label="Password" variant="outlined" />
        <Button variant="contained">Login</Button>
    </div>
  );