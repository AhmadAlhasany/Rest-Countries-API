import React from 'react'
import data from '../rest-countries-api-with-color-theme-switcher-master/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Country from '../components/Country'

function Home(props) {
  const [arr, setArr] = React.useState(data)
  
  function handleChange(event){
    const {name, value} = event.target;
    props.setF(pre => {return {...pre, 
      [name]: value}})
  }

  
  React.useEffect(
    () => {
      setArr(data.filter(ele =>{return (ele.name.toLocaleLowerCase().startsWith(props.f.sf.toLocaleLowerCase()) && (ele.region === props.f.cf || (props.f.cf === 'Filter by Region' || props.f.cf === 'All')))}))
    }
    ,[props.f.cf , props.f.sf])

  const countries = arr.map((ele,i )=> {return (<Country key = {i} name = {ele.name} population = {ele.population} region = {ele.region} capital = {ele.capital} img = {ele.flags.png}/>)})

  return (
    <div className = 'Home'>
      <div className='Filters rf'>
          <FontAwesomeIcon className='Sea' icon = {faSearch}/>        
        <input autoComplete ="off" onChange = {handleChange} type='text' name = 'sf' value = {props.f.sf ? props.f.sf : ''} placeholder='Search for a country...'/>
        <select onChange = {handleChange} name = "cf" value = {props.f.cf ? props.f.cf : ''}>
          <option disabled hidden value = 'Filter by Region'>Filter by Region</option>
          <option value = 'All'> All</option>
          <option value = 'Africa'> Africa </option>  
          <option value = 'Americas'> Americas </option>  
          <option value = 'Asia'> Asia </option>  
          <option value = 'Europe'> Europe </option>  
          <option value = 'Oceania'> Oceania </option>  
        </select>  
      </div>
      <div className='Grid'>
        {countries}
      </div>
    </div>
  )
}

export default Home