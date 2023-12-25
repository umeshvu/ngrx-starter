import { CourseItem } from '../models/courseItem';
import { CourseAction, CourseActionType } from '../actions/cource.action';

//create a dummy initial state
const initialState: Array<CourseItem> = [
  {
    id: '1',
    department: 'Computer Engineering',
    name: 'C++ Programming',
  },
];
export function courseReducer(
  state: Array<CourseItem> = initialState,
  action: CourseAction
) {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}