export let cart=JSON.parse(localStorage.getItem('cart'));
//localstorage can onlly store string we have to convert back into the array using JSON.parse
if(!cart){
  cart=[
    {
      productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity:2,
      deliveryOptionId:'1'
    },
    {
      productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity:1,
      deliveryOptionId:'2'
    }
  ];
}


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
//localStorage only save strings to save our cart we have to convert it to string using JSON.stringify() this will convert cart into string

export function addToCart(productId){
    let matchingItem;
  
    cart.forEach((cartItem)=>{
      if(productId===cartItem.productId){
        matchingItem=cartItem;
      }
    });
  
    if(matchingItem){
      matchingItem.quantity+=1;
    }else{
      cart.push({
        productId: productId,
        quantity:1,
        deliveryOptionId:'1'
      });
    }

    saveToStorage();
  }

  
export function removeFromCart(productId){
  const newCart=[];
//contain all the item that dont match the above productId
  cart.forEach((cartItem)=>{
    if(cartItem.productId!=productId){
      newCart.push(cartItem);
    }
  });

  cart=newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;
  
  cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
      matchingItem=cartItem;
    }
  });

  matchingItem.deliveryOptionId=deliveryOptionId;

  saveToStorage();
}