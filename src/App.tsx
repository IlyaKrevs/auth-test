import React, { useState, useEffect } from 'react';

import './App.css';
import TextInput from './Components/UI/Inputs/TextInput';

function App() {

  let currentLogin: string = '12345';
  let currentPass: string = '67890';

  let [authStatus, setAuthStatus] = useState<boolean>(false)

  let [login, setLogin] = useState<string>('')
  let [pass, setPass] = useState<string>('')

  let [loginValid, setLoginValid] = useState<boolean | null>(null)
  let [passValid, setPassValid] = useState<boolean | null>(null)


  async function askServer() {

    // return fetch('http://localhost:3000/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     login: login,
    //     password: pass,
    //   })
    // })
    //   .then(respose => respose.json())
    //   .then(data => {
    //     /// bla bla bla
    //   })

    if (currentLogin !== login) {
      setLoginValid(false)
      return
    }

    if (currentPass !== pass) {
      setPassValid(false)
      return
    }

    setAuthStatus(true)
  }

  useEffect(() => {
    setLoginValid(null)
    setPassValid(null)
  }, [login, pass])

  function loginCALLBACK(value: string) {
    setLogin(value)
  }
  function passCALLBACK(value: string) {
    setPass(value)
  }
  return (
    <div className="App">


      {authStatus && <div className="authCompleted">
        Complete!
      </div>
      }

      {!authStatus && <div className="authFormContainer">
        <div className="authTitle">
          Login:12345 Pass: 67890
        </div>
        Login: <TextInput callBack={loginCALLBACK} valid={loginValid} />
        Pass:  <TextInput callBack={passCALLBACK} valid={passValid} />

        <button
          className='myButton'
          onClick={() => askServer()}
        >
          JOIN
        </button>
      </div>
      }
    </div>
  );
}

export default App;
