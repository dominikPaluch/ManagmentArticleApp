import {Component} from 'angular2/core'
import {NgFor, FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control, NgClass} from 'angular2/common'
import {Article} from './article'
import {ArticleComponent} from './article.component'
import {ArticleService} from './article.service'
import {OnInit} from 'angular2/core'

@Component({
    selector: 'articles',
    directives: [ArticleComponent, FORM_DIRECTIVES, NgClass],
    providers: [ArticleService],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
        

    articles : Article[];
    articleForm: ControlGroup;

    selectedArticle: Article;

    title: Control = new Control("", Validators.required);
    link: Control = new Control("", Validators.required);
    description: Control = new Control("", Validators.required);
    image: Control = new Control("", Validators.required);

    constructor(private _articleService: ArticleService, fb : FormBuilder){
        this.articleForm = fb.group({
            'title': this.title,
            'link': this.link,
            'description': this.description,
            'image': this.image
        });
    }

    getArticles(){
        this.articles = this._articleService.getArticle();
        //this._articleService.getArticle().then(articles => this.articles = articles);// - do Promise
    }

    ngOnInit() {
           this.getArticles();
        }

    onSubmit(){
        this.articles.push(new Article(this.title.value, this.link.value, this.description.value, this.image.value));

        this.title.updateValue("");
        this.link.updateValue("");
        this.description.updateValue("");
        this.image.updateValue("");
    }

    onSelect(article: Article, event){
        event.preventDefault(); //blouje przekierowanie  po kliknięciu na odnośnik
       this.selectedArticle = article;
       
    }

}
