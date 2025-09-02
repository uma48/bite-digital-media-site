export default function Card({ children, className = '' }) {
  return <div className={"bg-white rounded-2xl shadow p-6 " + className}>{children}</div>;
}


// export default function Card({ children, className = "" }) {
//   return (
//     <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
//       {children}
//     </div>
//   );
// }
