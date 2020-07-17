export default class SideNavPanel{
    constructor(){
        this.html = this.getHTML();
    }

    getHTML(){
        return `
            <aside class="others open" id="others">
                <div class="panel">
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
                <h2>Group Channels</h2>
                <ul>
                    ${this.getChannelListHTML()}
                </ul>
            </section>
        `
    }
    getDirectChatsHTML(){
        return `
            <section>
                <h2>Direct Messages</h2>
                <ul>
                    ${this.getChatsListHTML()}
                </ul>
            </section>
        `
    }

    getChannelListHTML(){
        const channelNames = ['Jaac App', 'WebStore'];
        return channelNames.map(channel=>`<li><button type="button">${channel}</button></li>`).join('');
    }
    getChatsListHTML(){
        const userNames = ['Jingke','Aurnab','Aman','Carol'];
        return userNames.map(userName=>`<li><button type="button">${userName}</button></li>`).join('');
    }
}