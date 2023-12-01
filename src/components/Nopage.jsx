import React, { Suspense } from "react";
import Loader from "./Loader";

function Nopage() {
  return (
    <Suspense fallback={<Loader />}>
      <div>Nopage</div>
    </Suspense>
  );
}

export default Nopage;
