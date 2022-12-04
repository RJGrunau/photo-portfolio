import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

const styles = {
    contactData: css({
        gridColumn: '1/4',
        gridRow: '1/4',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '@media (max-width: 649px)': {
            display: 'none',
        }
    }),
    contactBox: css({
        width: '50%',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        padding: '0.75rem 0.5rem',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'IBM Plex Mono',
        border: '1px solid #000'
    }),
    newsLetter: css({
        display: 'flex',
        margin: '0.5rem 0',
    }),
    newsLetterLink: css({
        color: 'black',
        marginLeft: '0.5rem'
    }),
    social: css({
        display: 'flex',
        margin: '0.5rem 0',
    }),
    closeSection: css({
        alignSelf: 'center',
        margin: '0.5rem 0',
    }),
    closeButton: css({
        border: 0,
        backgroundColor: 'transparent',
    }),
}

interface ContactSectionProps {
    homeText: string,
    showData: boolean,
    onClick: () => void,
}

const ContactSection = ({homeText, onClick}: ContactSectionProps): JSX.Element => (
    <div css={styles.contactData}>
        <div css={styles.contactBox}>
            <div>
                <article dangerouslySetInnerHTML={{__html: homeText}}/>
            </div>
            <div css={styles.newsLetter}>
                <div>
                    Projects:
                </div>
                <div>
                    <NavLink css={styles.newsLetterLink} to="/projects">Current Project</NavLink>
                </div>
            </div>
            <div css={styles.social}>
                <div>Instagram:</div>
                <div style={{marginLeft: '0.5rem'}}><a href="https://instagram.com/rjgrunau">rjgrunau</a></div>
            </div>
            <div css={styles.closeSection}>
                <button type="button" css={styles.closeButton} onClick={onClick}>
                    Close
                </button>
            </div>
        </div>
    </div>
);

export default ContactSection;