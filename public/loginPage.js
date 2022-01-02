"use strict"
class UserForm {
  loginFormCallback = (data) => { data };
  registerFormCallback() { };
}

class ApiConnector {
  login({ login, password }, callback) {
    const response = () => console.log("Пользователь с логином ${this.login} и указанным паролём не найден!");
  };
  register({ login, password }, callback) { };
};

let data = {
  login: 'oleg@demo.ru', password: 'demo',
  login: 'ivan@demo.ru', password: 'demo',
  login: 'petr@demo.ru', password: 'demo',
  login: 'galina@demo.ru', password: 'demo',
  login: 'vladimir@demo.ru', password: 'demo',
};

const userForm = new UserForm();
const api = new ApiConnector();
console.log(userForm.loginFormCallback(data));
api.login('login: ivan@demo.ru, password: demo', response => console.log(response));