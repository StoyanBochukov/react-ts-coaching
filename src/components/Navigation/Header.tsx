import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import UpcomingSessions from '../Sessions/UpcomingSessions';

const Header = () => {

    const [upcomingSessinsVisible, setUpcomingSessionsVisible] = useState(false);

    const showUpcomingSessions = () => {
        setUpcomingSessionsVisible(true);
    };

    const hideUpcomingSessions = () => {
        setUpcomingSessionsVisible(false)
    }

  return (
    <>
    {upcomingSessinsVisible && (
        <UpcomingSessions onClose={hideUpcomingSessions} />
    )}
        <header id='main-header'>
            <h1>ReactMentoring</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''} end>Our Mission</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sessions' className={({isActive}) => isActive ? 'active' : ''}>Browse Sessions</NavLink>
                    </li>
                    <li>
                        <Button type='button' textOnly={false} onClick={showUpcomingSessions}>Upcoming Sessions</Button>
                    </li>
                </ul>
            </nav>

        </header>
    </>
  )
}

export default Header