export default class SideNavPanel{
    constructor(){
        this.html = this.getHTML();
    }

    getHTML(){
        return `
            <aside class="others open" id="others">
                <div class="side-bar-top-style panel">
                    <section>
                        <div class="sideNavSectionHeadingDiv main-search">
                        <input type="text" id="mainSearchInput" class="main-search-input" placeholder="Search" >
                            <button type="button" id="mainSearchBtn"><i class="fas fa-search"></i></button>
                        </div>
                    </section>
                    <section>
                        <div class="sideNavSectionHeadingDiv create-meeting">
                            <span>Create meeting</span>
                            <button type="button" id="createMeetingBtn"> <i class="fas fa-video"></i></button>
                        </div>
                    </section>
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
                <h1><i class="fas fa-user"> My Profile</i></h1>
                <ul>
                    <li><i class="fas fa-cog"></i> Settings </li>
                    <li><i class="far fa-sticky-note my-notes"></i> My Notes </li>
                <ul>
            </section>
        `
    }

    getGroupChannelsHTML(){
        return `
            <section>
                <div class="sideNavSectionHeadingDiv">
                    <span>Group Channels</span>
                    <button type="button" id="createGroupChannelBtn"><i class="fas fa-plus"></i></button>
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
                    <button type="button" id="createDirectMessageBtn"><i class="fas fa-plus"></i></button>
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
            const buttonID = `channelBtn_${indx}`
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