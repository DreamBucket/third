export interface Dream {
    id: string;
    name: string;
    x: number;
    y: number;
    place: string;
    memo: string;
    likes: number;
    progress: number;
    stories: string[];
}

export interface DreamForm {
    name: string;
    x: number;
    y: number;
    place: string;
    memo: string;
    progress: number;
    stories: string[];
}
