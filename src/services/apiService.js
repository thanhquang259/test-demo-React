import axios from "../utils/axiosCustomize";
const postCreateNewUser = (email, password, username, role, image) => {
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', image);
    return axios.post('api/v1/participant', form);
}
const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}

const putUpdateUser = (id, password, username, role, image) => {
    const form = new FormData();
    form.append('id', id);
    form.append('password', password);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', image);
    return axios.put('api/v1/participant', form);
}

const viewUser = (id, password, username, role, image) => {
    const form = new FormData();
    form.append('id', id);
    form.append('password', password);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', image);
    return axios.put('api/v1/participant', form);
}
const deleteUsers = (userID) => {
    return axios.delete('api/v1/participant', { data: { id: userID } });
}

export { postCreateNewUser, getAllUsers, putUpdateUser, viewUser, deleteUsers }
