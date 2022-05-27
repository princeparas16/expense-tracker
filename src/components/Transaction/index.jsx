import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Transaction = ({ el }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = el.amount < 0 ? "-" : "+";
  return (
    <li className={el.amount < 0 ? "minus" : "plus"}>
      {el.text}{" "}
      <span>
        {sign}₹{Math.abs(el.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(el.id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
