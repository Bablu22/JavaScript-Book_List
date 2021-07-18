/*
1. Dom Selection
2. Add EvenListener
3. Basic Validation
4. Creat Element
5. Show Table
*/

// 1. Dom Selection

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const submit = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

// 2. Event Listener Add

submit.addEventListener('click', function (e) {

    e.preventDefault();

    // 3. Basic Validation

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please Fill the Input data !');
    } else {

        const newRow = document.createElement('tr');

        //New Book Title Creat

        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // New Book Author Creat

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // Book Year Creat

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);


        // Show Result
        bookList.appendChild(newRow);




    }



})