function generate_by_enter() {
    let info = faker.helpers.createCard();

    console.log(info);

    let{ name, username, email, address:{ streetA, streetB, city, country, geo:{ lat, lng}, state, zipcode}, phone, website }= info;

    function some () {
        let{company:{name}} = info;
        return name;
    }

    // let company_name = {company:{ name }};
    // document.getElementById(#name) = name;
    console.log(name);
    console.log(username);
    console.log(email);
    console.log(streetA);
    console.log(streetB);
    console.log(city);
    console.log(country);
    console.log(lat);
    console.log(lng);
    console.log(state);
    console.log(phone);
    console.log(website);
    console.log(some());
    console.log(zipcode);

    document.getElementById("name").value = name;
    document.getElementById("username").value = username;
    document.getElementById("email").value = email;
    document.getElementById("city").value = city;
    document.getElementById("country").value = country;
    document.getElementById("streetA").value = streetA;
    document.getElementById("streetB").value = streetB;
    document.getElementById("state").value = state;
    document.getElementById("lattitude").value = lat;
    document.getElementById("longitude").value = lng;
    document.getElementById("Phone_Number").value = phone;
    document.getElementById("website_name").value = website;
    document.getElementById("company_name").value = some();
    document.getElementById("zip-code").value = zipcode;
}

let button = document.querySelector("button");

button.addEventListener("click", () => {
    generate_by_enter();
}); 


let body = document.querySelector("body");

body.addEventListener('keypress', (e) => {
    if(e.keyCode == "13"){
        generate_by_enter();
    }
});
