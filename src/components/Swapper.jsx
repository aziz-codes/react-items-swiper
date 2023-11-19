import {
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/outline";
import { items } from "../data/list";
import { useState } from "react";
const Swapper = () => {
  const [data, setData] = useState(items);

  const [contentCheck, setContentCheck] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  // this will handle on checkbox change functionality

  const handleChange = (event, index) => {
    // const newData = data.filter((item) => item.title === list);
    // const selectedItem = [...item, newData];
    if (event.target.checked) {
      const newItems = [...data];
      newItems[index].done = true;

      setData(newItems);
    } else {
      newItems[index].done = false;
      setData(newItems);
    }
  };
  const handleDone = () => {
    const copyItme = [...data];
    let doneItems = copyItme.filter((item) => item.done === true);
    setSelectedItems(...selectedItems, doneItems);
    let movedItems = data.filter((item) => item.done === false);
    setData(movedItems);
  };

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
              onChange={(e) => handleChange(e, index)}
              checked={item.done}
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
          disabled={contentCheck}
          onClick={handleDone}
        >
          {<ArrowSmallRightIcon className="hover:text-sky-500" />}
        </button>
        <button
          className="h-7 w-7 rounded-full p-1 border hover:ring-1 hover:rotate-[90deg] lg:hover:rotate-0 transition-all duration-150 ease-linear"
          title="revert"
          disabled={contentCheck}
        >
          {<ArrowSmallLeftIcon className="hover:text-sky-500" />}
        </button>
      </div>
      <div className="h-full  border w-full flex flex-col gap-6 px-2 py-5 max-h-full overflow-y-scroll">
        {selectedItems.length > 0 ? (
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
                className=" text-sm text-gray-400 leading-3 cursor-pointer"
              >
                {item.title}
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
