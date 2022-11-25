import { css } from "@emotion/react";


const styles = {
    mainContianer: css({
        width: '100%',
    }),
    main: css({
        width: '100%',
    }),
}

interface LayoutComponentProps {
    renderHeader: () => JSX.Element,
    renderBody: () => JSX.Element,
    onClick?: () => void,
}

const LayoutComponent = ({renderBody, renderHeader}: LayoutComponentProps): JSX.Element => (
    <>
        <div css={styles.mainContianer}>
            {renderHeader && renderHeader()}
            <main>
                {renderBody()}
            </main>
        </div>
    </>
)


export default LayoutComponent;