import rainbow from '../images/smoothies/rainbow-road.jpg'
import majesty from '../images/smoothies/majesty.jpg'
import amazon from '../images/smoothies/amazon.jpg'
import berryblast from '../images/smoothies/berry-blast.jpg'
import admiral from '../images/smoothies/admiral.jpg'
import ninthring from '../images/smoothies/ninth-ring.webp'

import bites from '../images/bites/quesadilla.jpg';

const dataController = function() {
    this._data = [];

    this._updateData = () => {
        this._data = [
            { title: 'Rainbow Road', price: 10, img: rainbow, menuType: 'smoothie', description: 'A delicious treat made with strawberry, mango, banana, kiwi and dragon fruit. Enjoy all the flavors of the rainbow!' },
            { title: 'Her Majesty\'s Royal Service', price: 12, img: majesty, menuType: 'smoothie', description: 'A sweet tropical blend fit for royalty—pineapple, passion fruit, strawberry and kiwi.' },
            { title: 'Amazon Rain Forest', price: 9, img: amazon, menuType: 'smoothie', description: 'Refresh yourself with a drink as exotic as the Amazon. Avocado, apple and spinach.' },
            { title: 'The Admiral', price: 11, img: admiral, menuType: 'smoothie', description: 'Your favorite blend of papaya, lemon juice and coconut, chilled and made to order. Attention!' },
            { title: 'Berry Bonanza', price: 13, img: berryblast, menuType: 'smoothie', description: 'A treasure trove of flavor. Set sail to an island filled with mixed berry, oatmeal and yogurt.' },
            { title: 'The Ninth Ring', price: 12, img: ninthring, menuType: 'smoothie', description: 'You must bring your appetite to make it to the bottom of this peanut butter/chocolatey delight. Eight ring’s and counting.' },
            { title: 'Quesadilla Quartet', price: 12, img: bites, menuType: 'bite', description: '' },
        ];
    }

    console.log('datadata datadata datadata');

    this.getData = () => {
        this._updateData();
        return this._data;
    };
};

export default new dataController();