import { redirect } from "react-router-dom";
import { deleteUser } from "../helper";
import { toast } from "react-toastify";

export async function logout() {
    deleteUser("username");
    toast.success("You have deleted your account!")
    return redirect("/")
}