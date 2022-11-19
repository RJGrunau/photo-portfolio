import { css} from "@emotion/react";
import { Member } from "../../Common/interfaces";

const styles = {
    card: css({
        width: '33%',
    })
};

const HomePageMemberCard = ({id,name,landingPhoto}: Partial<Member>):JSX.Element => (
    <div key={id}>
        <Image data={landingPhoto.responsiveImage}/>
    </div>
);

export default HomePageMemberCard;