import { useLoaderData } from "react-router-dom";
import { createBudget, fetchData } from "../helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";

export function dashboardLoader() {
  const username = fetchData("username");
  const bug = fetchData("budgets");
  return { username, bug };
}
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...value } = Object.fromEntries(data);
  console.log(_action);
  switch (_action) {
    case "newUser":
      try {
        localStorage.setItem("username", JSON.stringify(value.username));
        return toast.success(`Welcome ${value.username}`);
      } catch (e) {
        throw new Error("There was a problem creating your account.");
      }
      break;

    case "addBudget":
      try {
        createBudget({
          name: value.newBudget,
          amount: value.newBudgetAmount,
        });
        return toast.success("Budget Created");
      } catch (e) {
        throw new Error("There is problem in creating this budget.");
      }
  }
}
const Dashboard = () => {
  const { username, bug } = useLoaderData();
  console.log(bug)
  return (
    <>
      {username ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold">
            Welcome Back, <span className="text-blue-400">{username}</span>
          </h1>
          <div>
            <div>
              <div>
               
                <AddBudgetForm />
                {bug.length >=1 ? <AddExpenseForm budgets={bug}/> : `` }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
