// scripts.js


function drawTree(h) {
    for (var i=0; i<=h; i++) {
        var star= '';
        for (var s=h-i; s>=0; s--) {
            star += ' ';
        }
        for (var j=0; j<i; j++) {
            star += '**';
        }
        console.log(star + '*');
    }
        
}
drawTree(5);