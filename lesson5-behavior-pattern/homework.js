/*
Задание №1
Организуйте подсчет факториала с использованием Memento. 
Сделайте замеры скорости выполнения функции впервой и в последующие разы.
*/
/*class Memento {
    constructor() {
        this.history = {};
    }

    factorail(n) {
        if (this.history[n]) return this.history[n];
        if (n === 0) return this.history[n] = 1;
        if (n === 1) return this.history[n] = 1;
        let i = 1, f = 1;
        while (i <= n) {
            f *= i;
            this.history[i++] = f;
        }
        return this.history[n];
    }
}

const memento = new Memento;
console.time('first');
memento.factorail(100);
console.timeEnd('first')

console.time('second');
memento.factorail(100);
console.timeEnd('second')
*/

/*
Задание №2 (*)
Напишите класс, работа методов которого зависит от внутреннего состояния (паттер State). 
Например создайте класс Basket с возможностью добавления товаров.
*/
/*
class Basket {
    constructor() {
        this.goods = [];
        this.state = 'рубль';
    }

    add(good) {
        this.goods.push(good);
    }

    get total() {
        let total = 0;
        for(const good of this.goods) {
            total += good.price;
        } 
        if (this.state === 'рубль') {
            return total + ' руб.';
        }
        if (this.state === 'доллар') {
            return total / 80 + ' $';
        }
    }
}

const basket = new Basket;
basket.state = 'рубль';
// basket.state = 'доллар';
basket.add({
    name: 'milk',
    price: 200
});
basket.add({
    name: 'apple',
    price: 20
});
basket.add({
    name: 'chocolate',
    price: 50
});
basket.add({
    name: 'beer',
    price: 50
});

console.log(basket.total);*/

/*
Задание №3 (*)
Реализуйте Strategy паттерн в объекте с функциями сортировки чисел. 
Так же реализуйте сортировку по длине записи числа.
*/

/*const sort = {
    ASC: (a, b) => a - b,
    DESC: (a, b) => b - a,
    ABSOLUTE_ASC: (a, b) => Math.abs(a) - Math.abs(b),
    ABSOLUTE_DESC: (a, b) => Math.abs(b) - Math.abs(a),
    LENGTH_ASC: (a, b) => String(a).length - String(b).length,
    LENGTH_DESC: (a, b) => String(b).length - String(a).length
}

const nums = [-20, 50, 40, 29, -222, -21, 2, 0, 102, 78, -44, 32, 27, -87, 123];
console.log(nums.sort(sort.LENGTH_ASC));*/

/*
Задание №6 (**)
Реализуйте Iterator для графа. Пример графа:
*/
class Node {
    constructor() {
        this.id = Node.idCounter++;
        this.nodes = [];
    }

    static setConnection(a, b) {
        if (!a.nodes.includes(b)) {
            a.nodes.push(b);
        }

        if (!b.nodes.includes(a)) {
            b.nodes.push(a);
        }
    }
}

Node.idCounter = 1

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(node) {
        if (!this.nodes.includes(node)) {
            this.nodes.push(node);
        }
    }

    getNodeById(id) {
        for (const node of this.nodes) {
            if (node.id === id) {
                return node;
            }
        }
    }
}

class Iterator {
    constructor(graph) {
        this.nodes = graph.nodes;
    }



    findPath(start, finish) {
        for (const node of this.nodes) {
            if (node.id === finish) return node;
            if (node.id === start) {
                let it = new Iterator(node);
                it.findPath(it.nodes[0].id, finish);
            } 
        }
        // console.log(this.nodes[0].nodes[0].nodes[0].nodes[0]);
        // const nodes = 
        // let i = 0;
        // while ()
        // let 
        // for(const [id, node] of this.graph.nodes.entries()) {
        //     handler(node, id)
        // }
    }
}

const graph = new Graph

for (let i = 0; i < 10; i++) {
    graph.addNode(new Node);
}

for (const [id1, id2] of [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [7, 8], [8, 9], [9, 10], [3, 5], [2, 9]]) {
    Node.setConnection(
        graph.getNodeById(id1),
        graph.getNodeById(id2)
    );
}

const iterator = new Iterator(graph);
// console.log(iterator);
console.log(iterator.findPath(4, 1));
// iterator.forEach((node, id) => {
//     console.log(id, node)
// });