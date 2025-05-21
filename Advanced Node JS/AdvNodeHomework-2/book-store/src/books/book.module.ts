import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BooksController } from "./book.controller";

@Module({
    controllers: [BooksController],
    providers: [BookService]
})

export class BooksModule{}
