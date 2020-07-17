export default class SideNavPanel{
    constructor(){
        this.html = this.getHTML();
    }

    getHTML(){
        return `
            <aside class="others open" id="others">
                <div class="panel">
                <h2>Other Conversations</h2>
                <ul>
                    <!-- Conversation/user info goes here -->
                </ul>
                </div>
                <button class="toggle-others" id="btnOthers"><span>chats</span></button>
            </aside>
        `
    }
}