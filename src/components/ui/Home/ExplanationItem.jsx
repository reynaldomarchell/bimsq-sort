function ServiceItem({ title, description, step, complexity }) {
  return (
    <div
      className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 
      hover:-translate-y-2 transform transition rounded-md p-5 flex flex-col items-start"
    >
      <h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">
        {title}
      </h1>
      <p className="text-md text-gray-600 dark:text-gray-300 text-justify whitespace-pre-wrap">
        {description}
      </p>
      <h2 className="font-semibold text-base text-gray-600 dark:text-gray-200 mb-1 mt-2">
        Step
      </h2>
      <p className="text-md text-gray-600 dark:text-gray-300 text-justify whitespace-pre-wrap">
        {step}
      </p>
      <h2 className="font-semibold text-base text-gray-600 dark:text-gray-200 mb-1 mt-2">
        Complexity
      </h2>
      <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
        {complexity.map((item) => (
          <span
            key={item}
            className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md text-md text-gray-600 dark:text-gray-300"
          >
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}

export default ServiceItem;
