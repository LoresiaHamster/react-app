import { useState } from 'react';
import produce from 'immer';

import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import Message from './components/Message';
import './App.css';

import { BsFillCalendar2WeekFill } from 'react-icons/bs';

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
      <button onClick={handleDrinkClick}>Drink Price {drink.price}</button>
      <button onClick={handleCustomerClick}>
        Customer Zip {customer.address.zipCode}
      </button>
      <button onClick={handleTagsClick}>Tags: {tags.toString()}</button>
      <button onClick={handleBugsClick}>Bugs</button>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? 'Fixed' : 'New'}
        </p>
      ))}
    </div>
  );
}

export default App;
