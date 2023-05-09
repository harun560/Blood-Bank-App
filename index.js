const cards = document.querySelectorAll('#left');
cards.forEach(card => {
  const maximizeBtn = card.querySelector('.maximize-btn');
  maximizeBtn.addEventListener('click', () => {
    card.classList.toggle('maximized');
  });
});


// data to populate the table
var data = [ 
           { firstName: 'John', lastName : 'Thomas' , MRN: 98500, BloodType: 'A Positive' }, 
             {firstName : "Mohamed", lastName: 'Abdi', MRN:97500,  BloodType: 'A Negative'},
          {firstName : "Mohamed", lastName: "Abdi", MRN:25860,  BloodType: 'A Negative'}
  
  ];

// get a reference to the table and table body
var table = document.getElementById('myTable');
var tbody = table.getElementsByTagName('tbody')[0];

// loop through the data and create a row for each item
for (var i = 0; i < data.length; i++) {
  // create a new row
  var row = document.createElement('tr');
  
  // add cells to the row
  var nameCell = document.createElement('td');
  nameCell.textContent = data[i].firstName;
  row.appendChild(nameCell);
  
  var ageCell = document.createElement('td');
  ageCell.textContent = data[i].lastName;
  row.appendChild(ageCell);
  
  var cityCell = document.createElement('td');
  cityCell.textContent = data[i].MRN;
  row.appendChild(cityCell);
  
  var bloodtype = document.createElement('td');
  bloodtype.textContent = data[i].BloodType;
  row.appendChild(bloodtype);
  // add the row to the table body
  tbody.appendChild(row);
}
