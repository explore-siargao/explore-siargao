import useGetNotifications from "./hooks/useGetNotifications"
import Notifications from "./components/Notification"
const NotificationUI = ()=>{

    const {data, isPending} = useGetNotifications(1)
    return(
        <div>
        {!isPending &&(
            <Notifications content={data?.items} />
        )}
        </div>
    )
}
export default NotificationUI