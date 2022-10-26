import { css } from "@emotion/react";
import { Image } from "react-datocms";
import { ResponsiveImage } from "../../Common/interfaces";

const styles = {
    heroContainer: css({
        width: '100%',
        maxWidth: '56.25rem',
        padding: '3rem',
        margin: '0 auto',
    })
}
interface HeroComponentProps {
    image: ResponsiveImage
}
const HeroComponent = ({image}: HeroComponentProps):JSX.Element => (
    <div css={styles.heroContainer}>
        <Image data={image}/>
    </div>
)

export default HeroComponent;