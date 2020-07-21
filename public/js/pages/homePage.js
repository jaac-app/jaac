import SideNavPanel from "./sections/sideNav.js";
import GroupConversationPanel from "./sections/groupConversation.js";

export default class HomePage {

    constructor(){ 
        //here new instance(object) is created and class's contructor is called
        this.sideNavPanel = new SideNavPanel();
        this.groupConversationPanel = new GroupConversationPanel("./img/akele.jpg",
          "JAAC app", 
          "June 16, 2020", 
          // send group members userId in an array
          [1, 2, 3, 4] 
          );
        this.html = this.getHTML();
    }

    getHTML(){
    
        return `
        <div class="layout">
        <header class="branding">
          <h1 class="logo">JAAC</h1>
        </header>
        ${this.sideNavPanel.html}
        <main class="conversation" id="conversation">
          ${this.groupConversationPanel.html}
        </main>
      </div>
    `
    // <h2>Chat</h2>
    //       <header>
    //         <!-- Info about the conversation participant goes here -->
    //       </header>
    //       <section id="messages">
    //         <!-- Message articles goes here -->
    //       </section>
    //       <footer>
    //         <!-- New msg form goes here -->
    //       </footer>
    }
}