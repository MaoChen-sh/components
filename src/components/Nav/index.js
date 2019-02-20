import Nav from './Nav';
import Hoc from '../../tools/Hoc';
import type1 from "./types/type1";

export const Type1 = Hoc(type1)(Nav);
export default Nav