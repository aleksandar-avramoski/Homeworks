export interface Book {
    id: string;
    title: string;
    author: string;
    price: number;
    stock: number;
}
export interface BookFilters {
    minPrice?: number | null;
    author?: string;
}
