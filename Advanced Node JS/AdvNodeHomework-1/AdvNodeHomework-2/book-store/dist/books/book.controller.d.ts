import { BookService } from './book.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BookService);
    getAllBooks(author: string, minPrice: number): Promise<import("./interfaces/book.interface").Book[]>;
    getBookById(bookId: string): Promise<import("./interfaces/book.interface").Book>;
    createBook(createData: CreateBookDto): Promise<import("./interfaces/book.interface").Book>;
    updateBook(id: string, updateData: UpdateBookDto): Promise<void>;
    deleteBook(id: string): Promise<void>;
}
