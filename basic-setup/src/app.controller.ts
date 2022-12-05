import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get('/a')
    getRootRoute(){
        return 'hello there'
    }

    @Get('/b')
    getBye(){
        return 'Good Night'
    }
}