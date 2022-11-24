import {css} from '@emotion/react';
import LayoutComponent from '../Layout/layout';
import MainHeader from '../Layout/MainHeader';

const style = {
    container: css({
        width: '100%',
        maxWidth: '90rem'
    })
}

const Newletter = () => {
    
    const hookProps = {
        renderHeader: () => (<MainHeader/>),
        renderBody: () => (
            <div css={style.container}>
                body
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