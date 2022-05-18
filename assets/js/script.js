var selectedRow = null;

function onFormSubmit(){
    console.log(formData);
    if(validate()){
        var formData = readFormData();
        console.log(formData);
        if(selectedRow == null){
            insertNewRecord(formData);
        }else{
            updateRecord(formData);
        }
        
        resetForm();
    }
}

function readFormData(){

    var formData = {};
    formData["nom"] = document.getElementById("nom").value;
    formData["id"] = document.getElementById("id").value;
    formData["prenom"] = document.getElementById("prenom").value;
    formData["sexe"] = document.getElementById("sexe").value;
    formData["adresse"] = document.getElementById("adresse").value;
    formData["niveau"] = document.getElementById("niveau").value;

    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    if(!isValid){}
    else{
    cell2 = newRow.insertCell(0);
    cell2.innerHTML = data.id;

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.nom;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prenom;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.sexe;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.adresse;

    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.niveau;

    cell4 = newRow.insertCell(6);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a  onClick="onDelete(this)">Delete</a>`;
            }
}

function resetForm(){
    document.getElementById('id').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    document.getElementById('sexe').value = '';
    document.getElementById('adresse').value = '';
    document.getElementById('niveau').value = '';

    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('id').value = selectedRow.cells[0].innerHTML;
    document.getElementById('nom').value = selectedRow.cells[1].innerHTML;
    document.getElementById('prenom').value = selectedRow.cells[2].innerHTML;
    document.getElementById('sexe').value = selectedRow.cells[3].innerHTML;
    document.getElementById('adresse').value = selectedRow.cells[4].innerHTML;
    document.getElementById('niveau').value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData){

    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.nom;
    selectedRow.cells[2].innerHTML = formData.prenom;
    selectedRow.cells[3].innerHTML = formData.sexe;
    selectedRow.cells[4].innerHTML = formData.adresse;
    selectedRow.cells[5].innerHTML = formData.niveau;


}

function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("emplist").deleteRow(row.rowIndex);
        resetForm();
    }
    
}

function validate(){
    isValid = true;
if(document.getElementById('nom').value == "" || document.getElementById('id').value=="" || document.getElementById('prenom').value==""){
        isValid = false;
        
        document.getElementById('ValidationNom').classList.remove("hide");
        document.getElementById('ValidationPrenom').classList.remove("hide");
        document.getElementById('ValidationId').classList.remove("hide");
    }else{
            isValid = true;
            document.getElementById('ValidationNom').classList.add("hide");
            document.getElementById('ValidationPrenom').classList.add("hide");
            document.getElementById('ValidationId').classList.add("hide");
        
        }

    return isValid;
}
	