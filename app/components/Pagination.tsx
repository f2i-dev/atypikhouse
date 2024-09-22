// import Link from 'next/link';

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
// }

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
//   return (
//     <div className="flex justify-center mt-8">
//       {currentPage > 1 && (
//         <Link href={`/?page=${currentPage - 1}`} className="px-4 py-2 mx-1 bg-white border rounded">
//           Précedent
//         </Link>
//       )}
//       {currentPage < totalPages && (
//         <Link href={`/?page=${currentPage + 1}`} className="px-4 py-2 mx-1 bg-white border rounded">
//           Suivant
//         </Link>
//       )}
//     </div>
//   );
// };

// export default Pagination;

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center mt-8 ">
      {currentPage > 1 && (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="px-4 py-2 mx-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
        >
          Previous
        </Link>
      )}
      <span className="px-4 py-2 mx-1 bg-green-100 text-green-800 rounded-full">
        Page {currentPage} sur {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="px-4 py-2 mx-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
