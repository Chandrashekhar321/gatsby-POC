import React, { useEffect, useState } from 'react'
//import { connect } from 'react-redux'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
//import { fetchEvents } from '../redux/events/eventAction'
//import axiosInstance from '../services/AxiosInstance'
import { graphql } from 'gatsby'
import './home.css'

const Home = ({ data }) => {
  const [allEvents, setEvents] = useState([])
  const [displayEvents, setDisplayEvents] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(()=> {
    //axiosInstance.get('events').then(response=> {
        setEvents(data?.allRestApiEvents?.nodes)
        setDisplayEvents(data?.allRestApiEvents?.nodes)
        setCategories(data?.allRestApiCategories?.nodes)
        console.log("----",data,data?.allRestApiCategories?.nodes,categories)

    //}).catch(error=> console.log(error.message))
  },[data])

  const selectEvents = (event) => {
    let events = []
    allEvents.forEach(currentEvent => {
        if (currentEvent?.Year === event.target.value) {
            events.push({
                Year: currentEvent?.Year,
                description: currentEvent?.description,
                price: currentEvent?.price,
                url: currentEvent?.Name?.url
            })
        }
    })
    setDisplayEvents(events)
  }
  return (
    <>
      <Header/>
      <section>
          <div className='jumbotron'>
              <select>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Arabic</option>
                  <option>French</option>
              </select>
              <h2 className="soundstrom-heading">SOUNDSTORM IN NUMBERS</h2>
              <div className="row mt-5 mx-5">
                  <div className='col-sm-4'>
                      <h2>{"200+ "}
                          <span>ARTISTS</span>
                      </h2>
                  </div>
                  <div className='col-sm-4'>
                      <h2>{"8 "}
                          <span>STAGES</span>
                      </h2>
                  </div>
                  <div className='col-sm-4'>
                      <h2>{"4 "}
                          <span>DAYS OF LIVE MUSIC</span>
                      </h2>
                  </div>
              </div>
          </div>
          <div className='reviews pt-5'>
              <h2 className='review-heading'>REVIEWS FROM SOUNDSTORM 2019</h2>
              <div className='container'>
                  <div className='row mt-5'>
                      <div className='col-sm-4'>
                          <p>
                            We've never seen something at this scale, with these stages, with this level of a attendance. I felt like it was something great.
                          </p>
                      </div>
                      <div className='col-sm-4'>
                          <p>
                            We've never seen something at this scale, with these stages, with this level of a attendance. I felt like it was something great.
                          </p>
                      </div>
                      <div className='col-sm-4'>
                          <p>
                            We've never seen something at this scale, with these stages, with this level of a attendance. I felt like it was something great.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='experience pt-5'>
              <div className='container'>
                  <h2 className='experience-heading mt-5'> EXPLORE EXPERIENCES AT SOUNDSTORM 2021 </h2>
                  <div className='row py-5'>
                      <div className='col-sm-6'>
                          <p className='experience-text'>
                              From world famous artists to street performances to private party boxes - Soundstorm has it all and more!
                          </p>
                          <div className='buttons'>
                              <span className='mx-3'>
                                  <button className='btn btn-secondary'>
                                    PLAN MY JOURNEY
                                  </button>
                              </span>
                              <span>
                                  <button className='btn btn-primary'> EXPLORE EXPERIENCES </button>
                              </span>
                          </div>
                      </div>
                      <div className='col-sm-6'>
                          <div className='exp-img'>
                              <img src='http://20.114.244.229/assets/web.png' alt='img'/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='card-list'>
              <div className='filter'>
                  <select onChange={selectEvents}>
                      <option>Years</option>
                      <option value='2019'>2019</option>
                      <option value='2020'>2020</option>
                      <option value='2021'>2021</option>
                      <option value='2022'>2022</option>
                  </select>
              </div>
              <div className='container'>
                  <div className='row'>
                      { displayEvents && displayEvents.map((event, index)=> (
                        <div className='card-container' key={index}>
                            <div className='card my-2'>
                                <img src={`http://20.114.244.229:1337${event.url ? event.url : event.Name?.url }`} className='card-img-top' alt='card image1'/>
                                <div className='card-body'>
                                    <p className='card-text'>
                                        {event.description}
                                    </p>
                                    <span>$ {event.price}</span>
                                    <br/>
                                    <button className='btn btn-info btn-sm card-btn mx-4 mt-3' tabIndex='0'>{event?.view}</button>
                                </div>
                            </div>
                        </div>
                      ))}
                  </div>
              </div>
          </div>
          <div className='storm py-5'>
              <div className='container'>
                  <div className='row'>
                      <div className='col-sm-6'>
                          <h3>A storm is brewing</h3>
                          <p>It’s coming Shaking, inspiring and moving us to one beat This rhythm is in our DNA It’s our sound, our place This is <b>Soundstorm</b>  And the storm is you </p>
                      </div>
                      <div className='col-sm-6'>
                          <div className='storm-video'>
                              <video controls>
                                  <source src={`http://20.114.244.229:1337${data?.allRestApiCategories?.nodes[0]?.video[0].url}`} />
                                  <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions"></track>
                              </video>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='best py-5'>
              <h2 className='best-heading'>BEST OF SOUNDSTROME 2019</h2>
              <div className='container py-5'>
                  <div className='row'>
                      { categories && categories.map((node, index) => (
                          index !== 0 ? (
                            <div className='col-sm-6' key={index}>
                                <video controls>
                                    <source src={`http://20.114.244.229:1337${node.video[0].url}`} />
                                    <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions"></track>
                                </video>
                            </div>
                          ) : null
                        ))
                      }
                  </div>
              </div>
          </div>
          <Footer/>
      </section>
    </>
  )
}
export const query = graphql`
 query {
    allRestApiEvents {
        nodes {
          Year
          Name { url }
          description
          price
          view
        }
    },
    allRestApiCategories {
        nodes {
          name
          video { url }
        }
    }
  }`

// const mapStateToProps = state => {
//     return {
//         eventsData: state.events
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchEvents: dispatch(fetchEvents())
//     }
// }
//export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home
