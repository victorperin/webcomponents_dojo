'use strict';

class AvatarImage extends HTMLImageElement {
    createdCallback() {
        var self = this,
            nome = this.getAttribute('nome');

        if (nome) {var url = 'avatar/' + nome + ".jpg";}
        else {throw new Error('Username attribute is required.');}
        var shadow = this.createShadowRoot();
        var image = shadow.appendChild(document.createElement('img'));
        image.setAttribute('src', url);
    }
}

var Mytag = document.registerElement('avatar-image', {
    prototype: AvatarImage.prototype,
});
