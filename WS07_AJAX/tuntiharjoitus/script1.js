// lisätään kuuntelijat painikkeille
document.getElementById("showNamesBtn").addEventListener("click", showNames);
document.getElementById("showAllBtn").addEventListener("click", showAll);


var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

function showNames() {

    let result = "";

    for (let i = 0; i < obj.employees.length; i++) {

        result += obj.employees[i].firstName +
                  " " +
                  obj.employees[i].lastName +
                  "<br>";
    }

    document.getElementById("jsondata").innerHTML = result;
}

function showAll() {

    let result = "";

    for (let i = 0; i < obj.employees.length; i++) {

        let employee = obj.employees[i];

        result += "Etunimi: " + employee.firstName +
                  ", Sukunimi: " + employee.lastName +
                  "<br>";
    }

    document.getElementById("jsondata").innerHTML = result;
}