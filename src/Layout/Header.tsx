import { css } from '@emotion/react'
import { Link } from 'react-router-dom';
// import HeaderLogo from '../Common/SVG/HeaderLogo';


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
        fontSize: '1.75rem',
        fontFamily: 'Titillium Web',
    }),
    mastheadLink: css({
        textDecoration: 'none',
        color: '#000',
    }),
    nav: css({})
}


const Header = ():JSX.Element => (
    <header css={styles.mainHeader}>
        <div css={styles.headerContainer}>
            <div>
                <Link to="/" css={styles.mastheadLink}>
                    <h1 css={styles.masthead}>Robert Grunau</h1>
                </Link>
            </div>
                <nav>
                    <Link to="/about">
                        about
                    </Link>
                </nav>
        </div>
    </header>
);

export default Header;