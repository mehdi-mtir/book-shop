export class Book {
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get cover(): string {
        return this._cover;
    }
    public set cover(value: string) {
        this._cover = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }
    public get publishDate(): Date {
        return this._publishDate;
    }
    public set publishDate(value: Date) {
        this._publishDate = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    constructor(
        private _id: number,
        private _cover: string,
        private _title: string,
        private _author: string,
        private _publishDate: Date,
        private _price: number
    ){}
}
