import { sortingData } from "/scripts/peopleSorting.js";

const limitText = document.getElementById( "limitText" );
const limitSlider = document.getElementById( "limitSlider" );

const sortById = document.getElementById( "sortById" );
const sortByFirstName = document.getElementById( "sortByFirstName" );
const sortByLastName = document.getElementById( "sortByLastName" );
const sortByEmail = document.getElementById( "sortByEmail" );
const sortByHeight = document.getElementById( "sortByHeight" );
const sortByAge = document.getElementById( "sortByAge" );

const appendId = document.getElementById( "appendId" );
const appendFirstName = document.getElementById( "appendFirstName" );
const appendLastName = document.getElementById( "appendLastName" );
const appendEmail = document.getElementById( "appendEmail" );
const appendHeight = document.getElementById( "appendHeight" );
const appendAge = document.getElementById( "appendAge" );

const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const currentPageDisplay = document.getElementById('currentPageDisplay');

let currentPage = 1;
let itemsPerPage = limitSlider.value * 10;

const getData = async () =>
{
    const response = await fetch( "/data/data.json" );
    const data = await response.json();
    const people = data.People;
    const limit = limitSlider.value * 10;
    limitText.innerText = `Limit: ${limitSlider.value * 10}`;
    displayData( people, limit );
}

sortById.addEventListener( "click", () =>
{
    resetPagination();
    appendId.innerHTML = "";
    appendFirstName.innerHTML = "";
    appendLastName.innerHTML = "";
    appendEmail.innerHTML = "";
    appendHeight.innerHTML = "";
    appendAge.innerHTML = "";
    const getDataById = async () =>
    {
        const response = await fetch( "/data/data.json" );
        const data = await response.json();
        const people = data.People;
        let peopleSorted = people.sort( (a, b) => a.Id - b.Id );
        sortingData( peopleSorted );

        displayData( peopleSorted, limitSlider.value * 10 );
    }
    getDataById();
});

sortByFirstName.addEventListener( "click", () =>
{
    resetPagination();
    appendId.innerHTML = "";
    appendFirstName.innerHTML = "";
    appendLastName.innerHTML = "";
    appendEmail.innerHTML = "";
    appendHeight.innerHTML = "";
    appendAge.innerHTML = "";
    const getDataByFirstName = async () =>
    {
        const response = await fetch( "/data/data.json" );
        const data = await response.json();
        const people = data.People;
        let peopleSorted = people.sort( (a, b) => a.FirstName.localeCompare( b.FirstName ) );
        sortingData( peopleSorted );

        displayData( peopleSorted, limitSlider.value * 10 );
    }
    getDataByFirstName();
});

sortByLastName.addEventListener( "click", () =>
{
    resetPagination();
    appendId.innerHTML = "";
    appendFirstName.innerHTML = "";
    appendLastName.innerHTML = "";
    appendEmail.innerHTML = "";
    appendHeight.innerHTML = "";
    appendAge.innerHTML = "";
    const getDataByLastName = async () =>
    {
        const response = await fetch( "/data/data.json" );
        const data = await response.json();
        const people = data.People;
        let peopleSorted = people.sort( (a, b) => a.LastName.localeCompare( b.LastName ) );
        sortingData( peopleSorted );

        displayData( peopleSorted, limitSlider.value * 10 );
    }
    getDataByLastName();
});

sortByEmail.addEventListener( "click", () =>
{
    resetPagination();
    appendId.innerHTML = "";
    appendFirstName.innerHTML = "";
    appendLastName.innerHTML = "";
    appendEmail.innerHTML = "";
    appendHeight.innerHTML = "";
    appendAge.innerHTML = "";
    const getDataByEmail = async () =>
    {
        const response = await fetch( "/data/data.json" );
        const data = await response.json();
        const people = data.People;
        let peopleSorted = people.sort( (a, b) => a.Email.localeCompare( b.Email ) );
        sortingData( peopleSorted );

        displayData( peopleSorted, limitSlider.value * 10 );
    }
    getDataByEmail();
});

sortByHeight.addEventListener( "click", () =>
{
    resetPagination();
    appendId.innerHTML = "";
    appendFirstName.innerHTML = "";
    appendLastName.innerHTML = "";
    appendEmail.innerHTML = "";
    appendHeight.innerHTML = "";
    appendAge.innerHTML = "";
    const getDataByHeight = async () =>
    {
        const response = await fetch( "/data/data.json" );
        const data = await response.json();
        const people = data.People;
        let peopleSorted = people.sort( (a, b) => a.Height.localeCompare( b.Height ) );
        sortingData( peopleSorted );

        displayData( peopleSorted, limitSlider.value * 10 );
    }
    getDataByHeight();
});

sortByAge.addEventListener( "click", () =>
{
    resetPagination();
    appendId.innerHTML = "";
    appendFirstName.innerHTML = "";
    appendLastName.innerHTML = "";
    appendEmail.innerHTML = "";
    appendHeight.innerHTML = "";
    appendAge.innerHTML = "";
    const getDataByAge = async () =>
    {
        const response = await fetch( "/data/data.json" );
        const data = await response.json();
        const people = data.People;
        let peopleSorted = people.sort( (a, b) => a.Age - b.Age );
        sortingData( peopleSorted );

        displayData( peopleSorted, limitSlider.value * 10 );
    }
    getDataByAge();
});

limitSlider.addEventListener( "input", () =>
{
    resetPagination();
    itemsPerPage = limitSlider.value * 10;
    appendId.innerHTML = "";
    appendFirstName.innerHTML = "";
    appendLastName.innerHTML = "";
    appendEmail.innerHTML = "";
    appendHeight.innerHTML = "";
    appendAge.innerHTML = "";
    limitText.innerText = `Limit: ${limitSlider.value * 10}`;
    const getData = async () =>
    {
        const response = await fetch( "/data/data.json" );
        const data = await response.json();
        const people = data.People;
        const limit = limitSlider.value * 10;
        displayData( people, limit );
    }
    getData();
});

const resetPagination = () => {
    currentPage = 1;
};

const displayData = ( people, limit ) =>
{
    const { ids, firstNames, lastNames, emails, heights, ages } = sortingData( people );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage);

    let limitIds = ids.slice( startIndex, endIndex );
    let limitFirstNames = firstNames.slice( startIndex, endIndex );
    let limitLastNames = lastNames.slice( startIndex, endIndex );
    let limitEmails = emails.slice( startIndex, endIndex );
    let limitHeights = heights.slice( startIndex, endIndex );
    let limitAges = ages.slice( startIndex, endIndex );

    limitIds.forEach( person =>
    {
        let divId = document.createElement( "div" );
        divId.type = "div";
        divId.className = "border-b pl-[10px] pr-[50px] py-[5px] bg-green-800";
    
        let pId = document.createElement( "p" );
        pId.type = "p";
        pId.innerText = person;
    
        divId.appendChild( pId );
        appendId.appendChild( divId );
    });

    limitFirstNames.forEach( person =>
    {
        let divFName = document.createElement( "div" );
        divFName.type = "div";
        divFName.className = "border-b pl-[10px] pr-[50px] py-[5px] bg-green-800";
    
        let pFName = document.createElement( "p" );
        pFName.type = "p";
        pFName.innerText = person;
    
        divFName.appendChild( pFName );
        appendFirstName.appendChild( divFName );
    });

    limitLastNames.forEach( person =>
    {
        let divLName = document.createElement( "div" );
        divLName.type = "div";
        divLName.className = "border-b pl-[10px] pr-[50px] py-[5px] bg-green-800";
    
        let pLName = document.createElement( "p" );
        pLName.type = "p";
        pLName.innerText = person;
    
        divLName.appendChild( pLName );
        appendLastName.appendChild( divLName );
    });

    limitEmails.forEach( person =>
    {
        let divEmail = document.createElement( "div" );
        divEmail.type = "div";
        divEmail.className = "border-b pl-[10px] pr-[50px] py-[5px] bg-green-800";
    
        let pEmail = document.createElement( "p" );
        pEmail.type = "p";
        pEmail.innerText = person;
    
        divEmail.appendChild( pEmail );
        appendEmail.appendChild( divEmail );
    });

    limitHeights.forEach( person =>
    {
        let divHeight = document.createElement( "div" );
        divHeight.type = "div";
        divHeight.className = "border-b pl-[10px] pr-[50px] py-[5px] bg-green-800";
    
        let pHeight = document.createElement( "p" );
        pHeight.type = "p";
        pHeight.innerText = person;
    
        divHeight.appendChild( pHeight );
        appendHeight.appendChild( divHeight );
    });

    limitAges.forEach( person =>
    {
        let divAge = document.createElement( "div" );
        divAge.type = "div";
        divAge.className = "border-b pl-[10px] pr-[50px] py-[5px] bg-green-800";
    
        let pAge = document.createElement( "p" );
        pAge.type = "p";
        pAge.innerText = person;
    
        divAge.appendChild( pAge );
        appendAge.appendChild( divAge );
    });

    updatePaginationControls( ids.length );
}

const setupPaginationControls = () => {
    prevPage.addEventListener( "click", () => {
        if ( currentPage > 1 )
        {
            appendId.innerHTML = "";
            appendFirstName.innerHTML = "";
            appendLastName.innerHTML = "";
            appendEmail.innerHTML = "";
            appendHeight.innerHTML = "";
            appendAge.innerHTML = "";
            currentPage--;
            getData();
        }
    });

    nextPage.addEventListener( "click", () => {
        const totalItems = 100;
        const maxPages = Math.ceil( totalItems / itemsPerPage );
        if ( currentPage < maxPages )
        {
            appendId.innerHTML = "";
            appendFirstName.innerHTML = "";
            appendLastName.innerHTML = "";
            appendEmail.innerHTML = "";
            appendHeight.innerHTML = "";
            appendAge.innerHTML = "";
            currentPage++;
            getData();
        }
    });
};

const updatePaginationControls = ( totalItems ) =>
{
    const maxPages = Math.ceil( totalItems / itemsPerPage );

    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === maxPages;
    currentPageDisplay.textContent = `Page ${currentPage} of ${maxPages}`;
};

getData();
setupPaginationControls();