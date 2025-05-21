import { IsNumber, IsString, Length, Min, IsOptional } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @Length(5, 40)
  title: string;

  @IsOptional()
  @IsString()
  @Length(5, 30)
  author: string;

  @IsOptional()
  @IsNumber()
  @Min(5)
  price: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock: number;
}
