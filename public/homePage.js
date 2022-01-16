"use strict";
//Выход из личного кабинета
const logoutButton = new LogoutButton();
logoutButton.action = () => {
    ApiConnector.logout = (response) => {
        if (response.success === true) {
            location.reload();
        } else {
            setMessage(`Произошла ошибка ${response.error}`);
        };
    };
};
//Получение информации о пользователе
ApiConnector.current = (response) => {
    if (response.success === true) {
        ShowProfile(data)
    };
};
//Получение текущих курсов валюты
const ratesBoard = new RatesBoard();
ApiConnector.getStocks = (response) => {
    if (response.success === true) {
        moneyManager.clearTable();
        moneyManager.fillTable(response.data);
    };
};
//Операции с деньгами
//пополнение баланса
const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney = (data, (response) => {
        if (response.success === true) {
            moneyManager.setMessage(`Успешно ${response.success}`);
            ProfileWidget.ShowProfile(response.data);
        } else {
            moneyManager.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};
//конвертирование валюты
moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney = (data, (response) => {
        if (response.success === true) {
            moneyManager.setMessage(`Успешно ${response.success}`);
            ProfileWidget.ShowProfile(response.data);
        } else {
            moneyManager.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};
//перевод валюты
moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney = (data, (response) => {
        if (response.success === true) {
            moneyManager.setMessage(`Успешно ${response.success}`);
            ProfileWidget.ShowProfile(response.data);
        } else {
            moneyManager.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};
//Работа с избранным
const favoritesWidget = new FavoritesWidget();
//начальный список избранного
ApiConnector.getFavorites = (response) => {
    if (response.success === true) {
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(data);
        moneyManager.updateUsersList(data);
    } else {
        favoritesWidget.setMessage(`Произошла ошибка ${response.error}`);
    };
};
//добавления пользователя в список избранных
favoritesWidget.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites = (data, (response) => {
        if (response.success === true) {
            favoritesWidget.clearTable();
            favoritesWidget.fillTable(data);
            moneyManager.updateUsersList(data);
            favoritesWidget.setMessage(`Успешно ${response.success}`);
        } else {
            favoritesWidget.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};
//удаление пользователя из избранного
favoritesWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites = (data, (response) => {
        if (response.success === true) {
            favoritesWidget.clearTable();
            favoritesWidget.fillTable(data);
            moneyManager.updateUsersList(data);
            favoritesWidget.setMessage(`Успешно ${response.success}`);
        } else {
            favoritesWidget.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};