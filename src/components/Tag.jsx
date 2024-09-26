const Tag = ({ name, value }) => {
  return (
    <div className="h-14 bg-tag rounded-xl p-4 flex flex-row w-fit m-1">
      <div className="text-secondary-text text-body border-r border-r-secondary-text px-2">
        {name}
      </div>
      <div className="text-main-text text-body px-2">{value}</div>
    </div>
  );
};

export default Tag;
