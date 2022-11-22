import { css } from '@emotion/react'
// import HeaderLogo from '../Common/SVG/HeaderLogo';


const styles = {
    mainHeader: css({
        width: '100%',
        
    }),
    headerContainer: css({
        width: '100%',
        maxWidth: '80.5rem',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        margin: '0 auto',
    })
}


const Header = ():JSX.Element => (
    <header css={styles.mainHeader}>
        <div css={styles.headerContainer}>
            <div>
                <h1>Robert Grunau</h1>
            </div>
            <div>
                <nav>
                    Links here bro
                </nav>
            </div>
        </div>
    </header>
);

export default Header;