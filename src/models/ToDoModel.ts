import { ToDoEnum } from "./enum";

export class ToDoModel{
    id:number;
    name:string;
    description:string;
    date_creation:Date;
    statut:ToDoEnum;

}