import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import Link from "next/link"

const NotFound = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"95vh", overflow:"hidden"  }}>
        <div  style={{ textAlign:"center", overflow:"hidden"}}>
          <Typography variant="h1">404 - Page Not Found</Typography>
          <Typography>Sorry, the page you're looking for does not exist.</Typography>
        </div>
        </div>
      );

}

export default NotFound
