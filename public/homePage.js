"use strict";
//Выход из личного кабинета +
const logoutButton = new LogoutButton();
logoutButton.action = () => {
    ApiConnector.logout((response) => {
        if (response.success === true) {
            location.reload();
        } else {
            console.log(`Произошла ошибка`);
        };
    });
};
//Получение информации о пользователе +
ApiConnector.current((response) => {
    if (response.success === true) {
        ProfileWidget.showProfile(response.data);
    } else {
        console.log(`"Произошла ошибка: " ${response.error}`);
    };
});
//Получение текущих курсов валюты +
const ratesBoard = new RatesBoard();
ApiConnector.getStocks((response) => {
    if (response.success === true) {
        ratesBoard.clearTable();
        ratesBoard.fillTable(response.data);
    } else {
        console.error(`Произошла ошибка`);
    };
});
//Операции с деньгами +
//пополнение баланса +
const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, (response) => {
        if (response.success === true) {
            moneyManager.setMessage(`Успешно ${response.success}`);
            ProfileWidget.showProfile(response.data);
        } else {
            moneyManager.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};
//конвертирование валюты +
moneyManager.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, (response) => {
        if (response.success === true) {
            moneyManager.setMessage(`Успешно ${response.success}`);
            ProfileWidget.showProfile(response.data);
        } else {
            moneyManager.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};
//перевод валюты +
moneyManager.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, (response) => {
        if (response.success === true) {
            moneyManager.setMessage(`Успешно ${response.success}`);
            ProfileWidget.showProfile(response.data);
        } else {
            moneyManager.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};
//Работа с избранным +
const favoritesWidget = new FavoritesWidget();
//начальный список избранного
ApiConnector.getFavorites((response) => {
    if (response.success === true) {
        favoritesWidget.clearTable();
        favoritesWidget.fillTable(response.data);
        moneyManager.updateUsersList(response.data);
    };
});
//добавления пользователя в список избранных +
favoritesWidget.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, (response) => {
        if (response.success) {
            favoritesWidget.clearTable();
            favoritesWidget.fillTable(response.data);
            moneyManager.updateUsersList(response.data);
            favoritesWidget.setMessage(`Успешно ${response.success}`);
        } else {
            favoritesWidget.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};
//удаление пользователя из избранного +
favoritesWidget.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, (response) => {
        if (response.success === true) {
            favoritesWidget.clearTable;
            favoritesWidget.fillTable;
            moneyManager.updateUsersList;
            favoritesWidget.setMessage(`Успешно ${response.success}`);
        } else {
            favoritesWidget.setMessage(`Произошла ошибка ${response.error}`);
        };
    });
};