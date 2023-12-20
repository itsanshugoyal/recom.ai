import React, { Suspense } from "react";
import { Loader } from "../components";

function Nopage() {
  return (
    <Suspense fallback={<Loader />}>
      <div>Nopage</div>
    </Suspense>
  );
}

export default Nopage;
