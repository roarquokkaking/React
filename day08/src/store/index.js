import { combineReducers } from "redux";
import color from './modules/color';
import count from './modules/count';
import animal from "./modules/animal";

export default combineReducers({
    color : color,
    count,
    animal
})