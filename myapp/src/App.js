

function App()
{
const mystyle={
  color:"white",
  backgroundcolor:"blue",
  border:"5px solid red"



}
return(
  <>
  <h1 style={mystyle} welcome to header></h1>
  <h1 style={{backgroundcolor:"red",color:"blue",fontsize:"22px"}}></h1>
   <h1 style={mystyle} welcome to header></h1>
    <h1 style={mystyle} welcome to header></h1>
    <h2>this is header 2</h2> 
     <h2>this is header 2</h2> 
  
  </>
)

}
export default App
/*import { img1, img2, img3 } from "./mycomp/Images/ImgFile"



function App()
{
  return(
    <>
    <img src={img1} width="300"alt="wrong path"></img>
    <img src={img2} width="300"alt="wrong path"></img>
    <img src={img3} width="300"alt="wrong path"></img>

    
    </>
  )
}
export default App



/*
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