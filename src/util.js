const Util = {
    inherits(childClass, parentClass) {
        childClass.prototype = Object.create(parentClass.prototype);
        childClass.prototype.constructor = childClass;
    },
    randomVec(length) {
        const deg = -1 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

     // Find distance between two points.
    dist(pos1, pos2) {
        return Math.sqrt(
            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    },
};



module.exports = Util;