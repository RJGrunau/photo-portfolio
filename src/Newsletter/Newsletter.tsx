import {css} from '@emotion/react';
import LayoutComponent from '../Layout/layout';
import MainHeader from '../Layout/MainHeader';

const style = {
    container: css({
        width: '100%',
        maxWidth: '90rem',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'center'
    }),
    signUp: css({
        margin: '0 auto',
    }),
}

const Newletter = () => {
    
    const hookProps = {
        renderHeader: () => (<MainHeader/>),
        renderBody: () => (
            <div css={style.container}>
                <section css={style.signUp}> 
                    <iframe src="https://rjgrunau.substack.com/embed" width="480" height="320" style={{border:"1px solid #EEE", background:"white"}} scrolling="no"></iframe>
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