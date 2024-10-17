import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

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
    const {username, budget} = useLoaderData()
  return (
    <>
      {username ? (
        <div className="flex flex-col gap-4">
          <h1 className='text-xl sm:text-3xl lg:text-5xl font-bold'>Welcome Back, <span className='text-blue-400'>{username}</span></h1>
          <div>

            <div>
              <div>
                <AddBudgetForm/>
              </div>
            </div>
          </div>
        </div>
        
      ) : <Intro />  }
    </>
  )
}

export default Dashboard
