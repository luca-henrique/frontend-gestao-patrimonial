export const webSocketAccount = (ws, store, data) => {
  const account = ws.getSubscription("user") || ws.subscribe("user");
  account.on("newUser", (account) => {
    let newArray = [...data, account];
    store.dispatch({
      type: "@account/READ_ACCOUNT_SUCCESS",
      payload: {
        accounts: newArray,
      },
    });
  });

  account.on("deleteUser", (account) => {
    var lists = data.filter((x) => {
      return x.id !== account.id;
    });
    store.dispatch({
      type: "@account/READ_ACCOUNT_SUCCESS",
      payload: {
        accounts: lists,
      },
    });
  });

  account.on("updateUser", (account) => {
    const users = [];

    data.map((user) => {
      if (user.id !== account.id) {
        users.push(user);
      } else {
        users.push(account);
      }
    });

    store.dispatch({
      type: "@account/READ_ACCOUNT_SUCCESS",
      payload: {
        accounts: users,
      },
    });
  });
};
