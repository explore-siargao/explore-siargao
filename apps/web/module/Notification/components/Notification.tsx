import { Typography } from "@/common/components/ui/Typography";
import { cn } from "@/common/helpers/cn";
import React from "react"

interface NotificationContent {
    avatarKey: string;
    user: string;
    description: string;
    time: string;

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
          {content?.map((item) => (
              <div key={item.description} className="notification ">
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
                        src={`/assets/${item.avatarKey}`}
                        width={10}
                        height={10}
                        alt="Avatar"
                        className="object-cover h-full w-full rounded-full"
                        
                        />
                    </div>
                    </div>
                    <div className="py-4 pl-2">
                         <Typography variant="p" fontWeight="semibold">
                         {item.user}
                        </Typography>
                        <Typography variant="p">
                        {item.description}
                        </Typography>
                    </div>
                    <div className="py-4 pl-2 justify-self-end">
                        <Typography variant="p">
                         {item.time}
                        </Typography>
                    </div>
                </div>
                  </div>
              </div>
          ))}
      </div>;
}
  export default Notifications;

