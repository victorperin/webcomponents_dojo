'use strict'; //strict mode (aprenda aqui: http://www.w3schools.com/js/js_strict.asp )

class AvatarImage extends HTMLImageElement { //ES6 classes (Orientação a objetos!!!) (Funciona apenas no chrome por enquanto)
  //cria uma classe extendida de HTMLImageElement
    createdCallback() {
        var self = this,
            nome = this.getAttribute('nome'); //procura pelo atributo nome no custom element

        if (!nome){throw new Error('Username attribute is required.');}
        else {
          var url = 'avatar/' + encodeURI(nome) + ".jpg";
          var shadow = this.createShadowRoot();
          var image = shadow.appendChild(document.createElement('img'));
          image.setAttribute('src', url);
        }
    }
}

var Mytag = document.registerElement('avatar-image', {
    prototype: AvatarImage.prototype,
});
