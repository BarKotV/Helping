import types from "./types";

const name = item => ({
    type: types.ADD_NAME, item
});

const email = item => ({
    type: types.ADD_EMAIL, item
});

const message = item => ({
    type: types.ADD_MESSAGE, item
});

export default {
    name,
    email,
    message,
}
