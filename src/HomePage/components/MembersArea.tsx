import { css} from "@emotion/react";
import { Member } from "../../Common/interfaces";
import { useGetMemberData } from "../hooks/useGetMemberData";
import HomePageMemberCard from "./HomePageMemberCard";

const styles = {
    membersSection: css({
        width: '100%',
        padding: '1rem',
    }),
    gallery: css({
        maxWidth: '60rem',
        margin: '0 auto',
        display: 'flex',
    }),
}
const MembersArea = (): JSX.Element => {
    const {allMembers} = useGetMemberData() ?? {};
    
    return (
        <section css={styles.membersSection}>
            <div>
                <h2>Members</h2>
            </div>
            <div css={styles.gallery}>
                {allMembers?.map((member) => (
                    <HomePageMemberCard
                        key={member.id}
                        name={member.name}
                        landingPhoto={member.landingPhoto}
                    />
                ))}
            </div>
        </section>
    )
};

export default MembersArea