import { useState } from 'react';
import produce from 'immer';

import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import Message from './components/Message';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ExpandableText from './components/ExpandableText';
import Form from './components/Form';
import ReactForm from './components/ReactForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';

// TEST
// TEST2
// TEST3
// TEST4

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  // drinks (Object)
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 5,
  });
  const handleDrinkClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  const [drink2, setDrink2] = useState({
    ...drink,
    id: 1,
  });
  const handleDrink2Click = () => {
    setDrink2({ ...drink2, price: 10 });
  };

  // customers (Object)
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Francisco',
      zipCode: 94111,
    },
  });
  const handleCustomerClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  // tags (Array)
  const [tags, setTags] = useState(['happy', 'cheerful']);
  const handleTagsClick = () => {
    //Add
    setTags([...tags, 'exciting']);
    //Remove
    setTags(tags.filter((tag) => tag !== 'happy'));
    // //Update
    setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));
  };

  // bugs (Array of Objects)
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);
  const handleBugsClick = () => {
    // default way
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // way with immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris',
    'Amsterdam',
    'Rome',
    'Barselona',
    'Brouge',
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // shoppingcart items
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

  // games items
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });
  const handleGameClick = () => {
    setGame({ ...game, player: { ...game.player, name: 'Bob' } });
  };

  // pizza items
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });
  const handlePizzaClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
  };

  // products items
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });
  const handleCartClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={'Cities 214'}
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <BsFillCalendar2WeekFill color='#007bff' size='20' /> Hello{' '}
          <span>World!</span>
        </Alert>
      )}
      <Message />
      <br />
      <button className='btn btn-primary' onClick={handleDrinkClick}>
        Drink Price {drink.price}
      </button>
      <button className='btn btn-primary' onClick={handleCustomerClick}>
        Customer Zip {customer.address.zipCode}
      </button>
      <button className='btn btn-primary' onClick={handleTagsClick}>
        Tags: {tags.toString()}
      </button>
      <button className='btn btn-primary' onClick={handleBugsClick}>
        Bugs
      </button>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? 'Fixed' : 'New'}
        </p>
      ))}

      <button className='btn btn-primary' onClick={handleDrink2Click}>
        Drink2 change price
      </button>
      <div>{drink2.price}</div>
      <div className='CartWrap'>
        <NavBar cartItemsCount={cartItems.length}></NavBar>
        <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
      </div>

      <div>
        <button className='btn btn-primary' onClick={handleGameClick}>
          {game.player.name}
        </button>
      </div>

      <div>
        <button className='btn btn-primary' onClick={handlePizzaClick}>
          {pizza.toppings.toString()}
        </button>
      </div>

      <div>
        <button className='btn btn-primary' onClick={handleCartClick}>
          {cart.items.map(
            ({ title, quantity }) => title + ' (' + quantity + ') '
          )}
        </button>
      </div>

      <div>
        <ExpandableText maxChars={100}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          consequuntur quas quibusdam numquam, natus eveniet eaque dolor optio
          laborum et assumenda minus suscipit fugiat voluptatum sapiente quis
          quos excepturi? Atque totam fuga assumenda quia ratione dolores magni
          ab voluptates, neque dignissimos, perferendis ipsam deleniti quae
          rerum, quaerat quos tempore dolorem. Molestias nam obcaecati quidem
          aliquam totam officia doloribus voluptas aspernatur magni, aliquid
          labore voluptate adipisci, perspiciatis placeat hic facere beatae
          temporibus odit dolores enim rem nemo id! Animi quidem dignissimos
          voluptatum, perferendis consequuntur ut sed deleniti iste fugit quos
          doloremque quis atque distinctio debitis accusantium aliquid sequi
          beatae excepturi tempora.
        </ExpandableText>
      </div>

      <Form></Form>

      <ReactForm></ReactForm>
    </div>
  );
}

export default App;
