// BACKEND BILAN ISHLASH

//GET
//POST
//PUT
//DELETE - 

//FETCH()
//AXIOS()


//API => APPLICATION PROGRAMMING INTERFACE

const $result = document.querySelector("#result")

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => renderProducts(data))


const renderProducts  = (data) => {
    data.forEach(product => {
        const $div = document.createElement("div");
        $div.className = "card";
        $div.innerHTML = `
        <img width="300px" src="${product.image}" />
        <h3>${product.title}</h3>
        <p>${product.description.slice(0, 70) + "..."}<p/>
        <strong>$${product.price}</strong>
        <br/>
        <button data-product-id="${product.id}" class="btn">DELETE</button>
        `
        $result.appendChild($div)
    })
}

const handleProductActions = (e) =>{
    if(e.target.classList.contains("btn")){
        const id =  e.target.dataset.productId
        const useragree = confirm("ARE YOU SURE DELETE IS PRODUCT");
        if(useragree){
            fetch(`https://fakestoreapi.com/products/${id}`, {method: "DELETE"})
                    .then(response => response.json())
                    .then(data => console.log(data))
        }
    }
}



document.addEventListener("https://fakestoreapi.com/products", () => {
    
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000); 

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
});


$result.addEventListener("click", handleProductActions)