import { API_URL_V1_CONVERSATIONS } from "@/common/constants";
import { ApiService } from "@/common/service/api";
import { useQuery } from "@tanstack/react-query";

export async function getConversation(listingId: number, userId: number | undefined) {
    const apiService = new ApiService("mock")
    return await apiService.get(`${API_URL_V1_CONVERSATIONS}/listing/${listingId}/user-guest/${userId}`)
}

function useGetConversationByListingIdWithUserId(listingId: number, userId: number | undefined) {
    const query = useQuery({
        queryKey: ["conversation", listingId && "conversation", userId],
        queryFn: () => getConversation(listingId, userId),
        refetchOnWindowFocus: false,
        enabled: !!listingId && !!userId,
    })
    return query
}

export default useGetConversationByListingIdWithUserId