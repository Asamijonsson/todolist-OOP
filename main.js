import List from './list.js';

const list = new List();

async function handleUserChoice() {
  console.log('\nChoose an option:');
  console.log('1. Add todo');
  console.log('2. Remove todo');
  console.log('3. Show todos');
  console.log('4. Exit');

  const choice = await askQuestion('Enter your choice (1, 2, 3, or 4): ');

  switch (choice) {
    case '1':
      const todoItem = await askQuestion('Enter a new todo: ');
      list.addToList(todoItem);
      break;
    case '2':
      const index = parseInt(await askQuestion('Enter the index of the todo to remove: '), 10);
      await list.removeFromListByIndex(index);
      break;
    case '3':
        list.showTodos();
      break;
    case '4':
      console.log('Exiting program.');
      process.exit(0);
      break;
    default:
      console.log('Invalid choice. Please enter 1, 2, 3 or 4.');
  }

  handleUserChoice();
}


function askQuestion(question) {
  return new Promise((resolve) => {
    process.stdout.write(question);
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim());
    });
  });
}

handleUserChoice();