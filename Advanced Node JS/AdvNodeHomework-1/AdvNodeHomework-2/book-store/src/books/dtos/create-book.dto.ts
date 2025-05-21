import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateBookDto {
    @IsString()
    @Length(5, 40)
    title: string;

    @IsString()
    @Length(5, 30)
    author: string;

    @IsNumber()
    @Min(5)
    price: number;

    @IsNumber()
    @Min(0)
    stock: number;
}
