import { User } from "entities/User";

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED_AT = "createdAt",
}

export enum ArticleBlockType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title: string;
  paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title?: string;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleCodeBlock
  | ArticleImageBlock;

export enum ArticleType {
  ALL = "ALL",
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONIMICS = "ECONOMICS",
}

export enum ArticleView {
  GRID = "GRID",
  LIST = "LIST",
}

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
