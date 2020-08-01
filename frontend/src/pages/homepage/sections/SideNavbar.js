import React from "react";

const SideNavbar = () => {
    return (
        <aside class="others open" id="others">
            <div class="side-bar-top-style panel">
                <section>
                    <div class="sideNavSectionHeadingDiv main-search">
                    <input type="text" id="mainSearchInput" class="main-search-input" placeholder="Search" />
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
    )
}