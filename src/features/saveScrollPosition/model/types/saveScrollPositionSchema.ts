// <Page adress, scroll position>
export type ScrollShema = Record<string, number>

export interface SaveScrollPositionSchema {
    scroll: ScrollShema;
}
