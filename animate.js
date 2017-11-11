 var arr, body, tab, tr, td, tn, row, col;
 var n,demo,x,text;
function processFormData() {
  
n=document.getElementById("number").value;
  text=document.getElementById("text");
text.innerHTML = "您輸入的數字為:";
demo=document.getElementById("demo");
demo.innerHTML = n;
  display();
}
function display(){
  x=15-n;
  arr = [
    [15,15,15,15,15,15,15,15,15,15],
    [14,14,14,14,14,14,14,14,14,14],
    [13,13,13,13,13,13,13,13,13,13],
    [12,12,12,12,12,12,12,12,12,12],
    [11,11,11,11,11,11,11,11,11,11],
    [10,10,10,10,10,10,10,10,10,10],
    [9,9,9,9,9,9,9,9,9,9],
    [8,8,8,8,8,8,8,8,8,8],
    [7,7,7,7,7,7,7,7,7,7],
    [6,6,6,6,6,6,6,6,6,6],
    [5,5,5,5,5,5,5,5,5,5],
    [4,4,4,4,4,4,4,4,4,4],
    [3,3,3,3,3,3,3,3,3,3],
    [2,2,2,2,2,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1],
  ];
  body = document.getElementsByTagName('body')[0];
  tab = document.createElement('table');
  for (row = x; row < arr.length; row++){
    tr = document.createElement('tr');
    for (col = 0; col < arr[row].length; col++){
      td = document.createElement('td');
      tn = document.createTextNode(arr[row][col]);
      td.appendChild(tn);
      tr.appendChild(td);
    }
    tab.appendChild(tr);
  }
  body.appendChild(tab);
}
