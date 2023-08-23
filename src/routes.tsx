import { createRoutesFromElements, Route } from "react-router-dom";
import { Top } from "@/pages/top/top";

export const routes = createRoutesFromElements(
  <>
    <Route path={''} element={<Top/>}/>
  </>
)
