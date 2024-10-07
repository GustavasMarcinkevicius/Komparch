const sukurimoMygtukas = document.getElementById("sukurt")


var Xsai = [];
var Ygrikai = [];
let k;
let n;


function funkcijaPoPasirinkimo(eventData) {
    console.log(eventData);
    let xpasirinkimo = [];
    let ypasirinkimo = [];
    
    for (let point of eventData.points){
        xpasirinkimo.push(point.x);
        ypasirinkimo.push(point.y);
    }

    var trace1 = {
        x: xpasirinkimo,        
        y: ypasirinkimo,
        mode: 'markers',
        type: 'scatter',
        text: xpasirinkimo.map(i => `A-${i}`), 
        marker: { size: 12 }
    };         
    var data = [trace1];

    var layout = {
        xaxis: {
            title: 'X',
            range: [0, n+1] 
        },
        yaxis: {
            title: 'Y',
            range: [-4, k+2 ] 
        },
        title: 'Scatter Plotas Pasirinktas'
    };
    Plotly.newPlot('PasirinktuDuomenuGrafikas', data, layout);
    
  }

sukurimoMygtukas.addEventListener('click', function () {
    n = parseInt(document.getElementById('tasku_kiekis').value);
    k = parseInt(document.getElementById('max_verte').value);

    for (let i = 1; i <= n; i++) {
        Xsai[i] = i; 
        Ygrikai[i] = Math.floor(Math.random() * k) + 1;
    }


    var trace1 = {
        x: Xsai,        
        y: Ygrikai,
        mode: 'markers',
        type: 'scatter',
        text: Xsai.map(i => `A-${i}`), 
        marker: { size: 12 }
    };         
    var data = [trace1];

    var layout = {
        xaxis: {
            title: 'X',
            range: [0, n+1] 
        },
        yaxis: {
            title: 'Y',
            range: [-4, k+2 ] 
        },
        title: 'Scatter Plotas'
    };


    Plotly.newPlot('myDiv', data, layout);


    var scatterPlotDiv = document.getElementById("myDiv");
    scatterPlotDiv.on("plotly_selected", funkcijaPoPasirinkimo);

});


document.getElementById('sukurt2').addEventListener('click', function () {
    var x1 = parseInt(document.getElementById('x1').value);
    var x2 = parseInt(document.getElementById('x2').value);

    var XsaiAtrinkti = [];
    var YgrikaiAtrinkti = [];
    let i = 0;

    for (let p = x1; p<=x2; p++){
        XsaiAtrinkti[i] = Xsai[p];
        YgrikaiAtrinkti[i] = Ygrikai[p];
        i++ 

    }

    var trace2 = {
        x: XsaiAtrinkti,
        y: YgrikaiAtrinkti,
        mode: 'markers',
        type: 'scatter',
        text: Xsai.map(p => `A-${p}`), 
        marker: { size: 12 }
    };         
    var data = [trace2];

    var layout = {
        xaxis: {
            title: 'X Atrinkti',
            range: [x1-2, x2+1] 
        },
        yaxis: {
            title: 'Y atrinkti',
            range: [-4, k+5 ] 
        },
        title: 'Atrinktas Scatter Plotas'
    };


    Plotly.newPlot('myDiv2', data, layout);

});
