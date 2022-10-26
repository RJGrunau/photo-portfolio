import { css} from "@emotion/react";
import { useQuery } from "graphql-hooks";
import LayoutComponent from "../Layout/layout";


const style = {
    container: css({
        margin: '0 auto',
        width: '100%',
        maxWidth: '75rem'
    })
}

const HOMEPAGE_QUERY = `query HomePage{
    homePage {
        title
        heroImage {
          responsiveImage {
            alt
            aspectRatio
            bgColor
            src
            srcSet
            webpSrcSet
          }
        }
      }
}`
const HomePage = (): JSX.Element => {
    const {loading, error, data} = useQuery(HOMEPAGE_QUERY);
    const {homePage} = data ?? {};
    const {title, heroImage} = homePage ?? {}; 
    console.log();
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

                    <h1>{title}</h1>
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