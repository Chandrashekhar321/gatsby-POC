import React from 'react'
import Header from '../components/header/header'

const lineupCard = {
    width: '30%',
    display: 'inline-block',
    marginLeft: '20px',
    marginRight: 'auto',
    marginBottom: '20px',
    color: '#fff',
    border: '4px solid #000000'
}
const Lineup = () => {
  return (
    <>
      <Header/>
      <h1>About us</h1>
      <section>
          <div className='container-fluid py-5'>
              <div style={lineupCard} className='card'>
                <img className='card-img' src='http://20.114.244.229:1337/uploads/car_6a9dd779_42630ea8da.png' alt="img1"/>
              </div><br/>
              <div style={lineupCard} className='card'>
                <img className='card-img' src='http://20.114.244.229:1337/uploads/racing_3389dbbd54.png' alt="img2"/>
              </div>
          </div>
      </section>
    </>
  )
}
export default Lineup
