function App()
{

  const dis=(event)=>{
    var k=event.target.value
    document.getElementById("res1").innerHTML="you are typing..."+k
  
  }
return(
  <>
  <input type="text" onChange={(e)=>dis(e)}></input>
  <input type="text"onChange={(e)=>dis(e)}></input>
  <div id="res1"></div>
  
  
  </>




)
}
export default App

/*function App()
{
  return(
<>
<h1>React Form</h1>
<input type="text"></input><br></br>
<input type="password"></input><br></br>
<input type="number"></input><br></br>
<label>select gender:</label>
<input type="radio"name="gen"></input>male
<input type="radio"name="gen"></input>female
<input type="radio"name="gen"></input>others
<br></br>
<label>select course</label>
<input type="checkbox"></input>c
<input type="checkbox"></input>c++
<input type="checkbox"></input>java
<input type="checkbox"></input>python
<input type="checkbox"></input>web design
<input type="checkbox"></input>reactjs
<br></br>
<label>type your address/feedback</label>
<textarea rows="6 "column ="5"></textarea>
<br></br>
<select>
  <option>sunday</option>
  <option>monday</option>
  <option>tuesday</option>
  <option>wednesday</option>
  <option>thursday</option>
  <option>friday</option>
  <option>saturday</option>
</select>
<br></br>
<form>
<label>enter your email id</label>
<input type="email"></input>
<br></br>
<label>select exam time:</label>
<input type="time"></input>
<br></br>
<input type="week"></input>
<br></br>
<label>upload your photo</label>
<input type="file"></input>
<br></br>
volume<input type="range"max="1"style={{width:"30px"}}></input>
<br></br>
<input type="hidden"value="100"name="b1"></input>
<br></br><br></br><br></br>
<input type="submit"></input>
<input type="button"value="clickme"></input>
<input type="reset"></input>
</form>
</>

)
}
export default App

/*function App(props)
{
  return(
    <>
    <h1>student roll number:{props.myobj.rno}</h1>
    <h2>studentname:{props.myobj.sname}</h2>
    <h2>studentmark1:{props.myobj.marks[0]}</h2>
    <h2>studentmark2:{props.myobj.marks[1]}</h2>
    <h2>studentmark3:{props.myobj.marks[2]}</h2>

    
    
    </>
  )
}
export default App
/*function App(props)
{
  return(
    <>
    <h1>student roll number:{props.myobj.rno}</h1>
    <h2>studentname:{props.myobj.sname}</h2>
    <h2>studentmark1:{props.myobj.marks.mark1}</h2>
    <h2>studentmark2:{props.myobj.marks.mark2}</h2>
    <h2>studentmark3:{props.myobj.marks.mark3}</h2>

    
    
    </>
  )
}
export default App
/*function App(props)
{
  return(
    <>
    <h1>student roll number:{props.myobj.rno}</h1>
    <h2>studentname:{props.myobj.sname}</h2>
    <h2>studentmark1:{props.myobj.mark1}</h2>
    <h2>studentmark2:{props.myobj.mark2}</h2>
    <h2>studentmark3:{props.myobj.mark3}</h2>
    
    
    </>
  )
}
export default App
/*
import './mycomp/Images/mycss.css'

function App()
{
const mystyle={
  color:"white",
  backgroundColor:"blue",
  border:"5px solid red"
}
return(
  <>
   <h1 style={mystyle}>welcome to header</h1>
   <h1 style={{backgroundColor:"red",color:"blue",fontsize:"22px"}}></h1>
   <h1 style={mystyle}>welcome to header</h1>
   <h1 style={mystyle}>welcome to header</h1>
   <h2>this is header 2</h2>
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