import {useState} from 'react';
import { css} from "@emotion/react";
import { useQuery } from "graphql-hooks";
import LayoutComponent from "../Layout/layout";

import HeroComponent from "./components/HeroSection";
import Header from '../Layout/HomeHeader';

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
    const [showData, setShowData] = useState(false);
    const {loading, error, data} = useQuery(HOMEPAGE_QUERY);
    const {homePage} = data ?? {};
    const {title } = homePage ?? {}; 
    const openCloseNav = ():void => {
        console.log('clicked');
        
        if(showData){
            setShowData(false);
        } else {
            setShowData(true);
        }

    } 
    const hookProps = {
        showData,
        renderHeader: () => (<Header onClick={openCloseNav}/>),
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
                    <HeroComponent showData={showData} onClick={openCloseNav}/>                    
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