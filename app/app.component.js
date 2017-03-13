System.register(['angular2/core', 'angular2/common', './article', './article.component', './article.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, article_1, article_component_1, article_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_articleService, fb) {
                    this._articleService = _articleService;
                    this.title = new common_1.Control("", common_1.Validators.required);
                    this.link = new common_1.Control("", common_1.Validators.required);
                    this.description = new common_1.Control("", common_1.Validators.required);
                    this.image = new common_1.Control("", common_1.Validators.required);
                    this.articleForm = fb.group({
                        'title': this.title,
                        'link': this.link,
                        'description': this.description,
                        'image': this.image
                    });
                }
                AppComponent.prototype.getArticles = function () {
                    this.articles = this._articleService.getArticle();
                    //this._articleService.getArticle().then(articles => this.articles = articles);// - do Promise
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getArticles();
                };
                AppComponent.prototype.onSubmit = function () {
                    this.articles.push(new article_1.Article(this.title.value, this.link.value, this.description.value, this.image.value));
                    this.title.updateValue("");
                    this.link.updateValue("");
                    this.description.updateValue("");
                    this.image.updateValue("");
                };
                AppComponent.prototype.onSelect = function (article, event) {
                    event.preventDefault(); //blouje przekierowanie  po kliknięciu na odnośnik
                    this.selectedArticle = article;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'articles',
                        directives: [article_component_1.ArticleComponent, common_1.FORM_DIRECTIVES, common_1.NgClass],
                        providers: [article_service_1.ArticleService],
                        templateUrl: 'app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [article_service_1.ArticleService, common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map