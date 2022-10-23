import { css} from "@emotion/react";
import LayoutComponent from "../Layout/layout";


const HomePage = (): JSX.Element => {
    console.log('You are on the homepage');
    const hookProps = {
        renderBody: () => (
            <div>
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