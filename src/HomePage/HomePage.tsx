import { css} from "@emotion/react";
import { useQuery } from "graphql-hooks";
import LayoutComponent from "../Layout/layout";

import HeroComponent from "./components/HeroSection";
import Header from '../Layout/HomeHeader';
import MainHeader from '../Layout/MainHeader';

const style = {
    container: css({
        width: '100%',
        maxWidth: '90rem'
    })
}

const HOMEPAGE_QUERY = `query HomePage{
    homePage {
        title
      }
}`
const HomePage = (): JSX.Element => {
    const {loading, error, data} = useQuery(HOMEPAGE_QUERY);
    const {homePage} = data ?? {};
    const {title } = homePage ?? {}; 
    
    const hookProps = {
        renderHeader: () => (<MainHeader/>),
        renderBody: () => (
            
            <div css={style.container}>
                { error && (
                    <div>
                        You fucked up
                    </div>
                )}
                {error && (
                    <div>
                        Shit went wrong
                    </div>
                )}
                {!loading && data && (
                    <HeroComponent  /> 
                )}

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