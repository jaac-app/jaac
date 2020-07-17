export default class groupConversation{

    constructor(picture, name, creationDate, members){
        this.picture = picture;
        this.name = name;
        this.creationDate = creationDate;
        this.members = members;
        this.html = this.getHTML();
    }

    getHTML(){
        return `
            <section>
                <div>
                    <img src="${this.picture}">
                </div>
                <h2>${this.name}</h2>
                <h3>created at: ${this.creationDate}</h3>
                <div>
                    ${this.getMembersHTML()}
                </div>
                <div>
                    ${this.getMessagesHTML()}
                </div>
            </section>
        `
    }

    getMembersHTML(){
        this.members.map(member=>{
            return `<span><img src="${member.imgPath}"</span>`
        })
    }

    getMessagesHTML(){
        const messages = [
            {
                sender: 'Aman',
                time: '08:00 pm',
                text: 'Hello'
            },
            {
                sender: 'Jingke',
                time: '09:00 pm',
                text: 'Hi'
            },
            {
                sender: 'Aurnab',
                time: '09:01 pm',
                text: 'Hello'
            },
            {
                sender: 'Carol',
                time: '09:30 pm',
                text: 'Hi guys'
            }

        ]

        return messages.map(message=>{
            return `
                <div class="left-msg"> 
                    <div class="left-message-container">
                        <img src="#">
                        <h4>${message.sender}</h4>
                        <span>${message.text}</span>
                        <span class="time">${message.time}</span>
                    </div>
                </div>
            `
        }).join('')
    }
}