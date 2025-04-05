var selectedIndex = null; 
var array1 = new Array();
var b1 = 0, b2 = 0, b3 = 0, b4 = 0;
function onFormSubmit() { 
    if (validate()) { 
        var formData = readFormData(); 
        if (selectedIndex==null) 
            insertNewRecord(formData); 
        else 
            updateRecord(formData); 
        resetForm(); 
    } 
} 
function readFormData() { 
    var formData = {}; 
    formData["fullName"] = document.getElementById("fullName").value; 
    formData["email"] = document.getElementById("email").value; 
    formData["salary"] = document.getElementById("salary").value; 
    formData["city"] = document.getElementById("city").value; 
    return formData; 
} 
function insertNewRecord(data) { 
    array1[array1.length]= 
{"fullName":data.fullName,"email":data.email,"salary":data.salary,"city":data.city}; 
    printArray(); 
} 
function printArray(){ 
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0]; 
    table.innerHTML=""; 
    var newRow; 
    for (i = 0; i < array1.length; i++) { 
        newRow = table.insertRow(table.length); 
        cell1 = newRow.insertCell(0); 
        cell1.innerHTML = array1[i].fullName; 
        cell2 = newRow.insertCell(1); 
        cell2.innerHTML = array1[i].email; 
        cell3 = newRow.insertCell(2); 
        cell3.innerHTML = array1[i].salary; 
        cell4 = newRow.insertCell(3); 
        cell4.innerHTML = array1[i].city; 
        cell4 = newRow.insertCell(4); 
        cell4.innerHTML = '<a onClick="onEdit('+i+')">Edit</a>' + '<a onClick="onDelete('+i+')">Delete</a>'; 
    } 
} 
function resetForm() { 
    document.getElementById("fullName").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("salary").value = ""; 
    document.getElementById("city").value = ""; 
    selectedIndex=null; 
} 
function onEdit(index) { 
    document.getElementById("fullName").value = array1[index].fullName; 
    document.getElementById("email").value = array1[index].email; 
    document.getElementById("salary").value = array1[index].salary; 
    document.getElementById("city").value = array1[index].city; 
    selectedIndex=index; 
} 
function updateRecord(formData) { 
    array1[selectedIndex].fullName=formData.fullName; 
    array1[selectedIndex].email=formData.email; 
    array1[selectedIndex].salary=formData.salary; 
    array1[selectedIndex].city=formData.city; 
    printArray(); 
} 
function deleteRecord(index) {
    array1[index].fullName = "";
    array1[index].email = "";
    array1[index].salary = "";
    array1[index].city = "";
    array1.splice(index, 1);
    printArray(); 
}
function onDelete(index) { 
    if (confirm('Are you sure to delete this record ?')) { 
        deleteRecord(index);
        resetForm(); 
        printArray(); 
    } 
} 
function validate() { 
    isValid = true; 
    var test_ln = 0;
    var test_e = 0;
    var test_s = 0;
    var test_c = 0;
    if (document.getElementById("fullName").value == "" || document.getElementById("fullName").value.length < 6 || document.getElementById("fullName").value.length > 26) { 
        test_ln = 0; 
        document.getElementById("fullNameValidationError").classList.remove("hide"); 
    } else { 
        test_ln = 1; 
        if (!document.getElementById("fullNameValidationError").classList.contains("hide")) 
            document.getElementById("fullNameValidationError").classList.add("hide"); 
    }

    if (document.getElementById("email").value == "" || document.getElementById("email").value.length < 10 || document.getElementById("email").value.length > 40) { 
        test_e = 0; 
        document.getElementById("emailValidationError").classList.remove("hide"); 
    } else { 
        test_e = 1; 
        if (!document.getElementById("emailValidationError").classList.contains("hide")) 
            document.getElementById("emailValidationError").classList.add("hide"); 
    } 

    if (document.getElementById("salary").value == "" || document.getElementById("salary").value.length < 1 || document.getElementById("salary").value.length > 5) { 
        test_s = 0; 
        document.getElementById("salaryValidationError").classList.remove("hide"); 
    } else { 
        test_s = 1; 
        if (!document.getElementById("salaryValidationError").classList.contains("hide")) 
            document.getElementById("salaryValidationError").classList.add("hide"); 
    } 

    if (document.getElementById("city").value == "" || document.getElementById("city").value.length < 4 || document.getElementById("city").value.length > 80) { 
        test_c = 0; 
        document.getElementById("cityValidationError").classList.remove("hide"); 
    } else { 
        test_c = 1; 
        if (!document.getElementById("cityValidationError").classList.contains("hide")) 
            document.getElementById("cityValidationError").classList.add("hide"); 
    }
    if(test_ln + test_e + test_s + test_c == 4) {
        isValid = true; 
    }
    else {
        isValid = false; 
    }
    return isValid; 
}
function RendezfullName(){
    document.getElementById("emailR").innerHTML="¤";
    document.getElementById("salaryR").innerHTML="¤";
    document.getElementById("cityR").innerHTML="¤";
    if(b1 == 0){
        document.getElementById("fullNameR").innerHTML="^";
        array1.sort(function(a, b) {
        return a.fullName.localeCompare(b.fullName)
       });
       b1 = 1;
    }
    else{
        
        document.getElementById("fullNameR").innerHTML="ˇ";
        b1 = 0;
        array1.reverse(array1.sort(function(a, b) {
            return a.fullName.localeCompare(b.fullName)
           }));
    }
    printArray(); 
}
function Rendezemail(){
    document.getElementById("fullNameR").innerHTML="¤";
    document.getElementById("salaryR").innerHTML="¤";
    document.getElementById("cityR").innerHTML="¤";
    if(b2 == 0){
        document.getElementById("emailR").innerHTML="^";
        array1.sort(function(a, b) {
        return a.email.localeCompare(b.email)
       });
       b2 = 1;
    }
    else{
        
        document.getElementById("emailR").innerHTML="ˇ";
        b2 = 0;
        array1.reverse(array1.sort(function(a, b) {
            return a.email.localeCompare(b.email)
           }));
    }
    printArray(); 
}
function Rendezsalary(){
    document.getElementById("fullNameR").innerHTML="¤";
    document.getElementById("emailR").innerHTML="¤";
    document.getElementById("cityR").innerHTML="¤";
    if(b3 == 0){
        document.getElementById("salaryR").innerHTML="^";
        array1.sort(function(a, b) {
        return a.salary.localeCompare(b.salary)
       });
       b3 = 1;
    }
    else{
        
        document.getElementById("salaryR").innerHTML="ˇ";
        b3 = 0;
        array1.reverse(array1.sort(function(a, b) {
            return a.salary.localeCompare(b.salary)
           }));
    }
    printArray(); 
}
function Rendezcity(){
    document.getElementById("fullNameR").innerHTML="¤";
    document.getElementById("emailR").innerHTML="¤";
    document.getElementById("salaryR").innerHTML="¤";
    if(b4 == 0){
        document.getElementById("cityR").innerHTML="^";
        array1.sort(function(a, b) {
        return a.city.localeCompare(b.city)
       });
       b4 = 1;
    }
    else{
        
        document.getElementById("cityR").innerHTML="ˇ";
        b4 = 0;
        array1.reverse(array1.sort(function(a, b) {
            return a.city.localeCompare(b.city)
           }));
    }
    printArray(); 
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchC1").addEventListener("input", function() {
        filtering();
    });
    document.getElementById("searchC2").addEventListener("input", function() {
        filtering();
    });
    document.getElementById("searchC3").addEventListener("input", function() {
        filtering();
    });
    document.getElementById("searchC4").addEventListener("input", function() {
        filtering();
    });
    document.getElementById("clearsearch").addEventListener("click", function(){
        clearsearchs();
    });
    });

    function filtering() {
        let searchC1 = document.getElementById("searchC1").value.toUpperCase();
        let searchC2 = document.getElementById("searchC2").value.toUpperCase();
        let searchC3 = document.getElementById("searchC3").value.toUpperCase();
        let searchC4 = document.getElementById("searchC4").value.toUpperCase();
        let tableBody = document.getElementById("employeeListBody");
        let rows = tableBody.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName("td");
            let matchesSearchC1 = cells[0].textContent.toUpperCase().includes(searchC1);
            let matchesSearchC2 = cells[1].textContent.toUpperCase().includes(searchC2);
            let matchesSearchC3 = cells[2].textContent.toUpperCase().includes(searchC3);
            let matchesSearchC4 = cells[3].textContent.toUpperCase().includes(searchC4);
            if (matchesSearchC1 && matchesSearchC2 && matchesSearchC3 && matchesSearchC4) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
    function clearsearches() {
        document.getElementById("searchC1").value = "";
        document.getElementById("searchC2").value = "";
        document.getElementById("searchC3").value = "";
        document.getElementById("searchC4").value = "";
        filterTable();
    }
