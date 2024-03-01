import { Typography } from "@/common/components/ui/Typography";
import { cn } from "@/common/helpers/cn";
import React from "react"

export interface NotificationContent {
    id:number,
    profilePicture: string;
    name: string;
    listing:{
        hostId:number,
        title:string
    };
    type:string,
    days?:number,
    createdAt: string;

  }
  interface NotificationProps {
    content?: NotificationContent[];
    size?: "sm" | "md";
  }

  const Notifications =({content,size}:NotificationProps)=>{
   
    return <div className="notification-container ">
        <div>
            <Typography variant="h2" fontWeight="semibold" className="mb-4">
                Activity
            </Typography>
        </div>
          {content?.map((item:NotificationContent) => {
             const now = new Date()
             const createdAt = new Date(item.createdAt)
             const timeDifferenceInMillis = Number(now) - Number(createdAt)
             const timeDifferenceInHours = timeDifferenceInMillis / (1000 * 60 * 60);
             const timeDifferenceInDays = timeDifferenceInHours / 24;
            return(
              <div key={item.id} className="notification ">
                  <div className="content">
                <div className="flex items-start right-0 border-b">
                    <div className="py-4 pr-2">
                    <div
                        className={cn(
                        `rounded-full`,
                        size === "md" ? "h-16 w-16" : "h-12 w-12"
                        )}
                    >
                        <img
                        src={`/assets/${item.profilePicture}`}
                        width={10}
                        height={10}
                        alt="Avatar"
                        className="object-cover h-full w-full rounded-full"
                        
                        />
                    </div>
                    </div>
                    <div className="py-4 pl-2">
                         <Typography variant="p" fontWeight="semibold">
                         {item.name}
                        </Typography>
                       {item.type==="Booking" ? (<p>
                        <span>{item.name}</span> booked your listing {item.listing.title} for {item.days} days
                       </p>):(<p><span>{item.name}</span> added a review to your listing {item.listing.title}</p>)}
                    </div>
                    <div className="py-4 pl-2 justify-self-end">
                        <Typography variant="p">
                         {timeDifferenceInHours>=24 ?timeDifferenceInDays.toFixed(0)+"d":timeDifferenceInHours.toFixed(0)+"h"}
                        </Typography>
                    </div>
                </div>
                  </div>
              </div>
            
          )})}
      </div>;
}
  export default Notifications;

