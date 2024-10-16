import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import Nav from "../Navbar/Nav";
import img from "../assets/img.jpg"
export function MainLoader() {
  const username = fetchData("username");
  return { username };
}

const Mainboard = () => {
  const { username } = useLoaderData();
  return (
    <div className="flex flex-col justify-between h-screen">
      <Nav username={username}/>
      
      <main>
        <Outlet />
      </main>
      <img src={img} alt="" className="w-full h-1/5"/>
    </div>
  );
};

export default Mainboard;
