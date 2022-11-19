import { css} from "@emotion/react";
import { useQuery } from "graphql-hooks";
import LayoutComponent from "../Layout/layout";

import HeroComponent from "./components/HeroSection";
import MembersArea from "./components/MembersArea";
const style = {
    container: css({
        width: '100%',
    }),
    textSection: css({
        width: '100%',
        padding: '1rem',
        backgroundColor: '#F5F5F5',
    }),
    textBlock: css({
        margin: '0 auto',
        maxWidth: '60rem',
    }),
    membersSection: css({
        width: '100%',
        padding: '1rem',
    }),
    gallery: css({
        maxWidth: '60rem',
        margin: '0 auto',
    }),
}

const HOMEPAGE_QUERY = `query HomePage{
    homePage {
        homepageGallery {
          responsiveImage {
            sizes
            width
            height
            src
            srcSet
            webpSrcSet
          }
        }
        introText(markdown: true)
    }
}`
const HomePage = (): JSX.Element => {
    const { loading, error, data} = useQuery(HOMEPAGE_QUERY);
    const {homePage} = data ?? {};
    const {homepageGallery, introText, member} = homePage ?? {};
    
    const hookProps = {
        renderBody: () => (
            
            <div css={style.container}>
                { data && (
                    <> 
                        <HeroComponent images={homepageGallery}/>
                        <section css={style.textSection}>
                            <article css={style.textBlock} dangerouslySetInnerHTML={{__html: introText}}/>
                        </section>
                        <MembersArea/>
                    </>
                )}
                { error && (
                    <div>
                        You fucked up
                    </div>
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