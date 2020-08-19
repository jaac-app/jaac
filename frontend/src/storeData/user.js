import taylor from "img/taylor.jpg";
import akon from "img/akon.jpg";

const users = {
    1: {
        name: "Jingke",
        profilePicURL: taylor,
    },
    2: {
        name: "Aurnab",
        profilePicURL: akon,
    },
    3: {
        name: "Aman",
        profilePicURL: taylor,
    },
    4: {
        name: "Carol",
        profilePicURL: taylor,
    },

}
const getUserById=(id)=>{
    return users[id];
}

export default getUserById;

