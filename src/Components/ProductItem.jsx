import React, { useContext } from "react";
import { contextApi } from "../Context/Context";

function ProductItem({ item }) {
  const { dispatch } = useContext(contextApi);

  return (
    <main className="grid grid-cols-6 space-x-4 py-4 border-b border-stone-300">
      <div className="flex items-center space-x-4 text-xl text-stone-700 ">
        <i
          className="fa-solid fa-xmark cursor-pointer"
          onClick={() => {
            dispatch({ type: "REMOVE_DATA", payload: item.id });
          }}
        ></i>
        <img
          src={item.thumbnail}
          alt=""
          className="object-contain w-full h-[6rem]"
        />
      </div>
      <h1 className="col-span-2">{item.title}</h1>
      <p>{item.price}</p>
      <div className="bg-stone-200 flex justify-center items-center h-fit rounded-full text-lg space-x-3 py-1">
        <i
          className={`fa-solid fa-minus cursor-pointer ${
            item.qty === 1 && "pointer-events-none  text-stone-500"
          }`}
          onClick={() => {
            dispatch({ type: "QTY_DECREASE", payload: item.id });
          }}
        ></i>
        <span className="select-none">{item.qty}</span>
        <i
          className="fa-solid fa-plus cursor-pointer"
          onClick={() => {
            dispatch({ type: "QTY_INCREASE", payload: item.id });
          }}
        ></i>
      </div>
      <p>${item.price * item.qty}</p>
    </main>
  );
}

export default ProductItem;
