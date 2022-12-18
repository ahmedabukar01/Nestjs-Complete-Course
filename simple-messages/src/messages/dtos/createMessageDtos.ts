import { IsString, IsInt } from "class-validator";

export class CreateMessageDto {
    @IsString()
    @IsInt()
    content: string
    text: number
}