import { Login } from './Login'
import { LoginViewModel } from './LoginViewModel'

function App() {
  return (
    <>
      <Login model={new LoginViewModel()}/>
    </>
  )
}

export default App
