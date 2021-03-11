const openSlate = () => {
    const vid = document.getElementById("myVideo");
    vid.pause();

    document.getElementById("slate").style.display = "initial";

    const url = 'https://service.innovid.com/s/dataproxy/proxy-cb-nh.php?c=3600&url=http%3A%2F%2Fapi.worldweatheronline.com%2Fpremium%2Fv1%2Fweather.ashx%3Fkey%3D8mkjmgnh2fhk6h4hdak5syay%26q%3Dminneapolis%26format%3Djson%26num_of_days%3D3';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("loading").style.display = "none";

            const day1 = data.data.weather[0];
            const day2 = data.data.weather[1];
            const day3 = data.data.weather[2];

            document.getElementById("date1").innerHTML = day1.date;
            document.getElementById("date2").innerHTML = day2.date;
            document.getElementById("date3").innerHTML = day3.date;

            document.getElementById("day1").innerHTML = day1.maxtempC + '°';
            document.getElementById("day2").innerHTML = day2.maxtempC + '°';
            document.getElementById("day3").innerHTML = day3.maxtempC + '°';

            document.getElementById("night1").innerHTML = day1.mintempC + '°';
            document.getElementById("night2").innerHTML = day2.mintempC + '°';
            document.getElementById("night3").innerHTML = day3.mintempC + '°';

            document.getElementById("condition1a").innerHTML = day1.hourly[5].weatherDesc[0].value;
            document.getElementById("condition2a").innerHTML = day2.hourly[5].weatherDesc[0].value;
            document.getElementById("condition3a").innerHTML = day3.hourly[5].weatherDesc[0].value;
            document.getElementById("condition1b").innerHTML = day1.hourly[7].weatherDesc[0].value;
            document.getElementById("condition2b").innerHTML = day2.hourly[7].weatherDesc[0].value;
            document.getElementById("condition3b").innerHTML = day3.hourly[7].weatherDesc[0].value;

            document.getElementById("img1a").src = day1.hourly[5].weatherIconUrl[0].value;
            document.getElementById("img2a").src = day2.hourly[5].weatherIconUrl[0].value;
            document.getElementById("img3a").src = day3.hourly[5].weatherIconUrl[0].value;
            document.getElementById("img1b").src = day1.hourly[7].weatherIconUrl[0].value;
            document.getElementById("img2b").src = day2.hourly[7].weatherIconUrl[0].value;
            document.getElementById("img3b").src = day3.hourly[7].weatherIconUrl[0].value;

            document.getElementById("sunrise1").innerHTML = day1.astronomy[0].sunrise;
            document.getElementById("sunrise2").innerHTML = day2.astronomy[0].sunrise;
            document.getElementById("sunrise3").innerHTML = day3.astronomy[0].sunrise;

            document.getElementById("sunset1").innerHTML = day1.astronomy[0].sunset;
            document.getElementById("sunset2").innerHTML = day2.astronomy[0].sunset;
            document.getElementById("sunset3").innerHTML = day3.astronomy[0].sunset;

            document.getElementById("cards").style.display = "flex";
        });

};

const closeSlate = () => {
    document.getElementById("slate").style.display = "none";
    document.getElementById("cards").style.display = "none";
    document.getElementById("loading").style.display = "initial";

    const vid = document.getElementById("myVideo");
    vid.play();
};