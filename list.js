import { readFileSync, writeFileSync } from 'fs';

class List {
  todoList = [];

  constructor() {
    this.loadListFromFile();
  }

  addToList(todoItem) {
    this.todoList.push(todoItem);
    this.saveListToFile();
    this.printList();
  }

  removeFromListByIndex(index) {
    const adjustIndex = index - 1;
    if (adjustIndex >= 0 && adjustIndex < this.todoList.length) {
      const removedTodo = this.todoList.splice(adjustIndex, 1)[0];
      console.log(`Removed: ${removedTodo}`);
      this.saveListToFile();
      this.printList();
    } else {
      console.log('Invalid index. Todo not removed.');
    }
  }

  showTodos() {
  console.log('\nTodos:');
  this.todoList.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
}

  printList() {
    console.log("Todo List:");
    this.todoList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }

  loadListFromFile() {
    try {
      const data = readFileSync('./todoList.csv', 'utf8');
      this.todoList = data.split('\n').map((item) => item.trim());
    } catch (error) {
      console.log('No existing todo list file found.');
    }
  }

  saveListToFile() {
    const fileName = "./todoList.csv";
    const csvData = this.todoList.join("\n");
    writeFileSync(fileName, csvData, 'utf8');
  }
}

export default List;
