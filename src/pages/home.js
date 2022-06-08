import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { graphql, Link } from 'gatsby'
import './home.css'
import { fetchEvents } from '../redux/events/eventAction'
import { fetchLanguage } from '../redux/events/eventAction'

const Home = ({ data, eventsData, getEvents, getLanguage }) => {
  const [displayEvents, setDisplayEvents] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(()=> {
        setCategories(data?.allRestApiCategories?.nodes)
        getEvents()
        //To fetch data at run time
        // fetch(`http://20.114.244.229:1337/events`)
        // .then(response => response.json()) // parse JSON from request
        // .then(resultData => {
        //   setEvents(resultData)
        //   console.log(resultData)
        // })
  },[data, getEvents])

  const selectLanguage = (event) => {
    console.log(event.target.value, eventsData)
    getLanguage(event.target.value)
    setDisplayEvents([])
  }

  const selectEvent = (event) => {
    let events = []
    eventsData?.events?.forEach(currentEvent => {
        if (currentEvent?.Year === event.target.value) {
            events.push({
                id: currentEvent?.id,
                Year: currentEvent?.Year,
                description: currentEvent?.description,
                price: currentEvent?.price,
                url: currentEvent?.Name?.url,
                view: currentEvent?.view
            })
        }
    })
    if (events.length === 0) { setDisplayEvents([{missingEvents: true}]) }
    else setDisplayEvents(events)
  }

  const showEvents = (event) => {
      if (!event.missingEvents) {
        return (
            <div className='card-container' key={event.id}>
                <div className='card my-2'>
                    <img src={`http://20.114.244.229:1337${event.url ? event.url : event.Name?.url }`} className='card-img-top' alt='card image1'/>
                    <div className='card-body'>
                        <p className='card-text'>
                            {event.description}
                        </p>
                        <span>$ {event.price}</span>
                        <br/>
                        <button className='btn btn-info btn-sm card-btn mx-4 mt-3' tabIndex='0'>
                            <Link to={`/app/event-detail/${event.id}`}>{event?.view}</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
      }
  }

  return (
    <>
      <Header/>
      <section>
          <div className='jumbotron'>
              <select onChange={selectLanguage}>
                  <option value="en">English</option>
                  <option value="hi-IN">Hindi</option>
                  <option value="ar-BH">Arabic</option>
                  <option value="fr-BE">French</option>
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
                  <select onChange={selectEvent}>
                      <option>Years</option>
                      <option value='2019'>2019</option>
                      <option value='2020'>2020</option>
                      <option value='2021'>2021</option>
                      <option value='2022'>2022</option>
                  </select>
              </div>
              <div className='container'>
                  <div className='row'>
                      {
                          displayEvents.length > 0 ? (
                              displayEvents.map(event => showEvents(event))
                            ) : (
                                eventsData.loading ? <h2>...Loading</h2> :
                                eventsData.eventsError ? <h2> {eventsData.eventsError} </h2> :
                                eventsData?.events.map(event => (
                                  showEvents(event)
                           )))
                       }

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
          id
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

const mapStateToProps = state => {
    return {
        eventsData: state.events,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getEvents: ()=> dispatch(fetchEvents()),
        getLanguage: (locale) => dispatch(fetchLanguage(locale))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)