import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const classes = makeStyles(() => ({
  quadrado: {
    backgroundColor: 'red',
    width: 190,
    height: 100,
  }

}))


function App() {
  const styles = classes();

  return (
 
    <div className="App">
      <div className={styles.quadrado}>
      <TextField id="standard-basic" label="Usuário" /> <br></br>
      <TextField type="password" id="standard-basic" label="Senha" />
    </div>
 
    </div>
    
  );
  }

export default App;
