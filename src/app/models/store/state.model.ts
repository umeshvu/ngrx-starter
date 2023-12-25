import {CourseItem} from "../courseItem"

//Represnting the global state.
export interface State {
    readonly courses: Array<CourseItem>; // Array of CourceItem is needed in multiple components of our application.
  }