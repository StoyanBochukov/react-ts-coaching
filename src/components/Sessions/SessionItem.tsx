import { FC } from 'react'
import Button from '../UI/Button'


type SessionItemProps = {
    title: string;
    summary: string;
    image: string;
    id: string;
}


const SessionItem:FC<SessionItemProps> = ({ title, id, image, summary }) => {
  return (
    <article className='session-item'>
    <img src={image} alt={title} />
    <div className="session-data">
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      <p className="actions">
        <Button textOnly to={id}>Learn More</Button>
      </p>
    </div>
  </article>
  )
}

export default SessionItem