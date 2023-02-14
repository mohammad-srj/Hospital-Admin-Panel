// $(function () {
//     $(".staff-slider").slick({
//         dots: true,
//         autoplay: true,
//         arrows: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//     });
// })



var options = {
    chart: {
        type: 'line',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
    },
    series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
}

var SurveyChart = new ApexCharts(document.querySelector("#surveyChart"), options);

SurveyChart.render();


//Recover Chart

var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [300, 40]
    }],
    xaxis: {
        categories: ['Last Month', 'Current Month']
    }
}

var RecoverChart = new ApexCharts(document.querySelector("#recoverChart"), options);

RecoverChart.render();

//Death Chart

var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [30, 40]
    }],
    xaxis: {
        categories: ['Last Month', 'Current Month']
    }
}

var DeathChart = new ApexCharts(document.querySelector("#deathChart"), options);

DeathChart.render();