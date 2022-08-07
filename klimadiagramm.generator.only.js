<script type="text/javascript" src="https://geographie-im-unterricht.de/files/chart.js/chart.js"></script>
      
<script>
let climateChart = undefined;
   
// calculate maximum and minimum values for temperature and rain and evaporation
function maxRain(){
            var arr = document.querySelectorAll(".rain");
            var emptyarray = [];
            arr.forEach((elem) => {
                emptyarray.push(elem.value);
            })
            var max = Math.max.apply(null, emptyarray);
            document.getElementById("highRain").innerHTML=max;
    }
function maxTemp(){
            var arr = document.querySelectorAll(".temperature");
            var emptyarray = [];
            arr.forEach((elem) => {
                emptyarray.push(elem.value);
            })
            var max = Math.max.apply(null, emptyarray);
            document.getElementById("highTemp").innerHTML=max;
    }
function maxEva(){
            var arr = document.querySelectorAll(".evaporation");
            var emptyarray = [];
            arr.forEach((elem) => {
                emptyarray.push(elem.value);
            })
            var max = Math.max.apply(null, emptyarray);
            document.getElementById("highEva").innerHTML=max;
    }
function minRain(){
            var arr = document.querySelectorAll(".rain");
            var emptyarray = [];
            arr.forEach((elem) => {
                emptyarray.push(elem.value);
            })
            var max = Math.min.apply(null, emptyarray);
            document.getElementById("lowRain").innerHTML=max;
    }
function minTemp(){
            var arr = document.querySelectorAll(".temperature");
            var emptyarray = [];
            arr.forEach((elem) => {
                emptyarray.push(elem.value);
            })
            var max = Math.min.apply(null, emptyarray);
            document.getElementById("lowTemp").innerHTML=max;
    }
function minEva(){
            var arr = document.querySelectorAll(".evaporation");
            var emptyarray = [];
            arr.forEach((elem) => {
                emptyarray.push(elem.value);
            })
            var max = Math.min.apply(null, emptyarray);
            document.getElementById("lowEva").innerHTML=max;
    }

// now create climate chart
function create_climateChart() {
// general information
  let place = document.getElementById("place").value;
   let altitude = document.getElementById("altitude").value;
  let coordinates = document.getElementById("coordinates").value; 
// values for rain
  let JanRain = document.getElementById("JanRain").value;
   let FebRain = document.getElementById("FebRain").value;
  let MarRain = document.getElementById("MarRain").value;
   let AprRain = document.getElementById("AprRain").value;
  let MayRain = document.getElementById("MayRain").value;
   let JunRain = document.getElementById("JunRain").value;
  let JulRain = document.getElementById("JulRain").value;
   let AugRain = document.getElementById("AugRain").value;
  let SepRain = document.getElementById("SepRain").value;
   let OctRain = document.getElementById("OctRain").value;
  let NovRain = document.getElementById("NovRain").value;
   let DecRain = document.getElementById("DecRain").value;
// values for temperature
  let JanTemp = document.getElementById("JanTemp").value;
   let FebTemp = document.getElementById("FebTemp").value;
  let MarTemp = document.getElementById("MarTemp").value;
   let AprTemp = document.getElementById("AprTemp").value;
  let MayTemp = document.getElementById("MayTemp").value;
   let JunTemp = document.getElementById("JunTemp").value;
  let JulTemp = document.getElementById("JulTemp").value;
   let AugTemp = document.getElementById("AugTemp").value;
  let SepTemp = document.getElementById("SepTemp").value;
   let OctTemp = document.getElementById("OctTemp").value;
  let NovTemp = document.getElementById("NovTemp").value;
   let DecTemp = document.getElementById("DecTemp").value;
// !now force proportional y-axes    
// set values for min and max on y-axes
  let minTemp = document.getElementById("lowTemp").value;
   let maxTemp = document.getElementById("highTemp").value;
  let minRain = document.getElementById("lowRain").value;
   let maxRain = document.getElementById("highRain").value;
  let minEva = document.getElementById("lowEva").value;
   let maxEva = document.getElementById("highEva").value;
// values for evaporation
  let JanEva = document.getElementById("JanEva").value;
   let FebEva = document.getElementById("FebEva").value;
  let MarEva = document.getElementById("MarEva").value;
   let AprEva = document.getElementById("AprEva").value;
  let MayEva = document.getElementById("MayEva").value;
   let JunEva = document.getElementById("JunEva").value;
  let JulEva = document.getElementById("JulEva").value;
   let AugEva = document.getElementById("AugEva").value;
  let SepEva = document.getElementById("SepEva").value;
   let OctEva = document.getElementById("OctEva").value;
  let NovEva = document.getElementById("NovEva").value;
   let DecEva = document.getElementById("DecEva").value;
// force 0 on y-rain-axis
    if(minTemp > 0){
        minTemp0 = 0;
    } else {
        minTemp0 = minTemp;
    }
// round up to the nearest 10
    if(minTemp0 < 0){
        minTemp0rounded = Math.floor(minTemp0 / 10) * 10;
    } else {
        minTemp0rounded = Math.ceil(minTemp0 / 10) * 10;
    }
   let maxTemprounded = Math.ceil(maxTemp / 10) * 10;
    let maxRainrounded = Math.ceil(maxRain / 20) * 20;
   let maxEvarounded = Math.ceil(maxEva / 20) * 20;
// average temp
    let avTemp = Math.round((JanTemp - - FebTemp - - MarTemp - - AprTemp - - MayTemp - - JunTemp - - JulTemp - - AugTemp - - SepTemp - - OctTemp - - NovTemp - - DecTemp) / 12)
// average eva
    let anEva = Math.round((JanEva - - FebEva - - MarEva - - AprEva - - MayEva - - JunEva - - JulEva - - AugEva - - SepEva - - OctEva - - NovEva - - DecEva) / 12)
// annual rain
    let anRain = (JanRain - - FebRain - - MarRain - - AprRain - - MayRain - - JunRain - - JulRain - - AugRain - - SepRain - - OctRain - - NovRain - - DecRain);
// min / max evaporation
    if(maxEvarounded >= maxRainrounded) {
        maxRainrounded = maxEvarounded;
    }
// prevent low y-temp-axis
    if(maxTemprounded < (maxRainrounded / 2)){
        maxTemprounded = (maxRainrounded / 2);
    }
    if(maxTemprounded < (maxEvarounded / 2)){
        maxTemprounded = (maxEvarounded / 2);
    }
// prevent same scale on y-temp- & y-rain-axes
    if(maxRainrounded <= maxTemprounded){
        maxRainrounded = (maxTemprounded * 2) ;
    }
    if(maxEvarounded <= maxTemprounded){
        maxEvarounded = (maxTemprounded * 2) ;
    } 
// customize stepsize over 100
    if(JanRain > 100){
        JanRain = ((JanRain - 100) / 5 + 100) ;
    }
    if(FebRain > 100){
        FebRain = ((FebRain - 100) / 5 + 100) ;
    }
    if(MarRain > 100){
        MarRain = ((MarRain - 100) / 5 + 100) ;
    }
    if(AprRain > 100){
        AprRain = ((AprRain - 100) / 5 + 100) ;
    }
    if(MayRain > 100){
        MayRain = ((MayRain - 100) / 5 + 100) ;
    }
    if(JunRain > 100){
        JunRain = ((JunRain - 100) / 5 + 100) ;
    }
    if(JulRain > 100){
        JulRain = ((JulRain - 100) / 5 + 100) ;
    }
    if(AugRain > 100){
        AugRain = ((AugRain - 100) / 5 + 100) ;
    }
    if(SepRain > 100){
        SepRain = ((SepRain - 100) / 5 + 100) ;
    }
    if(OctRain > 100){
        OctRain = ((OctRain - 100) / 5 + 100) ;
    }
    if(NovRain > 100){
        NovRain = ((NovRain - 100) / 5 + 100) ;
    }
    if(DecRain > 100){
        DecRain = ((DecRain - 100) / 5 + 100) ;
    }
    if(JanEva > 100){
        JanEva = ((JanEva - 100) / 5 + 100) ;
    }
    if(FebEva > 100){
        FebEva = ((FebEva - 100) / 5 + 100) ;
    }
    if(MarEva > 100){
        MarEva = ((MarEva - 100) / 5 + 100) ;
    }
    if(AprEva > 100){
        AprEva = ((AprEva - 100) / 5 + 100) ;
    }
    if(MayEva > 100){
        MayEva = ((MayEva - 100) / 5 + 100) ;
    }
    if(JunEva > 100){
        JunEva = ((JunEva - 100) / 5 + 100) ;
    }
    if(JulEva > 100){
        JulEva = ((JulEva - 100) / 5 + 100) ;
    }
    if(AugEva > 100){
        AugEva = ((AugEva - 100) / 5 + 100) ;
    }
    if(SepEva > 100){
        SepEva = ((SepEva - 100) / 5 + 100) ;
    }
    if(OctEva > 100){
        OctEva = ((OctEva - 100) / 5 + 100) ;
    }
    if(NovEva > 100){
        NovEva = ((NovEva - 100) / 5 + 100) ;
    }
    if(DecEva > 100){
        DecEvan = ((DecEva - 100) / 5 + 100) ;
    }
// prevent high y-axis under 100
    if(parseInt((maxRainrounded - 100) / 5 + 100) < 100) {
        maxRainrounded = maxRainrounded;
    } else {
        maxRainrounded = parseInt(Math.ceil(((maxRainrounded - 100) / 5 + 100) / 20) * 20);
    }
    if(parseInt((maxTemprounded - 50) / 5 + 50) < 50) {
        maxTemprounded = maxTemprounded;
    } else {
        maxTemprounded = parseInt(Math.ceil(((maxTemprounded - 50) / 5 + 50) / 10) *10);
    }
    if(parseInt((maxEvarounded - 100) / 5 + 100) < 100) {
        maxEvarounded = maxEvarounded;
    } else {
        maxEvarounded = parseInt(Math.ceil(((maxEvarounded - 100) / 5 + 100) / 20) * 20);
    }
// prevent wrong scale ( again ... Jesus :| )
    if(maxTemprounded < 31 && maxRainrounded < 41) {
        maxTemprounded = 40;
        maxRainrounded = 80
    }
    if(maxTemprounded < 31 && maxEvarounded < 41) {
        maxTemprounded = 40;
        maxEvarounded = 80
    }
// min / max evaporation
    if(maxRainrounded >= maxEvarounded) {
        maxEvarounded = maxRainrounded;
    }
// add city/place name
  setTimeout(function writeText(){
    var c = document.getElementById("climateChart");
    var ctx = c.getContext("2d");
    ctx.font = "bold 25px Roboto";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText([place], 59, 20);
    }, 1500);
// add city/place altitude
  setTimeout(function writeText(){
    var c = document.getElementById("climateChart");
    var ctx = c.getContext("2d");
    ctx.font = "20px Roboto";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText([[altitude],''," m ü.M."].join(''), 57, 42);
    }, 1500);
// add city/place coordinates
  setTimeout(function writeText(){
    var c = document.getElementById("climateChart");
    var ctx = c.getContext("2d");
    ctx.font = "20px Roboto";
    ctx.textAlign = "right";
    ctx.fillStyle = "black";
    ctx.fillText([coordinates], 440, 42);
    }, 1500);
// add average temperature
  setTimeout(function writeText(){
    var c = document.getElementById("climateChart");
    var ctx = c.getContext("2d");
    ctx.font = "bold 20px Roboto";
    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(229,27,131,255)";
    ctx.fillText([[avTemp],''," °C"].join(''), 57, 425);
    }, 1500);
// add annual rain
  setTimeout(function writeText(){
    var c = document.getElementById("climateChart");
    var ctx = c.getContext("2d");
    ctx.font = "bold 20px Roboto";
    ctx.textAlign = "right";
    ctx.fillStyle = "rgba(31,169,225,255)";
    // ctx.strokeStyle = 'white';
    // ctx.lineWidth = 2;
    ctx.fillText([[anRain],''," mm"].join(''), 440, 425);
    // ctx.strokeText([[anRain],''," mm"].join(''), 440, 445);
    }, 1500);
// add annual evaporation
  setTimeout(function writeText(){
    var c = document.getElementById("climateChart");
    var ctx = c.getContext("2d");
    ctx.font = "bold 20px Roboto";
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(0,0,0,1)";
    // ctx.strokeStyle = 'white';
    // ctx.lineWidth = 2;
    ctx.fillText([[anEva],''," mm"].join(''), 250, 425);
    // ctx.strokeText([[anRain],''," mm"].join(''), 440, 445);
    }, 1500);
// add signature
  setTimeout(function writeText(){
    var c = document.getElementById("climateChart");
    var ctx = c.getContext("2d");
    ctx.font = "10px Roboto";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("geographie-im-unterricht.de | Alexander Henkes", 250, 495);
    }, 1500);
// add white background
var whitebackgroundColor = {
  beforeDraw: function(chart, args, options) {
    const ctx = chart.ctx;
    const canvas = chart.canvas;
    const chartArea = chart.chartArea;
    //
    var background = canvas.getContext("2d").createLinearGradient(0, 250, 0, 0);
    background.addColorStop(0, "white");
    ctx.fillStyle = background;
    ctx.fillRect(0, 700,
      600 - 0, 0 - 700);
  }
};
// add background color of chart only
var backgroundColor = {
  beforeDraw: function(chart, args, options) {
    const ctx = chart.ctx;
    const canvas = chart.canvas;
    const chartArea = chart.chartArea;
    //
    var background = canvas.getContext("2d").createLinearGradient(0, 250, 0, 0);
    background.addColorStop(0, "rgba(255,250,207,255)");
    ctx.fillStyle = background;
    ctx.fillRect(chartArea.left, chartArea.bottom,
      chartArea.right - chartArea.left, chartArea.top - chartArea.bottom);
  }
};
  
// input values
  if (Chart.getChart(climateChart) === undefined) {
    let ctx = document.getElementById('climateChart').getContext('2d');
    climateChart = new Chart(ctx, {
      data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        datasets: [{
          label: 'Niederschlag',
          type: 'bar',
          data: [JanRain, FebRain, MarRain, AprRain, MayRain, JunRain, JulRain, AugRain, SepRain, OctRain, NovRain, DecRain],
          backgroundColor: 'rgba(171,221,244,255)',
          borderColor: 'rgba(31,169,225,255)',
          borderWidth: 3,
          barPercentage: 1.0,
          categoryPercentage: 1.07,
          order: 3,
          yAxisID: 'rain'
        },{
          label: 'Temperatur',
          data: [JanTemp, FebTemp, MarTemp, AprTemp, MayTemp, JunTemp, JulTemp, AugTemp, SepTemp, OctTemp, NovTemp, DecTemp],
          type: 'line',
          backgroundColor: 'rgba(229,27,131,255)',
          borderColor: 'rgba(229,27,131,255)',
          borderWidth: 3,
          pointRadius: 0,
          lineTension: 0.001,
          order: 1,
          yAxisID: 'temp'
        },{
          label: 'Verdunstung',
          type: 'bar',
          data: [JanEva, FebEva, MarEva, AprEva, MayEva, JunEva, JulEva, AugEva, SepEva, OctEva, NovEva, DecEva],
          backgroundColor: 'transparent',
          borderColor: 'rgba(0, 0, 0, 0.75)',
          borderWidth: 3,
          barPercentage: 1.0,
          categoryPercentage: 1.07,
          order: 2,
          yAxisID: 'eva'
        }]
      },
    
// config
      plugins: [whitebackgroundColor, backgroundColor],
    options: {
     events: [],
      layout: {
        padding: {
        top: 50,
        bottom: 20,
        // left: 20
      }
    },
      plugins: {
       legend: {
        display: false,
      }
    },
    // maintainAspectRatio: false,
    // responsive: true,
    aspectRatio: 1,    
    scales: {
        x: {
            stacked: true,
            position: 'bottom',
            grid: {
                color: 'grey',
                },
            ticks: {
                color: 'black',
                font: {
                size: 25
                }
             }
          },
        rain: {
            min: parseInt(minTemp0rounded * 2),
            max: maxRainrounded,
            type: 'linear',
            position: 'right',
            grid: {
                color: (ctx) => {
                    const zeroLine = ctx.tick.value;
                    const notzeroLine = ctx.tick.value;
                    const gridColor = zeroLine === 0 ? '#666' : '#ccc' ;
                    const gridColor2 = notzeroLine > -1000 ? '#666' : '#ccc' ;
                    return gridColor, gridColor2;
                }
            }, 
            ticks: {
                color: 'rgba(31,169,225,255)',
                font: {
                size: 25
                },
                stepSize: 20,
                // prevent negative labeling on y-rain-axis, set scaleling over 100
                callback: function noLow(value, index, ticks){
                    if(this.getLabelForValue(value) < 0) {
                        return '';                
                    }
                    if(this.getLabelForValue(value) == 0) {
                        return '0'
                    }
                    if(this.getLabelForValue(value) == 20) {
                        return '20'
                    }
                    if(this.getLabelForValue(value) == 40) {
                        return '40'
                    }
                     if(this.getLabelForValue(value) == 60) {
                        return '60'
                    }
                     if(this.getLabelForValue(value) == 80) {
                        return '80'
                    }
                     if(this.getLabelForValue(value) == 100) {
                        return '100'
                    }                                                            
                    if(this.getLabelForValue(value) == 120) {
                        return '200'
                    }
                    if(this.getLabelForValue(value) == 140) {
                        return '300'
                    }
                    if(this.getLabelForValue(value) == 160) {
                        return '400'
                    }
                    if(this.getLabelForValue(value) == 180) {
                        return '500'
                    }
                    if(this.getLabelForValue(value) == 200) {
                        return '600'
                    }
                    if(this.getLabelForValue(value) == 220) {
                        return '700'
                    }
                    if(this.getLabelForValue(value) == 240) {
                        return '800'
                    }
                    if(this.getLabelForValue(value) == 260) {
                        return '900'
                    }
                    if(this.getLabelForValue(value) == 280) {
                        return '1000'
                    }
                    if(this.getLabelForValue(value) == 300) {
                        return '1100'
                    }
                    if(this.getLabelForValue(value) == 320) {
                        return '1200'
                    }
                    if(this.getLabelForValue(value) == 340) {
                        return '1300'
                    }
                }
            },
    },
        eva: {
            min: parseInt(minTemp0rounded * 2),
            max: maxEvarounded,
            type: 'linear',
            position: 'right',
            grid: {
                drawTicks: false
                },
            ticks: {
                display: false
                },
                stepSize: 20,
    },
        temp: {
            beginAtZero: true,
            max: maxTemprounded,
            grid: {
                color: (ctx) => {
                    const zeroLine = ctx.tick.value;
                    const notzeroLine = ctx.tick.value;
                    const gridColor = zeroLine === 0 ? '#666' : '#ccc' ;
                    const gridColor2 = notzeroLine > -1000 ? '#666' : '#ccc' ;
                    return gridColor, gridColor2;
                }
            }, 
            type: 'linear',
            position: 'left',
            ticks: {
                color: 'rgba(229,27,131,255)',
                font: {
                size: 25
                },
                stepSize: 10,
                callback: function(value, index, ticks){
                    if(this.getLabelForValue(value) > 40) {
                        return '';                
                    } else {
                        return this.getLabelForValue(value)
                    }
                }
            }
          }     
    }
      }
    });
      
  } else {
    climateChart.destroy();
    create_climateChart();
  }
};
    
// create download
function download(){
    setTimeout(function() {
    const imageLink = document.createElement('a');
    const canvas = document.getElementById('climateChart');
    imageLink.download = 'klimadiagramm.png';
    imageLink.href = canvas.toDataURL('image/png', 1);
    // document.write('<img src=" '+imageLink+' "/>');
    imageLink.click();
    }, 500);
}

</script>
