import { useEffect, useState, FC } from 'react';
import Modal from '../UI/Modal.tsx';
// import UpcomingSession from './UpcomingSession.tsx';
// import { useSessionsContext } from '../../store/sessions-context.tsx';
import Button from '../UI/Button.tsx';

type UpcomingSessionsProps = {
  onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};


const UpcomingSessions:FC<UpcomingSessionsProps> = ({ onClose }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // const sessionsCtx = useSessionsContext();
  
    // console.log(sessionsCtx);
  
    // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
    useEffect(() => {
    setIsModalOpen(true);
    }, []);
  
    // function handleCancelSession(sessionId: string) {
    //   sessionsCtx.cancelSession(sessionId);
    // }
  
    // const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  return (
    <Modal isOpen={isModalOpen} onRequestClose={onClose}>
    <h2>Upcoming Sessions</h2>
    {/* {hasSessions && (
      <ul>
        {sessionsCtx.upcomingSessions.map((session) => (
          <li key={session.id}>
            <UpcomingSession
              session={session}
              onCancel={() => handleCancelSession(session.id)}
            />
          </li>
        ))}
      </ul>
    )} */}
    {/* {!hasSessions && <p>No upcoming sessions.</p>} */}
    <p className="actions">
      <Button type='button' textOnly={false} onClick={onClose}>Close</Button>
    </p>
  </Modal>
  )
}

export default UpcomingSessions