import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/UI/Button.tsx';
import BookSession from '../components/Sessions/BookSession.tsx';

import { SESSIONS } from '../dummy-sessions.ts';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [startBooking, setStartBooking] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  const handleStartBooking = () => {
    setStartBooking(true);
  }

  const handleStopBooking = () => {
    setStartBooking(false);
  };

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }


  return (
    <main id="session-page">
      {startBooking && (
        <BookSession session={loadedSession} onClose={handleStopBooking} />
      )}
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button type='button' textOnly={false} onClick={handleStartBooking}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
