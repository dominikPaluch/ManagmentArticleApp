import {ARTICLES} from './article-data';
import {Injectable} from 'angular2/core';

@Injectable()

export class ArticleService {
    getArticle() {
        return ARTICLES;
        //return Promise.resolve(ARTICLES);
    }
}