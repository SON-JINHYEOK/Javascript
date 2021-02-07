const items = document.querySelector('.items');
const input = document.querySelector('.footer-input');
const addBtn = document.querySelector('.footer-button');

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아 온다
    const text = input.value;
    if(text === '') {
        input.focus();
        return;
    }
    //2. 새로운 아이템을만든다( 텍스트 + 삭제 버튼 )
    const item = createItem(text);
    //3. items 라는 컨테이너 안에 새로만든 아이템을 추가 한다
    items.appendChild(item);
    //4. 새로 추가된 아이템 으로 이동 스크롤링
    item.scrollIntoView({block : 'center'}); 
    //5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

function createItem (text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class' , 'item-row');

    const item = document.createElement('div');
    item.setAttribute('class' , 'item');

    const name = document.createElement('span')
    name.setAttribute('class' , 'item-name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class' , 'item-delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click' , () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class' , 'item-divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;

}

addBtn.addEventListener('click' , () => {
    onAdd();
});

input.addEventListener('keypress' , (event) => {
    if( event.key === 'Enter') {
        onAdd();
    }
})