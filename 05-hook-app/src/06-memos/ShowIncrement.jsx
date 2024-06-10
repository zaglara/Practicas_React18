import { memo } from "react";

export const ShowIncrement = memo(({increment}) => {

    console.log('Me volví a generar :c');

  return (
    <button
        className="btn btn-info"
        onClick={() => {
            increment(2);
        }}
    >
        Increment
    </button>
  )
})
