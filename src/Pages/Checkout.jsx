import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../Components/ProductItem";
import { contextApi } from "../Context/Context";

function Checkout() {
  const {
    state: { cartdata },
  } = useContext(contextApi);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    setTotal(
      cartdata.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cartdata]);

  return (
    <main className=" flex items-start max-w-[1300px] gap-10 mx-auto py-20 px-5 place-content-center">
      <section>
        <ul className="grid grid-cols-6 bg-stone-100 rounded-t">
          <li>Image</li>
          <li className="col-span-2">Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
        {cartdata?.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </section>
      <section className="border border-stone-300 px-4 py-6 w-[20rem]">
        <h1 className="text-3xl">Cart totals</h1>
        <div className="flex justify-between border-b border-stone-300 py-2">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="flex justify-between py-2">
          <p className="text-xl">Total</p>
          <p>${total}</p>
        </div>

        <Link to={!total ? "/" : "/thank"}>
          <button
            className={`bg-blue-600 text-white w-full py-3 rounded-full font-bold mt-4 ${
              !total ? "bg-blue-200 text-black" : ""
            }`}
          >
            {!total ? "BACK TO HOME PAGE" : "PROCEED TO CHECKOUT"}
          </button>
        </Link>
      </section>
    </main>
  );
}

export default Checkout;
