import React, { useContext, useState } from "react";
import { contextApi } from "../Context/Context";

function Product({ item }) {
  const { dispatch } = useContext(contextApi);
  const [input, setInput] = useState(1);

  return (
    <section className=" grid grid-cols-8 space-x-4 py-4 border-b border-stone-300">
      <img
        src={item.thumbnail}
        alt="product"
        className="object-contain w-full h-[6rem]"
      />
      <h1 className="col-span-2 text-blue-600 tracking-wide">{item.title}</h1>
      <p className="text-blue-600">{item.Color}</p>
      <p>{item.size}</p>

      <div
        className={`space-x-2 ${
          item.stock ? "text-green-400" : "text-red-400"
        }`}
      >
        <i
          className={`fa-solid ${
            item.stock ? "fa-face-smile" : "fa-face-frown"
          }`}
        ></i>
        <span>{item.stock ? "In Stock" : "Not Stock"}</span>
      </div>
      <p>${item.price}</p>
      <div className="flex items-start justify-evenly h-[2rem]">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-10 bg-stone-200 p-1 rounded-sm"
        />
        <span className="text-white bg-black p-2 rounded-sm w-[2rem]  flex justify-center">
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <input
          type="checkbox"
          name="check"
          id={item.id}
          className={` cursor-pointer my-auto ${
            !item.stock && "pointer-events-none"
          } `}
          onClick={(e) => {
            if (e.target.checked) {
              dispatch({ type: "ADD_DATA", payload: item });
              dispatch({
                type: "QTY_INCREASE_INPUT",
                payload: { id: item.id, qty: input },
              });
            } else dispatch({ type: "REMOVE_DATA", payload: item.id });
          }}
        />
      </div>
    </section>
  );
}

export default Product;
