import { FC } from 'react'
import SessionItem from './SessionItem'

type SessionListProps = {
    sessions: {
        id: string;
        summary: string;
        title: string;
        image: string;
        
    }[]
}

const SessionsList: FC<SessionListProps> = ({ sessions }) => {
  return (
    <ul id="sessions-list">
    {sessions.map((session) => (
      <li key={session.id}>
        <SessionItem {...session} />
      </li>
    ))}
  </ul>
  )
}

export default SessionsList