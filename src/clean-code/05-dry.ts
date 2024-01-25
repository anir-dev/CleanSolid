

type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = '',
    ) { }

    isProductReady(): boolean {

        // for (const key in this) {
        //     switch (typeof this[key]) {
        //         case 'string':
        //             if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
        //             break;
        //         case 'number':
        //             if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
        //             break;
        //         default:
        //             throw Error(`${typeof this[key]} is not valid`);
        //     }
        // }

        for (const key in this) {
            if (String(this[key]).length === 0 || Number(this[key]) <= 0) throw Error(`${key} is empty or zero`);
        }

        return true;
    }


    toString() {

        if (!this.isProductReady()) return;

        return `${Object.entries(this).map(property => `${property[0]}:${property[1]}`)}`
    }
}

(() => {
    const bluePants = new Product('Blue pants', 1, 'L');
    console.log(bluePants.toString());
})();