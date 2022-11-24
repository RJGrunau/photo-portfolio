import { css} from "@emotion/react";
import { useQuery } from "graphql-hooks";
import LayoutComponent from "../Layout/layout";
import HeroComponent from "./components/HeroSection";


const style = {
    container: css({
        margin: '0 auto',
        width: '100%',
        maxWidth: '90rem'
    })
}

const HOMEPAGE_QUERY = `query HomePage{
    homePage {
        title
        heroImage {
          responsiveImage(imgixParams: { fit: scale, auto: format }) {
            alt
            aspectRatio
            bgColor
            src
            srcSet
            webpSrcSet
            width
          }
        }
      }
}`
const HomePage = (): JSX.Element => {
    const {loading, error, data} = useQuery(HOMEPAGE_QUERY);
    const {homePage} = data ?? {};
    const {title, heroImage} = homePage ?? {}; 
    const hookProps = {
        renderBody: () => (
            <div css={style.container}>
                {loading && (
                    <div>
                        ...loading
                    </div>
                )}
                {error && (
                    <div>
                        Shit went wrong
                    </div>
                )}
                {data && (
                    <HeroComponent image={heroImage}/>
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