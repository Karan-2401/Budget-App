import React, { useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({budgets}) => {
    const fetcher = useFetcher();
    const formref = useRef();
    const focusRef = useRef();
  return (
    <div>
      <div className="p-3 my-3 mx-1 sm:mx-3  sm:w-1/3  border-2 rounded-lg shadow-md">
        <div className="border-fuchsia-400 border-dashed border-2 rounded-lg p-3 flex flex-col gap-4">
          <h1 className="sm:text-xl lg:text-3xl font-bold">Add New
            <span className="text-blue-400">
                {budgets.length ==1 && ` ${ budgets.map((bud)=> bud.name)}`}
            </span> Expense
          </h1>
          <fetcher.Form
            method="post"
            ref={formref}
            className="flex flex-col gap-2"
          >
            <div>
              <div className="flex flex-col gap-2">
                <label htmlFor="newExpense" className="text-sm sm:text-base lg:text-lg">Expense Name</label>
                <input type="text" name="newExpense" id="newExpense" placeholder="e.g., Coffee" ref={focusRef} required className="border-slate-300 rounded border-2 lg:w-9/12 p-2 text-xs sm:text-sm lg:text-base focus:outline-none focus:border-blue-400 duration-150"/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="newExpenseAmount" className="text-sm sm:text-base lg:text-lg">Amount</label>
                <input type="number" step="0.01" inputMode="decimal" name="newExpenseAmount" id="newExpenseAmount" placeholder="e.g., 3.50" required className="border-slate-300 rounded border-2 lg:w-9/12 p-2 text-xs sm:text-sm lg:text-base focus:outline-none focus:border-blue-400 duration-150" />
              </div>
              {budgets.length>=2 ? (
                  <div className="flex flex-col gap-2">
                  <label htmlFor="newExpenseBudget" className="text-sm sm:text-base lg:text-lg">
                    Budget Category
                  </label>
                  <select name="newExpenseBudget" id="newExpenseBudget" className="border-slate-300 rounded border-2 lg:w-9/12 p-2 text-xs sm:text-sm lg:text-base focus:outline-none focus:border-blue-400 duration-150">
                   {budgets.sort((a,b)=> a.createAt - b.createAt).map((x,index)=>{
                    return (
                      <>
                        <option value={x.name} key={x.id}>{x.name}</option>
                      </>
                    )
                   })}                 
                  </select>
                </div>
                ):``}
              <button type="submit" className='border mt-5 p-1 sm:p-2 px-3 sm:px-4 lg:px-8 bg-fuchsia-400 rounded hover:outline-4 outline-fuchsia-400 hover:outline hover:outline-offset-2 duration-100 lg:w-3/5'>
            <span className='text-white text-xs sm:text-sm lg:text-base'>Add Expense</span>
          </button>
            </div>
          </fetcher.Form>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;
