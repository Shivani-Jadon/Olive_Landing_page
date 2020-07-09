{   
    let location_item = [
        {
            background_img : "./images/Dev/Browse_by_location/Banglore.jpg",
            city : "Banglore"
        },
        {
            background_img : "../images/Dev/Browse_by_location/Gurugram.jpg",
            city : "Gurugram"
        },
        {
            background_img : "../images/Dev/Browse_by_location/Delhi.jpg",
            city : "Delhi"
        },
        {
            background_img : "../images/Dev/Browse_by_location/Hyderabad.jpg",
            city : "Hyderabad"
        },
        {
            background_img : "../images/Dev/Browse_by_location/Jaipur",
            city : "Jaipur"
        },
        {
            background_img : "../images/Dev/Browse_by_location/Kolkata.jpg",
            city : "Kolkata"
        },
        {
            background_img : "../images/Dev/Browse_by_location/Noida.jpg",
            city : "Noida"
        },
        {
            background_img : "../images/Dev/Browse_by_location/Quote.jpg",
            city : ""
        }
    ];

    let location_cont = document.querySelector('#location-container ul')
    
    location_item.forEach(function(item){
        let city_list = document.createElement('li');
        city_list.style.backgroundImage = item.background_img;
        let city_div = document.createElement('div');
        city_div.className = "city-div";
        let city_name = document.createElement('span');
        city_name.innerText = item.city;
        let arrow = document.createElement('img');
        arrow.src = "./images/Dev/Cityscape_Footer.png";

        city_name.appendChild(arrow);
        city_div.appendChild(city_name);
        city_list.appendChild(city_div);
        location_cont.appendChild(city_list);
    })
}