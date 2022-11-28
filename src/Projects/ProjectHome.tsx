import {Key, useEffect, useMemo, useState} from 'react';
import { css } from '@emotion/react';
import { useQuery } from 'graphql-hooks';
import { Image, ResponsiveImageType } from 'react-datocms';

import LayoutComponent from '../Layout/layout';
import MainHeader from '../Layout/MainHeader';
import { Frame } from '../Common/interfaces';

const styles = {
    container: css({
        width: '100%',
        maxWidth: '90rem',
        fontFamily: 'IBM Plex Mono',
    }),
    section: css({
        width: '100%',
        maxWidth: '75rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
    }),
    projectIntro: css({
        display: 'flex',
        flexDirection: 'column',
    }),
    projectTitle: css({
        textAlign: 'center',
    }),
    projectDescription: css({
        maxWidth: '50rem',
        margin: '0 auto',
    }),
    buttonContainer: css({
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',

        'button': {
            padding:'0.25rem 0.45rem',
            border: '.0625rem solid #cdcdcd',
            borderRadius: '0.5rem',
            backgroundColor: 'transparent',
        }
    }),
    gallery: css({
        columnCount: '3',
        columnWidth: '33.3%',
    }),
    galleryImage: css({
        margin: '0.625rem 0.625rem'
    }),
}

const CURRENT_PROJECT = `query CurrentProject{
    allPhotoEssays(filter: {featrued: {eq: "true"}}) {
        id
        title
        projectDescription
        featrued
        _seoMetaTags {
          attributes
          content
          tag
        }
        essayGallery {
          image {
            id
            responsiveImage {
              alt
              aspectRatio
              base64
              height
              bgColor
              sizes
              src
              srcSet
              title
              webpSrcSet
              width
            }
          }
        }
    }
}
`
const ProjectsHome = () => {
    const [showPhotos, setShowPhotos] = useState(true);
    const [gallery, setGallery] = useState([]);
    const {loading, data} = useQuery(CURRENT_PROJECT);
    const {allPhotoEssays} = data ?? {};
    const [object] = allPhotoEssays ?? [];
    const {title, projectDescription, essayGallery} = object ?? {};
    
    
    const onViewProjectClick = ():void => {
        if(!showPhotos){
            setShowPhotos(true);
        } else {
            setShowPhotos(false);
        }
    };
   
    const hookProps = {
        renderHeader: () => <MainHeader/>,
        renderBody: () => (
            <div css={styles.container}>
                <section css={styles.section}>
                    <div css={styles.projectTitle}>
                        <h2>Current Project: {title}</h2>
                    </div>
                    {!showPhotos && (
                        <div css={styles.projectIntro}>
                            <article css={styles.projectDescription} dangerouslySetInnerHTML={{__html: projectDescription}}/>
                            <div css={styles.buttonContainer}>
                                <button type='button' onClick={onViewProjectClick}>
                                    View {title} 
                                </button>
                            </div>
                        </div>
                    )}
                    {showPhotos && essayGallery && (
                        <>
                            <div css={styles.gallery}>
                                {essayGallery?.map((image: { image: { id: Key | null | undefined; responsiveImage: ResponsiveImageType; }; }) => (
                                    <div key={image?.image?.id} css={styles.galleryImage}>
                                        <Image data={image?.image?.responsiveImage}/>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </section>
            </div>
        )
    }
    return (
        <LayoutComponent
            {...hookProps}
        />
    )
};


export default ProjectsHome; 