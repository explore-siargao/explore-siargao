
import { Typography } from "@/common/components/ui/Typography";
import Link from "next/link";

export default function NotFound() {
    return (
            <div>
                <Typography variant="h1">Oops...</Typography>
                <Typography variant="p">Page not found!</Typography>
                <Link href="/">Go back</Link>
            </div>
    )
}

