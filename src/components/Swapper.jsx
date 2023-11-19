import {
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/outline";
import { items } from "../data/list";
import { useState } from "react";
const Swapper = () => {
  const [data, setData] = useState(items);
  const [selectedItems, setSelectedItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  // this will handle on checkbox change functionality

  const handleChange = (itemId) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((id) => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };
  const handleDone = () => {
    setData((prevItems) =>
      prevItems.filter((item) => !selectedItems.includes(item.id))
    );

    setCompletedItems((prevCompleted) => [
      ...prevCompleted,
      ...data.filter((item) => selectedItems.includes(item.id)),
    ]);

    setSelectedItems([]);
  };
  console.log(completedItems);
  return (
    <section
      className=" grid place-items-center h-auto lg:h-screen lg:grid-cols-3 gap-5 py-10 px-2 overflow-auto md:overflow-hidden 
    "
    >
      <div className="h-full  border w-full flex flex-col gap-6 px-2 py-5 max-h-full overflow-y-scroll">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex px-2 items-center gap-4 cursor-pointer shadow-md h-20 max-h-20 rounded-md border"
          >
            <input
              type="checkbox"
              id={item.title}
              className="h-4 w-4"
              onChange={(e) => handleChange(item.id)}
              checked={selectedItems.includes(item.id)}
            />
            <label
              htmlFor={item.title}
              className=" text-sm leading-3 cursor-pointer"
            >
              {item.title}
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <button
          className="h-7 w-7 rounded-full p-1 border hover:ring-1 hover:rotate-[90deg] lg:hover:rotate-0 transition-all duration-150 ease-linear"
          title="add to done"
          onClick={handleDone}
        >
          {<ArrowSmallRightIcon className="hover:text-sky-500" />}
        </button>
        <button
          className="h-7 w-7 rounded-full p-1 border hover:ring-1 hover:rotate-[90deg] lg:hover:rotate-0 transition-all duration-150 ease-linear"
          title="revert"
        >
          {<ArrowSmallLeftIcon className="hover:text-sky-500" />}
        </button>
      </div>
      <div className="h-full  border w-full flex flex-col gap-6 px-2 py-5 max-h-full overflow-y-scroll">
        {completedItems.length > 0 ? (
          selectedItems.map((item, i) => (
            <div
              key={i}
              className="flex px-2 items-center gap-4 cursor-pointer shadow-md h-20 max-h-20 rounded-md border"
            >
              <input
                type="checkbox"
                id={item.title}
                className="h-4 w-4"
                // onChange={(e) => handleChange(e, index)}
              />
              <label
                htmlFor={item.title}
                className=" text-sm text-black leading-4 cursor-pointer"
              >
                {item.title}
                <p className="text-xs p-0.5 text-gray-400">{item.date}</p>
              </label>
            </div>
          ))
        ) : (
          <h4 className="text-lg text-gray-400 font-semibold text-center">
            You have'nt done any thing yet...
          </h4>
        )}
      </div>
    </section>
  );
};

export default Swapper;
