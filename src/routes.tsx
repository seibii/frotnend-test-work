import { createRoutesFromElements, Route } from 'react-router-dom';
import { Top } from '@/pages/top/top';
import { Signup } from '@/pages/signup/signup';

export const routes = createRoutesFromElements(
  <>
    <Route path={''} element={<Top />} />
    <Route path={'signup'} element={<Signup />} />
  </>
);
