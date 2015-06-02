function extend(Child, Parent) {
    var F = function() { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function merge(obj1, obj2){
    var obj3 = {};
    for (var attrName1 in obj1) { obj3[attrName1] = obj1[attrName1]; }
    for (var attrName2 in obj2) { obj3[attrName2] = obj2[attrName2]; }
    return obj3;
}

module.exports = {
    extend: extend,
    merge: merge
};