function PeopleItem({ name, imgUrl, role, instagram, quotes }) {
  return (
    <a
      href={instagram}
      target="_blank"
      rel="noreferrer"
      className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-100 dark:hover:bg-slate-600 hover:-translate-y-2 transform transition"
    >
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {name}
        </h3>
        <p className="text-sm md:text-base mb-2 md:mb-3">{quotes}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm ">
          <span className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md">
            {role}
          </span>
        </p>
      </div>
    </a>
  );
}

export default PeopleItem;
