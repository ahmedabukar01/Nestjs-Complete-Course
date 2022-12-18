import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { CreateMessageDto } from './dtos/createMessageDtos';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){

    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
        console.log('working')
        console.log(body)
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        console.log('working')
        console.log(id);
    }
}
