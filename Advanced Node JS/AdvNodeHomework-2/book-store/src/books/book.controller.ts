import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { BookFilters } from './interfaces/book.interface';
import { UpdateBookDto } from './dtos/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(
        private booksService: BookService
    ) {}

    @HttpCode(202)
    @Get()
    getAllBooks(
        @Query('author') author: string,
        @Query('minPrice') minPrice: number
    ) {
        const booksFilter: BookFilters = {
          author,
          minPrice: !Number.isNaN(Number(minPrice)) ? Number(minPrice) : null
        };

        return this.booksService.getAllBooks(booksFilter);
    }

    @HttpCode(202)
    @Get(':id')
    getBookById(@Param('id') bookId: string) {
      return this.booksService.getBookById(bookId);
    } 

    @HttpCode(201)
    @Post()
    createBook(@Body() createData: CreateBookDto) {
      return this.booksService.createBook(createData);
    }

    @HttpCode(204)
    @Patch(':id')
    updateBook(@Param('id') id: string, @Body() updateData: UpdateBookDto) {
      return this.booksService.updateBook(id, updateData);
    }

    @HttpCode(204)
    @Delete(':id')
    deleteBook(@Param('id') id: string) {
      return this.booksService.deleteBook(id);
    }
}