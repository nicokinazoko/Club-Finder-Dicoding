import './club-item.js';

class ClubList extends HTMLElement
{
    constructor()
    {
        super();
        this.shadowDOM                  =   this.attachShadow({mode :   "open"});
    }

    set clubs(clubs)
    {
        this._clubs                     =   clubs;
        this.render();
    }

    render()
    {
        this.shadowDOM.innerHTML                  =   ``;
        this._clubs.forEach(club => 
                            {
                                const clubItemElement           =   document.createElement("club-item");
                                clubItemElement.club            =   club;
                                // this.appendChild(clubItemElement);
                                this.shadowDOM.appendChild(clubItemElement);
                            })
    }

    renderError(message)
    {
        // clubListElement.innerHTML = "";
        // clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
        this.shadowDOM.innerHTML                    =   `                                                        <style>
                                                    <style>                                                
                                                        .placeholder {
                                                        font-weight: lighter;
                                                        color: rgba(0,0,0,0.5);
                                                        -webkit-user-select: none;
                                                        -moz-user-select: none;
                                                        -ms-user-select: none;
                                                        user-select: none;
                                                        }
                                                    </style>`;
        this.shadowDOM.innerHTML                    +=  `<h2 class="placeholder">${message}</h2>`;
    }

}

customElements.define("club-list", ClubList);

// import './club-item.js';
 
// class ClubList extends HTMLElement {
//    set clubs(clubs) {
//        this._clubs = clubs;
//        this.render();
//    }
 
//    renderError(message) {
//        this.innerHTML = "";
//        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
//    }
 
//    render() {
//        this.innerHTML = "";
//        this._clubs.forEach(club => {
//            const clubItemElement = document.createElement("club-item");
//            clubItemElement.club = club
//            this.appendChild(clubItemElement);
//        })
//    }
// }
 
// customElements.define("club-list", ClubList);