import { MessageRepository } from "./messages.repository"
export class MessageService {
    messagesRepo: MessageRepository;
    
    constructor(){
        // the service is creating it's own dependence
        // NEVER DO THIS IN REAL PROJECT !.
        this.messagesRepo = new MessageRepository
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