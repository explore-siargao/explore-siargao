import LayoutWrapper from "@/common/components/LayoutWrapper";
import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";

export default function NotFound() {
    return (
            <LayoutWrapper>
                <Typography variant="h1">Oops...</Typography>
                <Typography variant="p">Page not found!</Typography>
                <Link href="/">Go back</Link>
            </LayoutWrapper>
    )
}

