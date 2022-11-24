import { css } from '@emotion/react'
import { Link } from 'react-router-dom';


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
        justifyContent: 'center',
        margin: '0 auto',
    }),
    masthead: css({
        fontSize: '2rem',
        fontFamily: 'Titillium Web',
    }),
    mastheadLink: css({
        textDecoration: 'none',
        color: '#000',
    }),
    mobileNav: css({
        display: 'flex',
        justifyContent: 'space-evenly',
    }),
    navLink: css({
        fontSize: '1.1875rem',
        textDecoration: 'none',
        color: 'black',
    }),
}

const navRoutes = [
   
    {
        text: 'Newsletter',
        route: '/newsletter'
    },
]
const Header = ():JSX.Element => (
    <header css={styles.mainHeader}>
        <div css={styles.headerContainer}>
            <div>
                <Link to="/" css={styles.mastheadLink}>
                    <h1 css={styles.masthead}>Robert Grunau</h1>
                </Link>
            </div>
        </div>
    </header>
);

export default Header;