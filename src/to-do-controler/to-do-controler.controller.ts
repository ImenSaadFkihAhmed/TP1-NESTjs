import { Controller, Delete, Get, NotFoundException, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ToDoEnum } from 'src/models/enum';
import { ToDoModel } from 'src/models/ToDoModel';
//const uuidv4 = require("uuid/v4")


@Controller('to-do-controler')
export class ToDoControlerController {
    modelLists:ToDoModel[];

    @Get('liste')
    Get():ToDoModel[]{
        return this.modelLists;
    }
    @Get('ToDo/:id')
    recupererToDo(id:number):ToDoModel {
        model:ToDoModel;
        return(this.modelLists.find(model => model.id == id))
    }

    @Post('ajouter/:description')
    Ajouter(description:string):void{
        const ToDo = new ToDoModel();
       // ToDo.id = uuidv4();
       ToDo.id = 5;
        ToDo.date_creation = new Date()
        ToDo.statut = ToDoEnum.waiting
        ToDo.description = description;
        this.modelLists.push(ToDo)
    }

    @Post('modifier/:ToDo')
    
    modifierToDo(ToDo:ToDoModel){
        const id = ToDo.id;
        const index = this.modelLists.indexOf( this.modelLists.find(ToDo => ToDo.id == id))
        if(index)
        this.modelLists[index] = this.modelLists.find(ToDo => ToDo.id == id);
        else throw NotFoundException
    }

    
    @Delete('supprimer/:id')
    supprimerToDo(id:number):void {
        const index = this.modelLists.indexOf( this.modelLists.find(ToDo => ToDo.id == id))
        if(index) delete this.modelLists[index];
        else throw NotFoundException;
    }

}
