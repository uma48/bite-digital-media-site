export default function Button({ children, className = '', ...props }) {
  return (
    <button {...props} className={"px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 " + className}>
      {children}
    </button>
  )
}


// export default function Button({ children, variant = "solid", className = "", ...props }) {
//   const base = "inline-block font-medium transition px-4 py-2 rounded-lg";

//   const styles = {
//     solid: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
//   };

//   return (
//     <button className={`${base} ${styles[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// }
