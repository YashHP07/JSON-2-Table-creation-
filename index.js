 // JSON data
 const persons = [
    {
        "firstname": "Virat",
        "lastname": "Kohli",
        "dob": "1990-01-01"
    },
    {
        "firstname": "Rohit",
        "lastname": "Sharma",
        "dob": "1985-05-15"
    },
    {
        "firstname": "MS",
        "lastname": "Dhoni",
        "dob": "1992-09-22"
    }
];

// Reference to the table body
const tableBody = document.querySelector('#personsTable tbody');

// Create table rows for each person
persons.forEach(person => {
    const row = document.createElement('tr');

    const firstnameCell = document.createElement('td');
    firstnameCell.textContent = person.firstname;
    row.appendChild(firstnameCell);

    const lastnameCell = document.createElement('td');
    lastnameCell.textContent = person.lastname;
    row.appendChild(lastnameCell);

    const dobCell = document.createElement('td');
    dobCell.textContent = person.dob;
    row.appendChild(dobCell);

    tableBody.appendChild(row);
});