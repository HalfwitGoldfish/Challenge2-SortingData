const sortingData = ( people, ) =>
{
    let ids = [];
    let firstNames = [];
    let lastNames = [];
    let emails = [];
    let heights = [];
    let ages = [];
    let peopleLength = people.length;

    people.forEach( person =>
    {
        ids.push( person.Id );
        firstNames.push( person.FirstName );
        lastNames.push( person.LastName );
        emails.push( person.Email );
        heights.push( person.Height );
        ages.push( person.Age );
    });

    return { ids, firstNames, lastNames, emails, heights, ages, peopleLength };
}

export { sortingData };