import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row mx-5'>
        <div className='col-sm-6 footer-left'>
          <h3>MDL<b>BEAST</b></h3>
          <p> MDLBEAST is an entertainment company rooted in music culture.<br/>
            Anchored in the Middle East and shared globally;<br/>
            we showcase local, regional and international talent<br/>
            through immersive experiences and content. 
          </p>
        </div>
        <div className='col-sm-6 footer-right'>
          <div className='row'>
            <div className='col-sm-6 event'>
              <h3>EVENT</h3>
                <a href="**">SOUNDSTORM</a>
                <a href="**">Tickets</a>
                <a href="**">Lineup</a>
                <a href="**">Experience</a>
                <a href="**">Plan your JOURNEY</a>
                <a href="**">FAQ</a>
            </div>
            <div className='col-sm-6 legal'>
              <h3>LEGAL</h3>
                <a href="**">Privacy Policy</a>
                <a href="**">Terms and Conditions</a>
                <a href="**">Ticketing Platform</a>
                <a href="**">Code of Conduct</a>
                <a href="**">Respect & Reset (R&R)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
