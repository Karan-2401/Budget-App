import React from "react";

const AddExpenseForm = ({budgets}) => {
    console.log(budgets,"k")
  return (
    <div>
      <div className="p-3 my-3 mx-1 sm:mx-3  sm:w-1/3  border-2 rounded-lg shadow-md">
        <div className="border-fuchsia-400 border-dashed border-2 rounded-lg p-3 flex flex-col gap-4">
          <h1 className="sm:text-xl lg:text-3xl font-bold">Add New
            <span className="text-blue-400">
                {budgets.length ===1 && ` ${ budgets.map((bud)=> bud.name)}`}
            </span> Expense
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseForm;
