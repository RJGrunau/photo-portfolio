import { APIError, useQuery } from "graphql-hooks";
import { Member } from "../../Common/interfaces";

const Members_Query = `query Members{
    allMembers {
        id
        name
        landingPhoto {
          responsiveImage {
            aspectRatio
            base64
            bgColor
            height
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
`; 

interface UseGetMemberDataReturn {
    allMembers: Member[],
    loading: boolean,
    error: APIError<object> | undefined,
}

export const useGetMemberData = ():UseGetMemberDataReturn => {
    const { loading, error, data } = useQuery(Members_Query);
    const { allMembers} = data ?? {};
    return {
        loading,
        error,
        allMembers,
    }
}; 