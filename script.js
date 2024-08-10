const budgetInput = document.querySelector('#budget');
const container = document.querySelector('.products__container');
const itemsSelected = document.querySelector('#items');
const moneySpent = document.querySelector('#spent');
const moneyLeft = document.querySelector('#left');
const moneyLeftContainer = document.querySelector('#left__cont');

container.addEventListener('click', selectProduct);

// select product
function selectProduct(e){
    if(e.target.classList.contains('product')){
        e.target.classList.toggle('selected');
    }
    itemsCount();
}

// total products selected
function itemsCount(){
    // every product with selected class into the node list
    const selectedItems = document.querySelectorAll('.product.selected');
    // count number of elements in the node list
    const numberOfItems = selectedItems.length;
    // display the number of elements selected
    itemsSelected.innerText = numberOfItems;

    countPrices();
}

// total price of items selected
function countPrices(){
    // prices from selected products
    const allPrices = document.querySelectorAll('.product.selected .price');
    // array with all the prices
    const pricesCount = [... allPrices].map(item=>+item.value/100);
    // calculate total price of items selected
    const priceSum = pricesCount.reduce(function(a,b){
        return a+b
    },0)
    // display the total money spent
    moneySpent.innerHTML = priceSum.toFixed(2);

    calculateLeft(priceSum);
}

// calculate budget left
function calculateLeft(spent){
    // get value from our budget
    budget = +budgetInput.value;
    // budget minus the money we've spent so far
    const total = budget - (spent.toFixed(2));
    // display the money left
    moneyLeft.innerHTML = total.toFixed(2)

    if(total > 0){
        moneyLeftContainer.style.backgroundColor = '#ff006e';
        moneyLeftContainer.style.color = 'white'
    } else if(total < 0){
        moneyLeftContainer.style.backgroundColor = 'transparent';
        moneyLeftContainer.style.border = '1px solid #ff006e';
        moneyLeftContainer.style.color = '#ff006e';
    }
}