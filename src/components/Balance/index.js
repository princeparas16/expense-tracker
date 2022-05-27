import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((el) => el.amount);
  const total = amount.reduce((acc, el) => (acc += el), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">₹{total}</h1>
    </>
  );
};

export default Balance;
