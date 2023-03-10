const loadPhones = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const {data} = await res.json()
    displayPhones(data)
}

 const displayPhones = phones =>{
  console.log(phones)
    const phoneContainer = document.getElementById('all-phones')
    phoneContainer.innerText = '';
      // display no phone found
    const noPhone = document.getElementById('no-found-massege')
    if(phones.length === 0){
      noPhone.classList.remove('d-none');

    }
    else{
      noPhone.classList.add('d-none')
    }
    // display 10 phones only
    phones = phones.slice(0,10);
    phones.forEach(phone =>{
     

     
        // display all phones function
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
                    <div class="card h-100 p-5">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
        
        `;
        phoneContainer.appendChild(phoneDiv)
    })


 }

 document.getElementById('btn-search').addEventListener('click', function(){
  const searchField = document.getElementById('search-field')
  
  const searchText = searchField.value;
  searchField.value = '';
  loadPhones(searchText)

 })


// loadPhones()