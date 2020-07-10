{   
    // browse location
    let location_item = [
        {
            background_img : "./assets/images/Dev/Browse_by_location/Banglore.jpg",
            city : "Banglore"
        },
        {
            background_img : "assets/images/Dev/Browse_by_location/Gurugram.jpg",
            city : "Gurugram"
        },
        {
            background_img : "assets/images/Dev/Browse_by_location/Delhi.jpg",
            city : "Delhi"
        },
        {
            background_img : "assets/images/Dev/Browse_by_location/Hyderabad.jpg",
            city : "Hyderabad"
        },
        {
            background_img : "assets/images/Dev/Browse_by_location/Jaipur.jpg",
            city : "Jaipur"
        },
        {
            background_img : "assets/images/Dev/Browse_by_location/Kolkata.jpg",
            city : "Kolkata"
        },
        {
            background_img : "assets/images/Dev/Browse_by_location/Noida.jpg",
            city : "Noida"
        },
        {
            background_img : "assets/images/Dev/Browse_by_location/Quote.jpg",
            city : ""
        }
    ];

    let location_cont = document.querySelector('#location-container ul')
    
    // adding elemnts in the list
    location_item.forEach(function(item){
        let city_list = document.createElement('li');
        city_list.style.backgroundImage = "url('"+item.background_img+"')";
        let city_div = document.createElement('div');
        city_div.className = "city-div";
        let city_name = document.createElement('span');
        city_name.innerText = item.city + " ";
        let arrow = document.createElement('img');
        arrow.className = "city-arrow";
        arrow.src = "./assets/images/Dev/Arrow_Right_White.png";
        city_name.appendChild(arrow);
        city_div.appendChild(city_name);
        city_list.appendChild(city_div);
        location_cont.appendChild(city_list);
    });


    // features
    let features_item = [
        {
            image : "assets/images/Dev/Why Olive/1.jpg",
            content : "Private non-sharing apartments"
        },
        {
            image : "assets/images/Dev/Why Olive/2.jpg",
            content : "Fully serviced apartments"
        },
        {
            image : "assets/images/Dev/Why Olive/3.jpg",
            content : "Low rates top savings"
        },
        {
            image : "assets/images/Dev/Why Olive/4.jpg",
            content : "Reviewd by real traveller"
        },
        {
            image : "assets/images/Dev/Why Olive/5.jpg",
            content : "Value for money"
        },
        {
            image : "assets/images/Dev/Why Olive/6.jpg",
            content : "We are secure"
        },
        {
            image : "assets/images/Dev/Why Olive/7.jpg",
            content : "Enjoy more space"
        },
        {
            image : "assets/images/Dev/Why Olive/8.jpg",
            content : "Live like a local"
        },
        {
            image : "assets/images/Dev/Why Olive/9.jpg",
            content : "Feel at home"
        },
        {
            image : "assets/images/Dev/Why Olive/10.jpg",
            content : "More choices"
        }
    ];


    let feature_list = document.querySelector('#features ul');


    features_item.forEach(function(item){

        let feature_li = document.createElement('li');
        let div1 = document.createElement('div');
        let feature_img = document.createElement('img');
        feature_img.src = item.image;
        div1.appendChild(feature_img);
        let div2 = document.createElement('div');
        div2.textContent = item.content;
        feature_li.appendChild(div1);
        feature_li.appendChild(div2);
        feature_list.appendChild(feature_li);
    })

}