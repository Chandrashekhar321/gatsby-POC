import { useParams } from '@gatsbyjs/reach-router'
import React, { useEffect, useState } from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import './event-detail.css'

const EventDetail = () => {
  const [eventDetail, setEventDetail] = useState()
  const params = useParams()
  console.log("----", params.id)
  useEffect(()=> {
      fetch(`http://20.114.244.229:1337/events/${params.id}`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
          setEventDetail(resultData)
        }
      )
  }, [params.id])
  return (
    <>
        <Header/>
        <section className='event-detail'>
            <div className='container-fluid py-5'>
                <div className='card'>
                    <img alt='Event Card' className="card-img" src={`http://20.114.244.229:1337${eventDetail?.Name?.url}`}/>
                    <div className='card-body my-3'>
                        <p>
                            {eventDetail?.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
      <Footer/>
    </>
  )
}
export default EventDetail
