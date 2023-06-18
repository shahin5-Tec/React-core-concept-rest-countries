import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'
import Header from './components/Header/Header'


function App() {

  return (
    <div className="App">
    <Countries></Countries>
    </div>
  )
}
// function LoadCounties(){
//   const [countries,setCountries]=useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//   return(
//     <div>
//       <h2>Hello from rest counties</h2>
//       <p>Available countries:{countries.length}</p>
//       {
//       countries.map(country=> <Country name={country.name.common} population={country.population}></Country>)
//     }
//     </div>
   
//   )
// }
// function Country(props){
//   return(
//     <div>
//      <h3>Name:{props.name}</h3>
//      <p>Population:{props.population}</p>
//     </div>
//   )
// }


export default App
