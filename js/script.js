var a = 'yolo'
console.log(this, 'wassup');
function w(){
    var b = 'sup';
    console.log(this, 'wassup inside function');
}
w();
