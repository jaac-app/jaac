const users = {
    1: {
        name: "Jingke",
        profilePicURL: "img/taylor.jpg",
    },
    2: {
        name: "Aurnab",
        profilePicURL: "img/akon.jpg",
    },
    3: {
        name: "Aman",
        profilePicURL: "img/taylor.jpg",
    },
    4: {
        name: "Carol",
        profilePicURL: "img/taylor.jpg",
    },

}
const getUserById=(id)=>{
    return users[id];
}

export default getUserById;

