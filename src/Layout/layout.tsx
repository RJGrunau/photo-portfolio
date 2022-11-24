import { css } from "@emotion/react";
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
    onClick: () => void,
}

const LayoutComponent = ({renderBody, onClick}: LayoutComponentProps): JSX.Element => (
    <>
        <div css={styles.mainContianer}>
        <Header onClick={onClick}/>
            <main>
                {renderBody()}
            </main>
        </div>
    </>
)


export default LayoutComponent;