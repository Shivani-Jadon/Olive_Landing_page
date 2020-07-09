{
    let entire_home_items = [
        "Delhi","Mumbai","Kolkata","Noida","gurugram","Jaipur"
    ]; 

    let top_dest_items = [
        "Mumbai","Kolkata","Delhi","Noida","gurugram","Jaipur"
    ];

    let company_info_items = [
        "about us","offers","bookings","contact","blog","faq"
    ];

    let learn_items = [
        "Terms & Condition","Privacy policy","refund & cancellation","online payemnt","direct payment"
    ];

    // appending elements in the entire_home list
    for(let item of entire_home_items){
        
        let entire_home_li = $("<li>").text(item);

        $("#entire-home-list").append(entire_home_li);
    };
    
    // appending elements in the top destination list
    for(let item of top_dest_items){
        
        let entire_home_li = $("<li>").text(item);

        $("#top-dest-list").append(entire_home_li);
    };

    // appending elements in the company info list
    for(let item of company_info_items){
        
        let entire_home_li = $("<li>").text(item);

        $("#company-info").append(entire_home_li);
    };

    // appending elements in the learn more list
    for(let item of learn_items){
        
        let entire_home_li = $("<li>").text(item);

        $("#learn-more-list").append(entire_home_li);
    };

}