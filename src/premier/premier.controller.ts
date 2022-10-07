import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { get } from 'http';

@Controller('premier')
export class PremierController {
@Get()
logger():string{
    console.log('ceci est une requète get');
    return ("get");
}
@Post()
logger2():string{
    console.log('ceci est une requète post');
    return ("post");
}
@Delete()
logger3():string{
    console.log('ceci est une requète delete');
    return ("delete");
}
@Patch()
logger4():string{
    console.log('ceci est une requète patch');
    return ("patch");
}
@Put()
logger5():string{
    console.log('ceci est une requète put');
    return ("put");
}
}
