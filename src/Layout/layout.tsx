import { css } from "@emotion/react";
import SiteHeader from "./Header";


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
        <SiteHeader/>
        <main>
            {renderBody()}
        </main>
        <footer css={styles.mainFooter}>
            This is your footer
        </footer>
    </div>
)


export default LayoutComponent;