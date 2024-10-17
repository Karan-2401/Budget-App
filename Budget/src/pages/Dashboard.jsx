import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

export function dashboardLoader(){
    const username =fetchData("username");
    return { username };
}

export async function dashboardAction({request}) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try{
    
     localStorage.setItem("username",JSON.stringify(formData.username));
     return toast.success(`Welcome ${formData.username}`)
  }
  catch(e){
    throw new Error("There was a problem creating your account.")
  }
}
const Dashboard = () => {
    const {username} = useLoaderData()
  return (
    <>
      {username ? (<p>{username}</p>) : <Intro />  }
    </>
  )
}

export default Dashboard
