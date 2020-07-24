export default class SideNavPanel{
    constructor(){
        this.html = this.getHTML();
    }

    getHTML(){
        return `
            <aside class="others open" id="others">
                <div class="side-bar-top-style panel">
                    <span>Create meeting</span>
                    <button type="button" id="createMeetingBtn">+</button>
                    ${this.getUserOptionsHTML()}
                    ${this.getGroupChannelsHTML()}
                    ${this.getDirectChatsHTML()}
                </div>
                <button class="toggle-others" id="btnOthers"><span>chats</span></button>
            </aside>
        `
    }

    getUserOptionsHTML(){
        return `
            <section>
                <h1>My Profile</h1>
                <ul>
                    <li>Settings </li>
                    <li>My Notes </li>
                <ul>
            </section>
        `
    }

    getGroupChannelsHTML(){
        return `
            <section>
                <div class="sideNavSectionHeadingDiv">
                    <span>Group Channels</span>
                    <button type="button" id="createGroupChannelBtn">+</button>
                </div>
                <ul>
                    ${this.getChannelListHTML()}
                </ul>
            </section>
        `
    }
    getDirectChatsHTML(){
        return `
            <section>
                <div class="sideNavSectionHeadingDiv">
                    <span>Direct Messages</span>
                    <button type="button" id="createDirectMessageBtn">+</button>
                </div>
                <ul>
                    ${this.getChatsListHTML()}
                </ul>
            </section>
        `
    }

    getChannelListHTML(){
        const channelNames = ['Jaac App', 'WebStore'];
        return channelNames.map((channel, indx)=>{
            const buttonID = `channelBtn${indx}`
            return `
            <li><span>dp</span>
                <button type="button" class="channelBtn" id=${buttonID}>${channel}</button>
            </li>`
        }).join('');
    }
    getChatsListHTML(){
        const userNames = ['Jingke','Aurnab','Aman','Carol'];
        return userNames.map(userName=>`<li><button type="button">${userName}</button></li>`).join('');
    }
}