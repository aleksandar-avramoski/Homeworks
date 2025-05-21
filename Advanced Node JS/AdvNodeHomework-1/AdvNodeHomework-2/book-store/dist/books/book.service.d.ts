import { Book, BookFilters } from "./interfaces/book.interface";
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from "./dtos/update-book.dto";
export declare class BookService {
    private BOOKS_PATH;
    getAllBooks(filters?: BookFilters): Promise<Book[]>;
    getBookById(id: string): Promise<Book>;
    saveBooks(books: Book[]): Promise<void>;
    createBook(bookData: CreateBookDto): Promise<Book>;
    updateBook(bookId: string, updateData: UpdateBookDto): Promise<void>;
    deleteBook(id: string): Promise<void>;
}
