import {css} from '@emotion/react';
import { useQuery } from 'graphql-hooks';
import LayoutComponent from '../Layout/layout';
import MainHeader from '../Layout/MainHeader';

const style = {
    container: css({
        width: '100%',
        maxWidth: '90rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '@media (max-width: 600px)': {
            padding: '0.5rem',
        }
    }),
    pageText: css({
        width: '100%',
        maxWidth: '65rem',
        padding: '2rem', 
        
        '@media (max-width: 600px)': {
            padding: '0.25rem',
            'ol': {
                padding: '2.25rem',
            },
        },
        '@media (max-width: 1080px)':{
            padding: '2.25rem',
            'ol': {
                padding: '2.25rem',
            }
        },

    }),
    signUp: css({
        margin: '0 auto',
    }),
    newsletter: css({
        width: '480px',
        height: '320px',

        '@media (max-width: 600px)': {
            width: '100%'
        }
    })
}

const NEWSLETTER_QUERY = `query Newsletter{
    page(filter: {title: {eq: "Newsletter"}}) {
        pageText(markdown: true)
        title
    }
}`
const Newletter = () => {
    const {data} = useQuery(NEWSLETTER_QUERY);
    const {page} = data ?? {};
    const {pageText} = page ?? {};
    
    const hookProps = {
        renderHeader: () => (<MainHeader/>),
        renderBody: () => (
            <div css={style.container}>
                {pageText && (
                    <article css={style.pageText} dangerouslySetInnerHTML={{__html: pageText}}/>
                    )
                }
                <section css={style.signUp}> 
                    <iframe src="https://rjgrunau.substack.com/embed" css={style.newsletter} style={{border:"1px solid #EEE", background:"white"}} scrolling="no"></iframe>
                </section>
            </div>
        )
    }

    return(
        <LayoutComponent
            {...hookProps}
        />
    )
};

export default Newletter; 