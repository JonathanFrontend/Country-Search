const dogs = 'https://dog.ceo/api/breeds/image/random';
const countryUrl = 'https://restcountries.eu/rest/v2/all';

const form1 = document.querySelector('.box-1 #form');

form1.addEventListener('submit', function(e){
    e.preventDefault();
    let input = document.querySelector('.box-1 #text');
    let text = input.value;
    if (text == ''){
        text = 'Sweden';
    }
    fetch(countryUrl).then(
        function(response) {
            console.log(response)
            return response.json();
        }
    ).then(
        function(data){
            console.dir(data);
            const img = document.querySelector('.box-1 #flag');
            const info = document.querySelector('.box-1 #info');
            const infoTwo = document.querySelector('.box-1 #infoTwo');
            const formTwo = document.querySelector('.box-1 #formTwo');
            
            for (let i = 0; i < data.length; i++){
                for (let j = 0; j < data[i].altSpellings.length; j++){ //Ifall man sökte på någon utav de Alternativa namnen.
                    if (data[i].name == text || data[i].alpha2Code == text || data[i].alpha3Code == text || data[i].nativeName == text || data[i].cioc == text || data[i].demonym == text || data[i].altSpellings[j] == text){
                        info.innerText = data[i].name;
                        infoTwo.innerText = data[i].nativeName;
                        img.src = data[i].flag;
                        formTwo.style.display = 'block';

                        var countryCapital = data[i].capital;
                        console.log(j)
                    }
                }
            }
            formTwo.addEventListener('submit', function(f){
                f.preventDefault();
                const textTwo = document.querySelector('.box-1 #textTwo');
                const textThree = document.querySelector('.box-1 #infoThree');
                const ca = textTwo.value;
                if (ca == countryCapital){
                    textThree.innerText = `${ca} - Rätt!`;
                }
                else {
                    textThree.innerText = `${ca} - Nope, fel!`;
                }
            });
        }
    ).catch(
        function(error){
            console.log('Nätverksfel')
        }
    )
});

const form2 = document.querySelector('#form-2');
const letters = document.querySelector('#letters');

letters.addEventListener('keypress', function(e){
    //e.preventDefault();
    let input = document.querySelector('.box-2 #letters');
    let text = input.value + e.key;
    console.log(text);
    text = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(text);
    let uppText = text.toUpperCase();
    let lowText = text.toLowerCase();

    console.log(uppText);
    console.log(text);
    fetch(countryUrl).then(
        function(response){
            //console.log(response);
            return response.json();
        }
    ).then(
        function(data){
            console.log(data);
            const img = document.querySelector('.box-2 #flag-2');
            const info = document.querySelector('.box-2 #info-2');
            const infoTwo = document.querySelector('.box-2 #infoTwo-2');
            const infoThree = document.querySelector('.box-2 #infoThree-2');

            for (let i = 0; i < data.length; i++){
                let domain1 = data[i].topLevelDomain[0].slice(1);
                
                if (data[i].alpha2Code == uppText || data[i].alpha3Code == uppText || data[i].cioc == uppText || domain1 == lowText || data[i].name.includes(text) || data[i].name == text || data[i].nativeName.includes(text) || data[i].nativeName == text || data[i].demonym.includes(text) || data[i].demonym == text){
                    info.innerText = data[i].name;
                    infoTwo.innerText = data[i].nativeName;
                    infoThree.innerText = data[i].capital;
                    img.src = data[i].flag;

                }
            }
        }
    ).catch(
        function(error){
            console.log('Nätverksfel')
        }
    )
    if (e.key == 'Enter'){
        e.preventDefault()
    }
});
const form3 = document.querySelector('.box-3 #form-3');
let lang; //se ifall språket vi skrivit in är densamma som innan.

form3.addEventListener('submit', function(e){
    e.preventDefault();
    let input = document.querySelector('.box-3 #lang');
    let text = input.value;
    text = text.charAt(0).toUpperCase() + text.slice(1);
    let textLow = text.toLowerCase();
    if (text == ''){
        text = 'Swedish';
    }
    fetch(countryUrl).then(
        function(response) {
            console.log(response)
            return response.json();
        }
    ).then(
        function(data){
            console.dir(data);
            const langList = document.querySelector('#lang-list');
            
            if (lang !== text) {
                langList.innerHTML = '';
                for (let i = 0; i < data.length; i++){
                    for (let j = 0; j < data[i].languages.length; j++){ //Ifall man sökte på någon utav de Alternativa namnen.
                        if (data[i].languages[j].name == text || data[i].languages[j].iso639_1 == textLow || data[i].languages[j].iso639_2 == textLow){
                            const pName = document.createElement('p');
                            const imgFlag = document.createElement('img');
                            imgFlag.src = data[i].flag;
                            imgFlag.style.height = '30px';
                            pName.innerText = data[i].name;
                            langList.appendChild(imgFlag);
                            langList.appendChild(pName);
                        }
                    }
                }
                lang = text;
            }

            formTwo.addEventListener('submit', function(f){
                f.preventDefault();
                const textTwo = document.querySelector('.box-3 #textTwo');
                const textThree = document.querySelector('.box-3 #infoThree');
                const ca = textTwo.value;
                if (ca == countryCapital){
                    textThree.innerText = `${ca} - Rätt!`;
                }
                else {
                    textThree.innerText = `${ca} - Nope, fel!`;
                }
            });
        }
    ).catch(
        function(error){
            console.log('Nätverksfel')
        }
    )
});