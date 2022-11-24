import {css} from '@emotion/react';

const styles = {
    mainFooter: css({
        width: '100%',
        marginTop: '1.5625rem',
    }),
    container: css({
        width: '100%',
        maxWidth: '80.5rem',
        padding: '1rem 0',
        textAlign: 'center',
        fontFamily: 'Open Sans'
    }),
}
const Footer = ():JSX.Element => (
    <footer css={styles.mainFooter}>
        <div css={styles.container}>
            All images copyright Robert Grunau 2022 - 2023
        </div>
    </footer>
);

export default Footer