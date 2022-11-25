import { css } from '@emotion/react';
import LayoutComponent from '../Layout/layout';
import MainHeader from '../Layout/MainHeader';

const styles = {
    container: css({
        width: '100%',
        maxWidth: '90rem'
    })
}

const ProjectsHome = () => {
    const hookProps = {
        renderHeader: () => <MainHeader/>,
        renderBody: () => (
            <div css={styles.container}>
                Hi
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