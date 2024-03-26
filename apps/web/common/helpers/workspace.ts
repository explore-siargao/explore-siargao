import toast from "react-hot-toast";

export const setWorkspace = (role:string) => {
        if (role === "host" || role === "guest") {
            localStorage.setItem("workspace", role);
        } else {
            toast.error("Invalid role. Please specify 'host' or 'guest'.");
        }
};

export const getWorkSpace = ()=>{ 
       return localStorage.getItem("workspace")
}