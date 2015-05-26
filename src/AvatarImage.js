'use strict'; //strict mode (aprenda aqui: http://www.w3schools.com/js/js_strict.asp )

class AvatarImage extends HTMLImageElement { //ES6 classes (Orientação a objetos!!!) (Funciona apenas no chrome por enquanto)
  //cria uma classe extendida de HTMLImageElement
    createdCallback() {
        var self = this,
            nome = this.getAttribute('nome'); //procura pelo atributo nome no custom element

        if (!nome){throw new Error('Username attribute is required.');}
        else {
          var url = 'avatar/' + encodeURI(nome) + ".jpg";
          var shadow = this.createShadowRoot(); //cria uma shadow DOM, aprenda mais: http://loopinfinito.com.br/2012/07/17/sou-dom-shadow-dom/
          var image = shadow.appendChild(document.createElement('img')); //cria um elemento img dentro da shadow DOM
          image.setAttribute('src', url); //define a source da imagem no ShadowDOM
        }
    }
}

var Mytag = document.registerElement('avatar-image', {
    prototype: AvatarImage.prototype,
});
