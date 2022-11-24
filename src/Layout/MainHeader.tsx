import { css } from '@emotion/react'
import { Link, NavLink } from 'react-router-dom';


const styles = {
    mainHeader: css({
        width: '100%',
        height: '100px'
    }),
    headerContainer: css({
        width: '100%',
        maxWidth: '80.5rem',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        margin: '0 auto',
    }),
    masthead: css({
        fontSize: '2rem',
        fontFamily: 'IBM Plex Mono',
        border: 0,
        backgroundColor: 'transparent',
    }),
    mastheadLink: css({
        textDecoration: 'none',
        color: '#000',
    }),
    nav: css({
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '0.5rem',
    }),
    navLink: css({
        fontSize: '1.25rem',
        textDecoration: 'none',
        color: 'black',
    }),
}

const navRoutes = [
    {
        path: '/newsletter',
        text: 'Newsletter'
    }
];

const MainHeader = () => (
    <header css={styles.mainHeader}>
        <div css={styles.headerContainer}>
            <div>
                <div css={styles.masthead} >
                    <Link to="/" css={styles.mastheadLink}>Robert Grunau</Link>
                </div>
            </div>
            <nav css={styles.nav}>
                {navRoutes.map(route => (
                    <NavLink 
                        to={route.path} 
                        css={styles.navLink}
                        style={(isActive) => ({textDecoration: isActive ? 'underline': 'none'})}
                    >
                        {route.text}
                    </NavLink>
                ))}
            </nav>
        </div>
    </header>
);

export default MainHeader;