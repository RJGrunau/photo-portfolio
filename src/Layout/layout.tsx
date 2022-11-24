import { css } from "@emotion/react";
// import Footer from "./Footer";
import Header  from "./Header";


const styles = {
    mainContianer: css({
        width: '100%',
    }),
    main: css({
        width: '100%',
    }),
}

interface LayoutComponentProps {
    renderBody: () => JSX.Element;
}

const LayoutComponent = ({renderBody}: LayoutComponentProps): JSX.Element => (
    <div css={styles.mainContianer}>
       <Header/>
        <main>
            {renderBody()}
        </main>
        {/* <Footer/> */}
    </div>
)


export default LayoutComponent;