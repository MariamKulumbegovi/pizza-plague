import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import product4 from '../../images/cruiser.png';
import hotrod from '../../images/hotrod.png';
import hula from '../../images/hula.png';
import cheesyvegie from '../../images/cheesyvegie.png';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import ChockChip from '../../images/ChocolateChipCookies.png';


export const productData = [
  {
    id:1,
    img: product1,
    type:'pizzas',
    alt: 'Pizza',
    name: 'Supreme Pizza',
    desc:
      'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '19.99',
    button: 'Add to Cart',
    featured:false
  },
  {
    id:2,
    img: product2,
    type:'pizzas',
    alt: 'Pizza',
    name: 'Hawaiian Paradise',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '16.99',
    button: 'Add to Cart',
    featured:false
  },
  {
    id:3,
    img: product3,
    type:'pizzas',
    alt: 'Pizza',
    name: 'Veggie Overload',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '14.99',
    button: 'Add to Cart',
    featured:false
  },
  {
    id:4,
    img: product4,
    type:'pizzas',
    alt: 'Pizza',
    name: 'Cruiser',
    desc:
      ' Mozzarella, Pepperoni, Mushrooms, Black Olives and Marinara Sauce',
    price: '9.05',
    button: 'Add to Cart',
    featured:false
  },
  {
    id:5,
    img: hotrod,
    type:'pizzas',
    alt: 'Pizza',
    name: 'Hot Rod',
    desc:
      'Mozzarella, Pepperoni, Tomato, Red Chili Flakes and Marinara Sauce',
    price: '8.13',
    button: 'Add to Cart',
    featured:true
  },
  {
    id:6,
    img: cheesyvegie,
    type:'pizzas',
    alt: 'Pizza',
    name: 'Cheesy Veggie',
    desc:
      'Mozzarella, Extra Mushrooms, Sweet Peppers, Onions, Black Olives, Italian Seasoning and Marinara Sauce',
    price: '8.78',
    button: 'Add to Cart',
    featured:false
  },
  {
    id:7,
    img: hula,
    type:'pizzas',
    alt: 'Pizza',
    name: 'Hula',
    desc:
      'Mozzarella, Smoked Ham, Sweet Pineapple and Marinara Sauce',
    price: '10',
    button: 'Add to Cart',
    featured:false
  },
  {
    id:1.2,
    img: sweet2,
    type:'desserts',
    alt: 'Donuts',
    name: 'Doughlicious',
    desc:
      'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
    price: '2',
    button: 'Add to Cart'
  },
  
  {
    id:2.2,
    img: sweet3,
    type:'desserts',
    alt: 'Ice Cream',
    name: 'Caramel Wonder',
    desc:
      'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
    price: '5',
    button: 'Add to Cart'
  },
  {
    id:3.2,
    img: ChockChip,
    type:'desserts',
    alt: 'Chocolate Chip Cookies',
    name: 'Chocolate Chip Cookies',
    desc:
      'We bake our Chocolate Chip Cookies fresh every day.',
    price: '1',
    button: 'Add to Cart'
  },
  {
    id:4.2,
    img: sweet1,
    type:'desserts',
    alt: 'Brownie',
    name: 'Brownie Bunch',
    desc:
      'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
    price: '1.5',
    button: 'Add to Cart'
  }
];

