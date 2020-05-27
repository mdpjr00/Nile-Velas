var bg = [
            'lib/img/bg_animate/01.jpg',
            'lib/img/bg_animate/02.jpg',
            'lib/img/bg_animate/03.jpg',
            'lib/img/bg_animate/04.jpg',
            'lib/img/bg_animate/05.jpg',
            'lib/img/bg_animate/06.jpg'
        ];

var i = 1;

change = () => {
    document.body.style.backgroundImage = "url('"+bg[i]+"')";
    i = (i + 1) % bg.length;
}
document.body.style.backgroundImage = "url('"+bg[0]+"')";
setInterval(change, 3000);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, "left");
  });