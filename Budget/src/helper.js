const generateRandomColor = ()=>{
    const existingBudgetLength = fetchData("budgets")?.lenght ?? 0;
    return `${existingBudgetLength *34} 65% 50%`
}

export const fetchData =(key)=>{
    return JSON.parse(localStorage.getItem(key))
}

export const createBudget = ({name,amount})=>{
    const newItem = {
        id:crypto.randomUUID(),
        name:name,
        createAt : Date.now(),
        amount: +amount,
        color:generateRandomColor()
    }

    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets,newItem]))
}

export const deleteUser =(user)=>{
    return localStorage.removeItem(user);
}