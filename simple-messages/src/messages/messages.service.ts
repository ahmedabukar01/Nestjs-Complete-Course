import { MessageRepository } from "./messages.repository"
import { Injectable } from "@nestjs/common"

@Injectable()
export class MessageService {
    
    constructor(public messagesRepo: MessageRepository){
       
    }

    findAll(){
        return this.messagesRepo.findAll()
    }
    findOne(id: string){
        return this.messagesRepo.findOne(id)
    }
    create(content: string){
        return this.messagesRepo.create(content)
    }

}