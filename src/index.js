class Sorter {
    constructor() {
        this.mass = [];
        this.a =function (a,b) {
            return a-b;
        };

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
        res_mass.sort(this.a);

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
        {
            if (compareFunction)
                return this.a = compareFunction;
            else
                return this.a;


        }



}
}module.exports = Sorter;
