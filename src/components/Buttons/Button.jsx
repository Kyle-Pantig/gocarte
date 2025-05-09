const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={"bg-black text-white rounded-md " + className}
    >
      {children}
    </button>
  );
};

export default Button;
