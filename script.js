//Получаем все элементы списка
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
 addCloseButton(myNodelist[i]);
}

//Добавляем кнопку закрытия и обработчик событий для каждого элемента списка
function addCloseButton(li){
  let span = document.createElement('SPAN');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  //Назначаем обработчик для скрытия элемента
  span.onclick = function (){
    let div = this.parentElement;
    div.style.display = 'none';
  }
  
}
//Добавляем обработчик клика для списка, используя делегирование событий
let list = document.querySelector ('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle ('checked');
    }
  },
  false
);

//Функция для создания нового элемента списка
function newElement(){
  let inputValue = document.getElementById('myInput').ariaValueMax;
  if(inputValue ===''){
    alert('You must write something!');
    return;
  }
  let li = document.createElement('li');
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById('myUL').appendChild(li);
  document.getElementById('myInput').value ='';

  addCloseButton(li);//Добавляем кнопку закрытия к новому элементу
}
  

    