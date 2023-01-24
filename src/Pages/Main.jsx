import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import { ProductData } from "../Data";
import { Link } from "react-router-dom";
import { contextApi } from "../Context/Context";
import { useContext } from "react";

//  category array
const Category = [
  "--Choose an option--",
  "Woman-dresses",
  "Woman-shoes",
  "Men-shirts",
  "Men-shoes",
];

// size array
const Size = ["--Choose Size--", "M", "L", "XL"];

function Main() {
  const [selectedOption, setSelectedOption] = useState(Category[0]);
  const [selectedSize, setSelectedSize] = useState(Size[0]);
  const [product, setProduct] = useState(ProductData);
  const [size, setsize] = useState(ProductData); //size is use for size product like change size in men shirt
  const [searchInput, setSearchInput] = useState("");
  const { state, dispatch } = useContext(contextApi);

  useEffect(() => {
    dispatch({ type: "RESET" });
  }, []);

  // search product in product array
  useEffect(() => {
    setProduct([]);
    setSelectedOption(Category[0]);
    setSelectedSize(Size[0]);

    ProductData.filter((item) => {
      `${item.title.toLowerCase()}`.includes(searchInput) &&
        setProduct((prev) => [...prev, item]);
    });
  }, [searchInput]);

  // handle category option
  const handleOption = (event) => {
    // reset size, select option for size, product
    setSelectedSize(Size[0]);
    setProduct([]);
    setsize([]);
    setSearchInput("");
    dispatch({ type: "RESET" });

    let CategoryName = event.target.value;
    if (CategoryName === Category[0]) {
      setProduct(ProductData);
      setsize(ProductData);
    }
    setSelectedOption(CategoryName);

    ProductData.map((item) => {
      if (item.category === CategoryName) {
        setProduct((prev) => [...prev, item]);
        setsize((prev) => [...prev, item]);
      }
    });
  };

  /********** handle size option********** */
  const handleSize = (event) => {
    let SizeName = event.target.value;
    setSelectedSize(SizeName);
    setSearchInput("");
    dispatch({ type: "RESET" });

    if (SizeName === Size[0]) {
      setProduct(size);
    } else {
      setProduct([]);
      size.map((item) => {
        item.size === SizeName && setProduct((prev) => [...prev, item]);
      });
    }
  };

  /********** reset button ********** */
  const Reset = () => {
    setSelectedOption(Category[0]);
    setSelectedSize(Size[0]);
    setsize(ProductData);
    setProduct(ProductData);
  };

  return (
    <main className="px-5">
      <h1 className="text-blue-500 text-center text-4xl font-bold py-4">
        E-commerce
      </h1>
      <header className="flex justify-between items-center px-8 py-7">
        {/* header left  */}
        <section className="flex space-x-4 ">
          {/******************** category  ***************/}
          <select
            name="Category"
            id="category"
            value={selectedOption}
            onChange={handleOption}
          >
            {Category.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/************* size  ****************/}
          <select
            name="Size"
            id="size"
            value={selectedSize}
            onChange={handleSize}
          >
            {Size.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button
            className="text-blue-400 space-x-1 text-xl pl-4"
            onClick={() => Reset()}
          >
            <i className="fa-solid fa-rotate-left"></i>
            <span>Reset</span>
          </button>
        </section>

        {/******************** header right  ***********************/}
        <section className="flex space-x-4">
          <div className=" space-x-2 ">
            <span className="text-lg">Search:</span>
            <input
              type="text"
              placeholder="Search Product"
              value={searchInput}
              className="outline-none bg-stone-100 px-3 py-1 rounded-md"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <Link
            to="/checkout"
            className={
              !state.cartdata.length ? "pointer-events-none select-none" : ""
            }
          >
            <button
              className={`bg-blue-700 px-3 py-1 text-white ${
                !state.cartdata.length ? "bg-blue-300" : ""
              }`}
            >
              ADD TO CART
            </button>
          </Link>
        </section>
      </header>

      {/************  product section *******************/}
      <section className="Product">
        <ul className="grid grid-cols-8 bg-stone-100 font-bold text-stone-700 border-b  border-stone-300 rounded-t">
          <li>Image</li>
          <li className="col-span-2">Name</li>
          <li>Color</li>
          <li>Size</li>
          <li>Stock</li>
          <li>Price</li>
          <li>Buy</li>
        </ul>
        {product.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}

export default Main;
