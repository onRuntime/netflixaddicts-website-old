export interface Sheet {
    id: number;
    name: string;
    title: string;
    image: string;
    note: number;
    styles: [];
    synopsis: string;
    created_at?: Date;
    updated_at?: Date;
}