import React from "react";
import Calculator from "../../components/Calculator";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../features/auth/auth.Slices";

const NewOperation = () => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleBalance = (newAmount: number) => {
    dispatch(setBalance(user.amount - newAmount));
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Calculator balance={user.amount} setBalance={handleBalance}></Calculator>
    </div>
  );
};

export default NewOperation;
