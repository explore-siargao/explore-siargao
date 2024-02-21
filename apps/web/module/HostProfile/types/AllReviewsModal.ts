import { Review } from "./HostReviews"

export type AllReviewsModalProps = {
    isOpen: boolean,
    onClose: () => void,
    reviews: Review[],
}