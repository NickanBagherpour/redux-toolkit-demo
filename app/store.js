const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");

const cakeReducer = require("../features/cake/cake-slice");
const icecreamReducer = require("../features/icecream/icecream-slice");
const userReducer = require("../features/user/user-slice");

const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;