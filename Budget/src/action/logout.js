import { redirect } from "react-router-dom";
import { deleteUser } from "../helper";

export async function logout() {
    deleteUser("username")
    return redirect("/")
}