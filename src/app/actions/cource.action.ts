import { Action } from "@ngrx/store";
import { CourseItem } from "../models/courseItem"

//Action is a class

//Type of actions we have now.
//Action are represented in an enum.
export enum CourseActionType {
    ADD_ITEM = '[COURSE] Add Course',
    REMOVE_ITEM = '[COURSE] Remove Course'
}

//Action for adding a new item, we will create an object of this action(class) for adding a new user.
export class AddItemAction implements Action {
    type: string = CourseActionType.ADD_ITEM;
    constructor(public payload: CourseItem) { } //Payload is item data to be added.
}

export class RemoveItemAction implements Action {
    type: string = CourseActionType.REMOVE_ITEM;
    constructor(public payload: number) { } //Payload is the index numuber of item to be removed.
}

export type CourseAction = AddItemAction;