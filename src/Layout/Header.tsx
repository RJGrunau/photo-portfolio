import {css} from '@emotion/react';
import { Link } from 'react-router-dom';
import MainLogo from '../Common/SVG/MainLogo';

const styles = {
    header: css({
        width: '100%',
        height: '6.25rem',
        padding: '0.5rem',
    }),
    container: css({
        width: '100%',
        maxWidth: '95rem',
        padding: '0.25rem 0.5rem',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }), 
    logoHolder: css({
        width: '100px',
        height: '100px',
    }), 
    navHolder: css({
        width: '20%',
    }),
    nav: css({
        display: 'flex',
        alignItems: 'center'
    }),
    links: css({
        fontSize: '1.4rem',
    }),
}

const SiteHeader = ():JSX.Element => (
    <header css={styles.header}>
        <div css={styles.container}>
            <div css={styles.logoHolder}>
                <MainLogo/>
            </div>
            <div css={styles.navHolder}>
                <nav css={styles.nav}>
                    <Link css={styles.links} to="/about">About</Link>
                </nav>
            </div>
        </div>
    </header>
);

export default SiteHeader;