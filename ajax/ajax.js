code="RT8EHPezkod6";
url="http://gamf.nhely.hu/ajax2/";
var xmlHttp=new XMLHttpRequest();
function read() {
document.getElementById("code").innerHTML="code="+code;
xmlHttp.open("POST",url,true);
xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var params = "code="+code+"&op=read";
xmlHttp.onreadystatechange = () => {
if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
let data = xmlHttp.responseText;
data = JSON.parse(data);
let list = data.list;
str="<H1>Read</H1>";
str+="<p>Number of records: "+data.rowCount+"</p>";
str+="<p>Last max "+data.maxNum+" records:</p>";
str+="<table><tr><th>id</th><th>name</th><th>height</th><th>weight</th><th>code</th></tr>";
for(let i=0; i<list.length; i++)
str +=
"<tr><td>"+list[i].id+"</td><td>"+list[i].name+"</td><td>"+list[i].height+"</td><td>"+list[i].weight+"</td><td>"+list[i].code+"</td></tr>";
str +="</table>";
document.getElementById("readDiv").innerHTML=str;
}
};
xmlHttp.send(params);
}
function create(){
// name: reserved word
nameStr = document.getElementById("name1").value;
height = document.getElementById("height1").value;
weight = document.getElementById("weight1").value;
if(nameStr.length>0 && nameStr.length<=30 && height.length>0 && height.length<=30 &&
weight.length>0 && weight.length<=30 && code.length<=30){
xmlHttp.open("POST",url,true);
xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var params = "code="+code+"&op=create&name="+nameStr+"&height="+height+"&weight="+weight;
xmlHttp.onreadystatechange = () => {
if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
let data = xmlHttp.responseText;
if(data>0)
str="Create successful!";
else
str="Create NOT successful!";
document.getElementById("createResult").innerHTML=str;
document.getElementById("name1").value="";
document.getElementById("height1").value="";
document.getElementById("weight1").value="";
read();
}
};
xmlHttp.send(params);
}
else
document.getElementById("createResult").innerHTML="Validation error!!";
}
function getDataForId() {
xmlHttp.open("POST",url,true);
xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var params = "code="+code+"&op=read";
xmlHttp.onreadystatechange = () => {
if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
let data = xmlHttp.responseText;
data = JSON.parse(data);
let list = data.list;
for(let i=0; i<list.length; i++)
if(list[i].id==document.getElementById("idUpd").value){
document.getElementById("name2").value=list[i].name;
document.getElementById("height2").value=list[i].height;
document.getElementById("weight2").value=list[i].weight;
}
}
};
xmlHttp.send(params);
}
function update(){
// name: reserved word
id = document.getElementById("idUpd").value;
nameStr = document.getElementById("name2").value;
height = document.getElementById("height2").value;
weight = document.getElementById("weight2").value;
if(id.length>0 && id.length<=30 && nameStr.length>0 && nameStr.length<=30 && height.length>0 &&
height.length<=30 && weight.length>0 && weight.length<=30 && code.length<=30){
xmlHttp.open("POST",url,true);
xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var params =
"code="+code+"&op=update&id="+id+"&name="+nameStr+"&height="+height+"&weight="+weight;
xmlHttp.onreadystatechange = () => {
if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
let data = xmlHttp.responseText;
if(data>0)
str="Update successful!";
else
str="Update NOT successful!";
document.getElementById("updateResult").innerHTML=str;
document.getElementById("idUpd").value="";
document.getElementById("name2").value="";
document.getElementById("height2").value="";
document.getElementById("weight2").value="";
read();
}
};
xmlHttp.send(params);
}
else
document.getElementById("updateResult").innerHTML="Validation error!!";
}
//delete: resetved word
function deleteF(){
id = document.getElementById("idDel").value;
if(id.length>0 && id.length<=30){
- 83 -xmlHttp.open("POST",url,true);
xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var params = "code="+code+"&op=delete&id="+id;
xmlHttp.onreadystatechange = () => {
if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
let data = xmlHttp.responseText;
if(data>0)
str="Delete successful!";
else
str="Delete NOT successful!";
document.getElementById("deleteResult").innerHTML=str;
document.getElementById("idDel").value="";
read();
}
};
xmlHttp.send(params);
}
else
document.getElementById("deleteResult").innerHTML="Validation error!!";
}
window.onload = function() {
read();
};