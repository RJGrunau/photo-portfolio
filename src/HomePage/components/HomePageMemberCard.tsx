import { css} from "@emotion/react";
import { Member } from "../../Common/interfaces";
import { Image } from "react-datocms";
const styles = {
    card: css({
        width: '33%',
        margin: '0 0.5rem',
    }), 
    cardOverlay: css({
        backgroundColor: '#000',
        opacity: 1,
    }),
};

const HomePageMemberCard = ({id,name,landingPhoto}: Partial<Member>):JSX.Element => (
    <div key={id} css={styles.card}>
        <div css={styles.cardOverlay}>
            <Image data={landingPhoto?.responsiveImage}/>
        </div>
    </div>
);

export default HomePageMemberCard;