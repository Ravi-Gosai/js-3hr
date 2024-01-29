let form = document.querySelector('form');
let ul = document.querySelector('ul')


form.addEventListener('submit',(event)=>{
    event.preventDefault();


 

    let obj = {
        item : event.target.item.value,
        dec : event.target.dec.value,
        price : event.target.price.value,
        quantity : event.target.quantity.value

    }
    console.log(obj)
    axios.post('https://crudcrud.com/api/d5de5f51661849cab003e50408449ca0/p8',obj)
    .then(res=>{
        console.log("ravi",res.data['_id'])

        let li = document.createElement('li');
        
        li.innerHTML = `Item: ${res.data.item}  Description: ${res.data.dec}  Price: ${res.data.price}  Quantity: ${res.data.quantity}    <button onclick="buy1(event)"  class="buy1">buy-1</button><button class="buy2">buy-2</button><button onclick="buy1(event)" data-qun="${res.data.quantity}"  data-id="${res.data['_id']}" class="buy3">buy-3</button> <br><br>`;
        
        ul.appendChild(li);

        let btn = 

        console.log(document.querySelectorAll('.buy1')[0])
    })
})


window.addEventListener('DOMContentLoaded', ()=>{

    axios.get('https://crudcrud.com/api/d5de5f51661849cab003e50408449ca0/p8')
    .then(res=>{

        // console.log(res.data)
        
        
        for(let i = 0; i<res.data.length; i++){
            
            let li = document.createElement('li');
            
            li.innerHTML = `Item: ${res.data[i].item}  Description: ${res.data[i].dec}  Price: ${res.data[i].price}  Quantity: ${res.data[i].quantity}    <button onclick="buy1(event)"  class="buy1">buy-1</button><button class="buy2">buy-2</button><button onclick="buy1(event)" data-qun="${res.data[i].quantity}"  data-id="${res.data[i]['_id']}" class="buy3">buy-3</button> <br><br>`;
            
            ul.appendChild(li);

        }

    })
})


function buy1(event){

let id = event.target.nextSibling.nextSibling.getAttribute("data-id")
let currQuantity = parseInt(event.target.nextSibling.nextSibling.getAttribute("data-qun")) ;
    // console.log(event.target.nextSibling.nextSibling.getAttribute("data-id"));
    // console.log(event.target.nextSibling.nextSibling.getAttribute("data-qun"));

    // console.log(event.target.getAttribute("data-qun"));


    console.log(typeof currQuantity,currQuantity);
    // console.log(currQuantity)

   

        console.log('d')


        if(currQuantity > 0){




            axios.get(`https://crudcrud.com/api/d5de5f51661849cab003e50408449ca0/p8/${id}`)
            .then(res=>{
                // console.log(res.data);
                let obj2 = res.data

                
                console.log(obj2.quantity)

                obj2.quantity = obj2.quantity -1



                console.log(obj2.quantity)

                axios.put(`https://crudcrud.com/api/d5de5f51661849cab003e50408449ca0/p8/${id}`, obj2)

            })

            
           
           
        }
    
}



    

