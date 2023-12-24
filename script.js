if(typeof(Storage) === "undefined"){
    alert("Sorry your browser doesnot support web storag");
}
let restaurant = document.querySelector("restaurantList");

document.addEventListener('DOMContentLoaded',(event) => {
    if(window.location.pathname.includes('addres.html')){
        document.getElementById('addRestaurantForm').addEventListener('submit', addRestaurant);
    }else if (window.location.pathname.includes('reslist.html')){
        displayRestaurants();
    }
});

function addRestaurant(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const cuisine = document.getElementById('cuisine').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const rating = document.getElementById('rating').value;

    let restaurants = JSON.parse(localStorage.getItem('restaurants')) ||[];
    restaurants.push({id:Date.now(),name,cuisine,address,city,rating});
    localStorage.setItem('restaurants',JSON.stringify(restaurants));

    alert("Retaurant added sucessfully");
    document.getElementById('addRestaurantForm').reset();
}

function displayRestaurants(){
    let restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    const restaurantList = document.getElementById('restaurantList');
    restaurantList.innerHTML = restaurants.map((restaurant, index) =>`
     <div class="restaurant-item">
        <p><strong>Name:</strong> ${restaurant.name}</p>
        <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>Rating:</strong> ${restaurant.rating}</p>
        <div class="button-group">
            <button class="btn1" onclick="editRestaurant(${index})">View Details</button>
            <button class="btn2" onclick="editRestaurant(${index})">Update</button>
            <button class="btn3" onclick="deleteRestaurant(${index})">Delete</button>
        </div>
     </div>
    `).join('');
}



function deleteRestaurant(index){
    let restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.splice(index,1);
    localStorage.setItem('restaurants',JSON.stringify(restaurant));
    displayRestaurants();

}