import {
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/outline";

const Swapper = () => {
  return (
    <section
      className=" grid place-items-center h-screen lg:grid-cols-3 gap-5 py-10 px-2  
    "
    >
      <div className="h-full  border w-full   p-2">first section</div>
      <div className="flex flex-col lg:flex-row gap-4">
        <button
          className="h-7 w-7 rounded-full p-1 border hover:ring-1 hover:rotate-[90deg] lg:hover:rotate-0 transition-all duration-150 ease-linear"
          title="add to done"
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
      <div className="h-full border w-full   p-2">last section</div>
    </section>
  );
};

export default Swapper;
