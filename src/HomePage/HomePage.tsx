import { css} from "@emotion/react";
import LayoutComponent from "../Layout/layout";


const style = {
    container: css({
        margin: '0 auto',
        width: '100%',
        maxWidth: '75rem'
    })
}
const HomePage = (): JSX.Element => {
    console.log('You are on the homepage');
    const hookProps = {
        renderBody: () => (
            <div css={style.container}>
                <h1>Hello Home Page</h1>
            </div>
        )
    }
    return (
        <LayoutComponent
            {...hookProps}
        />
    )
}

export default HomePage;