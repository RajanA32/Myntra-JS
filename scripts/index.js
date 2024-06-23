let bagItems;
onload();


function onload(){
  let bagItemStr = localStorage.getItem('bagItems');
  bagItems =bagItemStr ? JSON.parse(bagItemStr) : [];
  displayItemHomePage();
  displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length > 0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  }else{
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemHomePage(){
  let itemsContainterElement = document.querySelector('.items-container');
  if(!itemsContainterElement){
    return;
  }

let innerHTML ='';
items.forEach(item => {
  innerHTML +=`
<div class="item-container">
  <img class="item-image" src="${item.image}" alt="">
  <div class="rating">
      ${item.rating.stars}⭐ | ${item.rating.count}k
  </div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
      <span class="current-price">Rs${item.current_price} </span>
      <span class="original-price">Rs${item.original_price} </span>
      <span class="discount-price">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
</div>`
  
});

itemsContainterElement.innerHTML = innerHTML;
}
