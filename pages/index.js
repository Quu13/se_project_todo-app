import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

import { initialTodos, validationConfig} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js"
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from '../components/TodoCounter.js';

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoPopUp = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const dateInput = inputValues.date;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const values = { name, date, id };
    const todo = generateTodo(values);
    section.addItem(todo);
    handleAddTodo();

    todoValidator.resetValidation();

    todoPopUp.close();
  },
});

todoPopUp.setEventListeners();

addTodoButton.addEventListener("click", () => {
  todoPopUp.open();
});


  const todoValidator = new FormValidator(validationConfig, addTodoForm);
  const todoCounter = new TodoCounter(initialTodos, ".counter__text");
  const section = new Section({
    items: initialTodos,
    renderer: (item) => {
      const renderEl = generateTodo(item);
  
      section.addItem(renderEl);
    },
    containerSelector: ".todos__list",
  });


const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
