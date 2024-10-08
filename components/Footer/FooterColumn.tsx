// // components/FooterColumn.tsx
// //Each column of the footer (like Popular, Support, etc.) is a reusable component that you can use across different sections of the footer.
// type FooterColumnProps = {
//     title: string;
//     items: string[];
//   };
  
// const FooterColumn = ({ title, items }: FooterColumnProps) => {
//   return (
//     <div>
//       <h3 className="font-semibold text-gray-800 mb-4">{title}</h3>
//       <ul className="space-y-2 text-sm text-gray-600">
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
  
// export default FooterColumn;
// components/FooterColumn.tsx

type FooterColumnProps = {
    title: string;
    items?: string[];
    description?: string;
  };
  
const FooterColumn = ({ title, items, description }: FooterColumnProps) => {
  return (
    <div>
      {description ? (
        <>
          <h3 className="font-semibold text-my-cocoa-600">{title}</h3>
          <p className="text-my-cocoa-100">{description}</p>
        </>
      ) : (
        <>
          <h3 className="font-semibold text-my-cocoa-600 mb-4">{title}</h3>
          <ul className="space-y-2 text-sm text-my-cocoa-100">
            {items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
  
export { FooterColumn };
  