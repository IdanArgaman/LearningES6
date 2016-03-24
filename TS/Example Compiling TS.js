var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.say = function () {
        alert(this.name);
    };
    Dog.prototype.sleep = function () {
    };
    return Dog;
}());
