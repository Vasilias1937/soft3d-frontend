"use strict"

class Article {
    static isArticle = true;
    static countOfArticles = 0;


    constructor(id,title,text,media) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.media = media;
        Article.countOfArticles += 1;
    }

    static getCount() {
        return this.countOfArticles;
    }

    static parseJSON(ourJSON) {
        const articleData = JSON.parse(ourJSON); 
        return new Article(articleData);
    }

    addArticleOnPage() {
        let articleContainer = document.querySelector('.articleCont');
        const card = document.createElement("div")
        card.classList.add("articleCard");
        card.innerHTML = `
            <h2>${this.title}</h2>  
            <p>${this.text}</p>  
            <img src="${this.media}" alt="${this.title}">  
        `
        articleContainer.appendChild(card);
    }

}