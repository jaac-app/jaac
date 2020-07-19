import getUserById from "/js/models/user.js";

export default class groupConversation{

    constructor(picture, name, creationDate, memberIds){
        this.picture = picture;
        this.name = name;
        this.creationDate = creationDate;
        this.memberIds = memberIds;
        this.html = this.getHTML();
    }

    getHTML(){
        return `
            <section class="section">
                <div class="img-border">
                    <img src="${this.picture}">
                </div>
                <h2>${this.name}</h2>
                <h3>created at: ${this.creationDate}</h3>
                <div class="group-members-inline">
                    ${this.getMembersHTML()}
                </div> 
                <div>
                    ${this.getMessagesHTML()}
                </div>
            </section>
        `
    }
    //
    getMembersHTML(){
        const members =  this.memberIds.map(memberID=>{
            const userData = getUserById(memberID);
            const dpUrl = userData.profilePicURL;
            return `<img src="${dpUrl}">`
        })

        return members.join('');
    }

    getMessagesHTML(){
        const messages = [
            {
                senderID: 1,
                time: '08:00 pm',
                text: 'Hello'
            },
            {
                
                senderID: 2,
                time: '09:00 pm',
                text: 'Hi'
            },
            {
                senderID: 3,
                time: '09:01 pm',
                text: 'Hello'
            },
            {
                senderID: 4,
                time: '09:30 pm',
                text: 'Hi guys'
            }

        ]

        return messages.map(message=>{
            const userData = getUserById(message.senderID);
            const name = userData.name;
            const dpUrl = userData.profilePicURL;
            return `
                <div class="left-msg"> 
                    <div class="left-message-container">
                       <div class="message-details">
                        <img src="${dpUrl}">
                        <h4>${name}</h4>
                        <span class="time">${message.time}</span>
                       </div>
                        <p>${message.text}</p>
                    </div>
                </div>
            `
        }).join('')
    }
}
