var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function(){
    var that = this;

    var img = document.createElement('img');
    img.src = 't-rex.png';
    img.width = 80;
    img.height = 100;

    that.name = that.getAttribute('name');

    that.style.position = 'relative';
    that.style.left = 0;
    that.style.display = 'block';

    that.speed = 10 + Math.random() * 10;

    document.addEventListener('keydown', function(e){
        if(e.keyCode == 39) {
            that.style.left = parseInt(that.style.left) + that.speed + 'px';
            that.isWin();
        } else if(e.keyCode == 37) {
            that.style.left = parseInt(that.style.left) - that.speed + 'px';
        }
    })

    that.isWin = function(){
        if(parseInt(that.style.left) > window.innerWidth) {
            alert( that.name + ' win!')
        }
    }

    that.appendChild(img);
}


document.registerElement('dino-saur', {
    prototype: proto
})
