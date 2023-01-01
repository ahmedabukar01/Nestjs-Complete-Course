import { Controller, Get, Post, Body, Param, NotFoundException} from '@nestjs/common';
import { CreateMessageDto } from './dtos/createMessageDtos';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messageService: MessageService;
    constructor(msServices: MessageService){
        this.messageService = msServices;
    }
    @Get()
    listMessages(){
        return this.messageService.findAll()
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto){
       return this.messageService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string){
        const message = await this.messageService.findOne(id);
        if(!message){
            return new NotFoundException('message not found')
        }

        return message;
    }
}
