class Sorter {
    constructor() {
        this.mass = [];

    }

    add(element) {
        this.mass.push(element);
    }

    at(index) {
        return this.mass[index];
    }

    get length() {
        return this.mass.length;

    }

    toArray() {
        return this.mass;
    }

    sort(indices) {
        let res_mass = [];
        for (let i = 0; i < indices.length; i++) {
            res_mass.push(this.mass[indices[i]]);
        }
        res_mass.sort(function (a, b) {
            return a - b;
        });

        if (indices[0] < indices[1])
            for (let i = 0; i < indices.length; i++) {
                this.mass.splice(indices[i], 1, res_mass[i])
            }
        else
            indices.reverse();
        for (let i = 0; i < indices.length; i++) {
            this.mass.splice(indices[i], 1, res_mass[i])

        }
    }

    setComparator(compareFunction) {


    }
}
module.exports = Sorter;
