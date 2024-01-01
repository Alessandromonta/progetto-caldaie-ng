import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

export class BaseCrudService<T> {
    constructor(apiUrl: string, private httpClient: HttpClient) {
        this.apiUrl = 'http://autoclima-001-site1.atempurl.com/api/' + apiUrl;
    }
    protected apiUrl: string;

    public getItems(): Observable<T[]> {
        return this.httpClient.get<T[]>(`${this.apiUrl}`);
    }

    public getItemsFromItemId(itemId: number): Observable<T[]> {
        return this.httpClient.get<T[]>(`${this.apiUrl}/${itemId}`);
    }

    public addItem(newItem: T): Observable<T> {
        return this.httpClient.post<T>(`${this.apiUrl}`, newItem);
    }

    public deleteItem(itemId: number): Observable<string> {
        return this.httpClient.delete(
            `${this.apiUrl}/${itemId}`,
            { responseType: 'text' }
        );
    }

    public updateItem(itemId: number, updateItem: T): Observable<T> {
        return this.httpClient.put<T>(`${this.apiUrl}/${itemId}`, updateItem);
    }
}
