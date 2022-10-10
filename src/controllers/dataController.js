import rainbow from '../images/smoothies/rainbow-road.jpg'
import majesty from '../images/smoothies/majesty.jpg'
import amazon from '../images/smoothies/amazon.jpg'
import berryblast from '../images/smoothies/berry-blast.jpg'
import admiral from '../images/smoothies/admiral.jpg'
import ninthring from '../images/smoothies/ninth-ring.webp'

import bites from '../images/bites/quesadilla.jpg';
import seas from '../images/bites/seas.jpeg';
import tartarus from '../images/bites/tartarus.jpg';
import octopus from '../images/bites/octopus.jpeg';

const dataController = function() {
    this._data = [];

    this._updateData = () => {
        this._data = [
            { title: 'Rainbow Road', price: 10, img: rainbow, menuType: 'smoothies', description: 'A delicious treat made with strawberry, mango, banana, kiwi and dragon fruit. Enjoy all the flavors of the rainbow!' },
            { title: 'Her Majesty\'s Royal Service', price: 12, img: majesty, menuType: 'smoothies', description: 'A sweet tropical blend fit for royalty—pineapple, passion fruit, strawberry and kiwi.' },
            { title: 'Amazon Rain Forest', price: 9, img: amazon, menuType: 'smoothies', description: 'Refresh yourself with a drink as exotic as the Amazon. Avocado, apple and spinach.' },
            
            { title: 'Quesadilla Quartet', price: 12, img: bites, menuType: 'bites', description: 'A resounding ensemble of spices, cheese, chicken and tortilla-crunching enjoyment. This mariachi band is playing your song all night!' },
            
            { title: 'The Admiral', price: 11, img: admiral, menuType: 'smoothies', description: 'Your favorite blend of papaya, lemon juice and coconut, chilled and made to order. Attention!' },
            { title: 'Berry Bonanza', price: 13, img: berryblast, menuType: 'smoothies', description: 'A treasure trove of flavor. Set sail to an island filled with mixed berry, oatmeal and yogurt.' },
            { title: 'The Ninth Ring', price: 12, img: ninthring, menuType: 'smoothies', description: 'Make sure to bring your appetite to make it to the bottom of this peanut butter, chocolatey delight. Eight rings and counting.' },
            
            { title: 'Korean Spicy Octopus', price: 29, img: octopus, menuType: 'bites', description: 'Our produce is freshly delivered from local markets and prepared to order. Limited availability while supplies last. Don’t miss your shot at this winning combination. Are you game?' },
            { title: 'Mt. Tartarus', price: 14, img: tartarus, menuType: 'bites', description: 'The deeper you go, the higher we rise. Bottomless tater-tots dish. First to the top is on us!' },
            { title: 'Admiral of the Seas', price: 38, img: seas, menuType: 'bites', description: 'This may be your first voyage, but it won’t be your last! Assemble a crew daring enough to brave this seaside platter. All hands on deck!' },
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
        'Mt. Tartarus',
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