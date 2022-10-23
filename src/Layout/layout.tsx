import { css } from "@emotion/react";


const styles = {
    mainContianer: css({
        width: '100%',
    }),
    mainHeader: css({
        width: '100%'
    }),
    main: css({
        width: '100%',
    }),
    mainFooter: css({
        width: '100%',
    })
}

interface LayoutComponentProps {
    renderBody: () => JSX.Element;
}

const LayoutComponent = ({renderBody}: LayoutComponentProps): JSX.Element => (
    <div css={styles.mainContianer}>
        <header css={styles.mainHeader}>
            This is your header
        </header>
        <main>
            {renderBody()}
        </main>
        <footer css={styles.mainFooter}>
            This is your footer
        </footer>
    </div>
)


export default LayoutComponent;