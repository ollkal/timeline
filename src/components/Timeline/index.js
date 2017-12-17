import React, { Component } from 'react'
import './style.css'
import pictureIcon from './picture.svg'
import movieIcon from './movie.svg'
import locationIcon from './location.svg'

const TimelineApi = {
  items: [
    {
      id: 1,
      title: 'Alphadev grundades',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '10 Jan 2015',
      iconUrl: pictureIcon,
      iconClassName: 'picture',
      iconAlt: 'Picture'
    },
    {
      id: 2,
      title: 'Första vinterkonferensen',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '14 Feb 2015',
      iconUrl: movieIcon,
      iconClassName: 'movie',
      iconAlt: 'Movie'
    },
    {
      id: 3,
      title: 'React kompetenslunch',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '14 Mar 2015',
      iconUrl: locationIcon,
      iconClassName: 'location',
      iconAlt: 'Location'
    },
    {
      id: 4,
      title: 'Nytt kontor på Vasagatan',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '14 Dec 2015',
      iconUrl: locationIcon,
      iconClassName: 'location',
      iconAlt: 'Location'
    },
    {
      id: 5,
      title: 'Spelsektionen drar igång',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '18 Jan 2016',
      iconUrl: pictureIcon,
      iconClassName: 'picture',
      iconAlt: 'Picture'
    },
    {
      id: 6,
      title: 'Gokart mästerskap',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '20 Maj 2017',
      iconUrl: pictureIcon,
      iconClassName: 'picture',
      iconAlt: 'Picture'
    }
  ],
  all: function () { return this.items }
}

class Timeline extends Component {
  render () {
    // ...
    return (

      <section id="timeline" className="container">
        {
          TimelineApi.all().map(p => (

            <div key={p.id} className="timeline-block">
              <div className={p.iconClassName + ' timeline-img'}>
                <img src={p.iconUrl} alt="Picture"></img>
              </div>

              <div className="timeline-content">
                <h2>{p.title}</h2>
                <p>{p.decsription}</p>
                <a href={'#' + p.id} className="read-more">Read more</a>
                <span className="date">{p.datetime}</span>
              </div>
            </div>
          ))
        }

      </section>
    )
  }
}

export default Timeline // Don’t forget to use export default!
