import { Module } from "@nestjs/common";
import { PremierController } from "src/premier/premier.controller";


@Module({
    imports: [],
    exports: [],
    controllers:[PremierController],
    providers: [],

})
export class testPremier{

}