import React from 'react'
import data from '../rest-countries-api-with-color-theme-switcher-master/data.json'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Border from '../components/Border'

function Detail() {
  const {id} = useParams()

  const target = data.filter(ele => ele.name === id)
  
  if (target.length === 0) {
    // Handle the case where the country with the given id is not found
    return <div>Country not found</div>;
  }

  const top = ( target[0].topLevelDomain ? target[0].topLevelDomain.map((ele,i) => { 
    if (i)
      return ', ' + ele
    else
      return ele}) : 'None'), cur = target[0].currencies.map((ele,i) => { 
    if (i)
      return ', ' + ele.name
    else
      return ele.name
  }), lan = target[0].languages.map((ele,i) => { 
    if (i)
      return ', ' + ele.name
    else
      return ele.name
  });

  const border = target[0].borders ? (target[0].borders.map((ele,i ) => {
    const codeDecihperer = data.filter(el => el.alpha3Code == ele)
    console.log(codeDecihperer)
    return <Border name = {codeDecihperer[0].name} key = {i} />})) : 'No border countries'

  console.log(border)
  return (<>
    <div className='but'>
      <div className='button rf'>
        <Link to = "/" > 
        <FontAwesomeIcon className = 'arrow' icon = {faArrowLeft}></FontAwesomeIcon>
        <small>Back</small>
        </Link>
      </div>
    </div>

    <div className='detail rf'>
      <div className='flag'>
        <img alt ='flag' className='acflag' src= {target[0].flags.png}/>
      </div>

      <div className='cwrapper cf'>
        <h2>{target[0].name}</h2>
        <div className='rwrapper rf'>
          <div className='sa'>
            <div className='mar'><span>Native Name: </span>{target[0].nativeName}<br></br>  </div>
            <div className='mar'><span>Population: </span>{target[0].population}<br></br>  </div>
            <div className='mar'><span>Region: </span>{target[0].region}<br></br>  </div>
            <div className='mar'><span>Sub Region: </span>{target[0].subregion}<br></br>  </div>
            <div className='mar'><span>Captial: </span>{target[0].capital}<br></br>  </div>
          </div>
          <div className='sa sa2'>
            <div className='mar'><span>Top Level Domain: </span>{top}<br></br>  </div>
            <div className='mar'><span>Currencies: </span>{cur}<br></br>  </div>
            <div className='mar'><span>Languages: </span>{lan}<br></br> </div>
          </div>
        </div>
        <div className='blo'>
          <span>Border Countries:&nbsp;</span> {border }
        </div>
      </div>
    </div>
    </>
  )
}

export default Detail