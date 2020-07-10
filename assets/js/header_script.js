{
    // setting up minimum date for calender
    let cal = document.querySelectorAll(".calendar input");

    var current_date = new Date();

    //date to YMD(YYYY-MM-DD) format
    function ymd(date)
    {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        return y + "-" + (m<=9 ? '0'+m : m) + "-" + (d<=9 ? '0'+d : d);
    }

    for(let i of cal){
        i.setAttribute('min',ymd(current_date));
    };

    let anchor_tag = document.getElementsByTagName('a');

    for(let tags of anchor_tag){
        tags.addEventListener('click', function(event){
            event.preventDefault();

            window.alert("Coming Soon..");
        })
    }
}