import React from "react";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="p-3 mx-1 sm:mx-3  sm:w-1/3  border-2 rounded-lg shadow-md">
      <div className="border-black border-dashed border-2 rounded-lg p-3 flex flex-col gap-4">
        <h1 className="sm:text-xl lg:text-3xl font-bold">
          Create Budget
        </h1>
        <Form method="post" className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="newBudget" className="text-sm sm:text-base lg:text-lg">Budget Name</label>
            <input type="text" name="newBudget" id="newBudget" placeholder="e.g., Groceries" required  className="border-slate-300 rounded border-2 lg:w-9/12 p-2 text-xs sm:text-sm lg:text-base focus:outline-none focus:border-blue-400 duration-150"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="newBudgetAmount" className="text-sm sm:text-base lg:text-lg">Amount</label>
            <input
              type="number"
              name="newBudgetAmount"
              id="newBudgetAmount"
              step="0.01"
              required
              placeholder="e.g., $250"
              className="border-slate-300 rounded border-2 lg:w-9/12 p-2 text-xs sm:text-sm lg:text-base focus:outline-none focus:border-blue-400 duration-150"
            />
          </div>
          <input type="hidden" name="_action" value="addBudget"/>
          <button type="submit" className='border mt-5 p-1 sm:p-2 px-3 sm:px-4 lg:px-8 bg-black rounded hover:outline-4 hover:outline hover:outline-offset-2 duration-100 lg:w-3/5'>
            <span className='text-white text-xs sm:text-sm lg:text-base'>Create Budget</span>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddBudgetForm;
