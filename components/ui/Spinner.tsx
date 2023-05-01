const Spinner = ({ ...props }) => {
  return (
    <div
      {...props}
      className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent rounded-full dark:text-white"
      role="status"
      aria-label="loading"
    ></div>
  );
};

export default Spinner;
