import { FC } from 'react'
import Button from '../UI/Button'

type UpcomingSesion = {
  session:{
    id: string;
    title: string;
    summary: string;
    date: string;
  }
  onCancel: () => void;
}

const UpcomingSession:FC<UpcomingSesion> = ({ session, onCancel }) => {
  return (
    <article className="upcoming-session">
      <div>
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
        <time dateTime={new Date(session.date).toISOString()}>
          {new Date(session.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </time>
      </div>
      <p className="actions">
        <Button textOnly onClick={onCancel}>
          Cancel
        </Button>
      </p>
    </article>
  )
}

export default UpcomingSession