console.log("this is a script file");

console.log("load")

/*console.dir(document)*/

async function loadEvent() {

    let countriesData = await fetch("https://restcountries.com/v3.1/all")
    let countriesJson = await countriesData.json()
    console.log(countriesJson [111])

    let countriesSection = document.getElementById("countries");
   //  console.dir(countriesSection);
    // countriesSection.innerHTML+=("Hali");

    document.getElementById("countries").insertAdjacentHTML("beforeend" , `
    <h1>countries</h1>` );
 
    //document.getElementById("countries").insertAdjacentHTML("beforeend", countriesJson[111].name.common);

    /*let countryComponent = `
    <div class= "country"></div>
        <h2>ide kerul az orszag neve</h2>
        `*/

    function countryComponent(countryName){

        return  `
        <div class= "country"></div>
            <h2>${countryName}
            </h2>
            `
    }

    for (let index = 0; index < countriesJson.length; index++) {
        console.log(index)
       // document.getElementById("countries").insertAdjacentHTML("beforeend", countriesJson[index].name.common);
        document.getElementById("countries").insertAdjacentHTML("beforeend", countryComponent( countriesJson[index].name.common));
        
    }

}

window.addEventListener("load" , loadEvent)

function logger(logThis) {

    console.log(logThis)  
}

logger ("Hello")
logger ("Hello 2")
logger (420)
logger (true)

