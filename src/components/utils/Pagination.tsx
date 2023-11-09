//@ts-nocheck
import React from "react";

export default function Pagination({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlerNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlerPrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <>
      <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary ">
        {page <= 1 ? null : 
          <button onClick={handlerPrevPage} className="transition-all hover:text-color-accent text-xl">Prev</button>
        }
        <p className="text-xl">
          {page} of {lastPage}
        </p>
        {page >= lastPage ? null :
        <button onClick={handlerNextPage} className="transition-all hover:text-color-accent text-xl">Next</button>
        }
      </div>
    </>
  );
}
