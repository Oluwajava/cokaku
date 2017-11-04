export interface CrudOperations {
    create(data: any, callback?: (callback: any) => void): void;
    update(id: string, data: any, callback?: (callback: any) => void): void;
    query(callback?: (callback: any) => void): void;
    delete(id: number, callback?: (callback: any) => void): void;
    find(id: number, callback?: (callback: any) => void): void;
}