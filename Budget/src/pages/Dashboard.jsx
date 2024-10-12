import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";

export function dashboardLoader(){
    const username =fetchData("username");
    return { username };
}

const Dashboard = () => {
    const {username} = useLoaderData()
  return (
    <div>
        {username}<br></br>
      dash
    </div>
  )
}

export default Dashboard
