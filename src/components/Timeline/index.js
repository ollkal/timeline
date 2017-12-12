import React, { Component } from 'react'
import './style.css'
import pictureIcon from './picture.svg'
import movieIcon from './movie.svg'
import locationIcon from './location.svg'

const TimelineApi = {
  items: [
    {
      id: 1,
      title: 'Title of section 1',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '14 Jan 2017',
      iconUrl: pictureIcon,
      iconClassName: 'picture',
      iconAlt: 'Picture'
    },
    {
      id: 2,
      title: 'Title of section 2',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '14 Jan 2017',
      iconUrl: movieIcon,
      iconClassName: 'movie',
      iconAlt: 'Movie'
    },
    {
      id: 3,
      title: 'Title of section 3',
      decsription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.',
      datetime: '14 Jan 2017',
      iconUrl: locationIcon,
      iconClassName: 'location',
      iconAlt: 'Location'
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
