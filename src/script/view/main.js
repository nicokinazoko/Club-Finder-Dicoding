const main =  () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");

    // const onButtonSearchClicked = () => {
    //     const dataSource = new DataSource(renderResult, fallbackResult);
    //     dataSource.searchClub(searchElement.value);
    // };

    // const onButtonSearchClicked     =   () =>
    //                                     {
    //                                         DataSource.searchClub(searchElement.value)
    //                                         .then(renderResult)
    //                                         .catch(fallbackResult);
    //                                     };


    const onButtonSearchClicked     =   async () =>
                                        {
                                            try
                                            {
                                                const results       =   await DataSource.searchClub(searchElement.value);
                                                renderResult(results)
                                            }
                                            catch (message)
                                            {
                                                fallbackResult(message);
                                            }
                                        }                                        

    const renderResult = (results) => {
        clubListElement.innerHTML = "";
        results.forEach(function (club) {
            // const name = club.name;
            // const fanArt = club.fanArt;
            // const description = club.description;

            const {name,fanArt,description} = club;

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            //ini yang sebelum diedit
            // clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
            //     '<div class="club-info">\n' +
            //     '<h2>' + name + '</h2>\n' +
            //     '<p>' + description + '</p>' +
            //     '</div>';

            //ini setelah diedit
            clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
            <div class="club-info">
            <h2> ${name} </h2>
            <p> ${description} </p>
            </div>;`
            clubListElement.appendChild(clubElement);
        })

    };

    const fallbackResult =  (message) => {
        clubListElement.innerHTML = "";
        //ini yang lama
        // clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
        //ini yang baru
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
