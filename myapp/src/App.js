import{useForm}from 'react-hook-form'
function App()
{
  const{register,handleSubmit}=useForm()
  const dis=(data)=>{
    console.log(data)
  }
return(
  <form onSubmit={handleSubmit(dis)}>
    <input type="text" placeholder='username' name="un"{...register("un")}></input><br></br>
    <input type="password" placeholder='password' name="pw"{...register("pw")}></input><br></br>
    <input type="email" placeholder='email' name="email"{...register("email")}></input><br></br>
    <input type="submit"></input>


  
  
  </form>
)

}
export default App
/*import{useState,useEffect}from 'react'
function App()
{

const[dt,setDt]=useState(Date())
useEffect (()=>{
  console.log(dt)
  setTimeout(()=>{
    setDt(Date())
  },1000)
})

  

  
  return(
    <>
    current Date&Time:{dt}
    </>

  )
}
export default App
/*import {useState,useEffect}from 'react'
function App()
{
const[city,SetCity]=useState("karur")
useEffect (()=>{
  setTimeout(()=>{
  document.title="jayaraman"
  SetCity("chennai")
},3000)
})

  return(
    <>
    <h1>data:{document.title}</h1>
    <h1>city:{city}</h1>

    
    </>
  )
}
export default App
/*import {useEffect} from 'react'
function App()
{
useEffect(()=>{

  setTimeout(()=>{
    document.title="sabareesan"
},3000)
})
   return(
    <>
    <h1>{document.title}</h1>
    </>

  )
}
export default App


/*import {useState,useEffect} from 'react'
function App()
{
  const[title,SetTitle]=useState("sabareesan")
   useEffect(()=>{
    document.title=title
    // don't use:setstate here
    //SetTitle("jayaraman")
   })
   
   const dis=()=>{
    SetTitle("karthi")
   }
    
  
  return(
     <>
     <h1>use effect hook</h1>
     {title}
    <button onClick={dis}>clickme</button>     
     </>


  )
}
export default App
/*import {useState,useEffect}from 'react'
function App(){
 const[title,setTitle]=useState("sabareesan")
 useEffect(()=>{
  document.title=title
 })
  const dis=()=>{
    setTitle("karthick")
  

 }

  return(
   <>
   <h1>use Effect hook</h1>
   {title}
   <button onClick={dis}>clickme</button>
   
  </>

  )
}
export default App
/*import {useState} from 'react'
function App()
{
  const[uname,setUname]=useState("sabareesan")
  const[city,setCity]=useState("karur")
  const unfun=(e)=>{
    setUname(e.target.value)
  }
    const cityfun=(e)=>{
    setCity(e.target.value)


  }
return(
  <>
  <input type="text"value={uname}onChange={(e)=>{unfun(e)}}></input>
  <input type="text"value={city}onChange={(e)=>{cityfun(e)}}></input>
  </>
)

}
export default App

/*import {useState} from 'react'
function App()
{
  const[uname,setUname]=useState("sabareesan")
  const unfun=(e)=>{
    setUname(e.target.value)
  }

  return(
    <>
    <input type="text"value={uname} name="un"onChange={(e)=>unfun(e)}></input>
    
    
    </>
  )
}
export default App
/*function App()
{
  return(
    <>
    <input type="text"value="sabareesan"></input>
    
    </>
  )
}
export default App
/*function App()
{
  const dis=(event)=>{
    event.preventDefault()
    console.log("submit button pressed")
  }
  
return(
  
  <form onSubmit={(e)=>dis(e)}>
<h1>onSubmit event</h1>
<input type="text"name="t1"></input><br></br>
<input type="text"name="t2"></input><br></br>
<input type="text"name="t3"></input><br></br>
<input type="submit"value="clickme"></input>
</form>
  
)
}
export default App
/*function App()
{
  const dis=()=>{
    var a500=document.getElementById("a500").value*500
    var a200=document.getElementById("a200").value*200
    var a100=document.getElementById("a100").value*100
    document.getElementById("res").value=a500+a200+a100
  }

  
  return(
    <>
        <form onInput={dis}>  
          <h1>onInput Demo</h1>
   500x<input type="text"id="a500"></input><br></br>
   200x<input type="text"id="a200"></input><br></br>
   100x<input type="text"id="a100"></input><br></br>
   <input type="text"id="res"></input></form>
    
    </>
  )
}
export default App



/*
function App()
{
const dis=(e)=>{
  var k=e.target.id
  document.getElementById("res").innerHTML="cursor inside"+k
}
  const show=(e)=>{
    var s=e.target.id
  document.getElementById("res").innerHTML="cursor outside"+s
}
return(
  <>
  <h1>event handling -onFocus-onBlur</h1>
  <input type="text"id="t1"onFocus={(e)=>dis(e)} onBlur={(e)=>show(e)}></input><br></br>
  <input type="text"id="t2"onFocus={(e)=>dis(e)} onBlur={(e)=>show(e)}></input><br></br>
  <div id="res"></div>
  </>
)
}
export default App


/*function App()
{
  const dis=(event)=>{
    var k=event.target.value
    var tbname=event.target.tbname
    var idname=event.target.id
    var tagname=event.target.tagName
    document.getElementById("res1").innerHTML="you are typing..."+k+" name:"+tbname+" id:"+idname+ "tagName:"+tagname
  }
  return(
    <>
    <input type="text"text id="t1"name="textbox1"onChange={(e)=>dis(e)}></input>
      <input type="text"text id="t2" name="textbox2"onChange={(e)=>dis(e)}></input>
        <input type="text"text id="t3"name="textbox3"onChange={(e)=>dis(e)}></input>
        <textarea id="addbox"name="address"onChange={(e)=>dis(e)}></textarea>
        <div id="res1"></div>
    
    
    </>
  )

}
export default App


/*function App()
{
  const dis=(event)=>{
    var k=event.target.value
    document.getElementById("res1").innerHTML="you are typing..."+k
  }
  return(
    <>
    <input type="text"onChange={(e)=>dis(e)}></input>
     <input type="text"onChange={(e)=>dis(e)}></input>
     <div id="res1"></div>

    
    </>
  )
}
export default App
/*function App()
{
  const dis=(event)=>{
    var k=event.target.value
    var tbname=event.target.name
    var idname=event.target.id
    var tagname=event.target.tagName
    document.getElementById("res1").innerHTML="you are typing..."+k+" name:"+tbname+" id:"+idname+"tagname:"+tagname
    }
return(
    <>
    <input type="text"id="t1"name="textbox1"onChange={(e)=>dis(e)}></input>
    <input type="text"id="t2"name="textbox2"onChange={(e)=>dis(e)}></input>
    <input type="text"id="t3"name="textbox3"onChange={(e)=>dis(e)}></input>
    <textarea id= "addbox"name="address"onChange={(e)=>dis(e)} rows="6"cols="25"></textarea>
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
<label>enter your email id:</label>
<input type="email"></input>
<br></br>
<label>select exam date:</label>
<input type="date"></input>
<label>enter your time:</label>
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
/*function App()
{

  const dis=(event)=>{
    var k=event.target.value
    document.getElementById("res1").innerHTML="you are typing..."+k
  
  }
return(
  <>
  <input type="text" onChange={(e)=>dis(e)}></input>
  <input type="text"onChange={(e)=>dis(e)}></input>
  <div id="res1">
  
  
  </>




)
}
export default App



function App()
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


/*
function App(props)
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

function App(props)
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
/*
function App(props)
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