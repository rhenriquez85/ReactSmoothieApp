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
            { title: 'Rainbow Road', price: 10, img: rainbow, menuType: 'smoothies', description: 'A delicious treat made with strawberry, mango, banana, kiwi and dragon fruit. Enjoy all the flavors of the rainbow!' },
            { title: 'Her Majesty\'s Royal Service', price: 12, img: majesty, menuType: 'smoothies', description: 'A sweet tropical blend fit for royalty—pineapple, passion fruit, strawberry and kiwi.' },
            { title: 'Amazon Rain Forest', price: 9, img: amazon, menuType: 'smoothies', description: 'Refresh yourself with a drink as exotic as the Amazon. Avocado, apple and spinach.' },
            { title: 'Quesadilla Quartet', price: 12, img: bites, menuType: 'bites', description: '' },
            { title: 'The Admiral', price: 11, img: admiral, menuType: 'smoothies', description: 'Your favorite blend of papaya, lemon juice and coconut, chilled and made to order. Attention!' },
            { title: 'Berry Bonanza', price: 13, img: berryblast, menuType: 'smoothies', description: 'A treasure trove of flavor. Set sail to an island filled with mixed berry, oatmeal and yogurt.' },
            { title: 'The Ninth Ring', price: 12, img: ninthring, menuType: 'smoothies', description: 'You must bring your appetite to make it to the bottom of this peanut butter/chocolatey delight. Eight ring’s and counting.' },
        ];
    }

    this._menuTypes = [
        'smoothies',
        'bites',
    ];

    this._favorites = [
        'Rainbow Road',
        'Quesadilla Quartet',
        'The Admiral',
    ];

    this._data.length || this._updateData();

    this.getData = (menuType) => {
        return !menuType ? this._data : this._data.filter((item) => item.menuType === menuType.toLowerCase());
    };

    this.isMenuType = (menuType) => {
        return this._menuTypes.includes(menuType.toLowerCase());
    };

    this.getFavorites = () => {
        return this._data.filter((item) => this._favorites.includes(item.title));
    };

    console.log('datadata datadata datadata');
};

export default new dataController();