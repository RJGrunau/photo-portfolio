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
        fontFamily: 'IBM Plex Mono',
        border: 0,
        backgroundColor: 'transparent',
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

interface HeaderProps {
    onClick: () => void,
}
const Header = ({onClick}: HeaderProps):JSX.Element => (
    <header css={styles.mainHeader}>
        <div css={styles.headerContainer}>
            <div>
                <div css={styles.mastheadLink} >
                    <button type="button" onClick={onClick} css={styles.masthead}>Robert Grunau</button>
                </div>
            </div>
        </div>
    </header>
);

export default Header;