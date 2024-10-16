import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import Intro from "../Navbar/Intro";

export function dashboardLoader(){
    const username =fetchData("username");
    return { username };
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
