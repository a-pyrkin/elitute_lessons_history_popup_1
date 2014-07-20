	var list = new Array();


function AddElementList(){
	var NewElemet = document.getElementById("new_element").value;
	var spisok = document.getElementById('list');
	var li = document.createElement('LI');
	list.push(NewElemet);
	AddToHtml(list,spisok,li);
};

function DeleteElement(j)
{
	var spisok = document.getElementById('list');
	var li = document.createElement('LI');
	for(j; j <= (list.length - 1);j++)
	{
		list[j] = list[j + 1];
	}
	list.pop();
	for(var i = 0; i <= list.length; i++)
	{
		spisok.removeChild(spisok.lastChild);
	}
	for(var i = 0; i < list.length; i++)
	{
		var spisok = document.getElementById('list');
		var li = document.createElement('LI');
		li.innerHTML = list[i] + '<span onclick="DeleteElement('+ i +')">Delete</span>';
		spisok.appendChild(li);
	}

};


function AddToHtml(list,spisok,li){
	for (var i = 0; i < list.length;i++)
	{
		if (list[i] != ""){
			li.innerHTML = list[i] + '<span onclick="DeleteElement('+ i +')">Delete</span>';
			spisok.appendChild(li);
		}else{
		alert("Введите новый элемент!");
		}
	}
}