
import Failure from "./mycomp/Failure"
import Success from "./mycomp/Success"


function App()
{
var a=100
var b=200
var isuser=true
return(
<>
Biggest value:{(a>b) ? a:b}
{isuser ? <Success/>:<Failure/>}

</>

)

}
export default App


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/