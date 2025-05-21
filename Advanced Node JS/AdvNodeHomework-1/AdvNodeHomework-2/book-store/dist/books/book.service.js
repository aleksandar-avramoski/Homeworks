"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const uuid_1 = require("uuid");
let BookService = class BookService {
    BOOKS_PATH = (0, node_path_1.join)(process.cwd(), 'src', 'books', 'data', 'books.json');
    async getAllBooks(filters) {
        const booksJSON = await (0, promises_1.readFile)(this.BOOKS_PATH, 'utf-8');
        let books = JSON.parse(booksJSON);
        if (filters?.author) {
            books = books.filter((book) => book.author
                .toLowerCase()
                .includes(filters.author?.toLowerCase()));
        }
        if (filters?.minPrice) {
            books = books.filter((book) => book.price >= filters?.minPrice);
        }
        return books;
    }
    async getBookById(id) {
        const books = await this.getAllBooks();
        const foundBook = books.find((book) => book.id === id);
        if (!foundBook)
            throw new common_1.NotFoundException('Book not found');
        return foundBook;
    }
    async saveBooks(books) {
        await (0, promises_1.writeFile)(this.BOOKS_PATH, JSON.stringify(books, null, 2), "utf-8");
    }
    async createBook(bookData) {
        const books = await this.getAllBooks();
        const newBook = {
            ...bookData,
            id: (0, uuid_1.v4)()
        };
        books.push(newBook);
        await this.saveBooks(books);
        return newBook;
    }
    async updateBook(bookId, updateData) {
        const books = await this.getAllBooks();
        const bookExists = books.some((book) => book.id === bookId);
        if (!bookExists)
            throw new common_1.NotFoundException("Book not found");
        const updatedBooks = books.map((book) => book.id === bookId ? { ...book, ...updateData } : book);
        await this.saveBooks(updatedBooks);
    }
    async deleteBook(id) {
        const books = await this.getAllBooks();
        const updatedBooks = books.filter((book) => book.id !== id);
        if (books.length === updatedBooks.length)
            throw new common_1.NotFoundException("Book not found");
        await this.saveBooks(updatedBooks);
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
//# sourceMappingURL=book.service.js.map