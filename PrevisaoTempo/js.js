const container = document.querySelector('.container');
const busca = document.querySelector('.barra-busca button');
const climaBox= document.querySelector('.box-clima');
const detalhesClima = document.querySelector('.detalhes-clima');
const error = document.querySelector('.nao-encontrado');

busca.addEventListener('click',()=> {

    const APIKey = 'de82fc4d764dd29233068678f29d9f91';
    const lugar = document.querySelector('.barra-busca input').value;

    if (lugar === '')
        return;
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lugar}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if(json.cod === '404'){

                container.style.height = '480px';
                climaBox.style.display = 'none';
                detalhesClima.style.display = 'none';
                error.style.display = 'block';
                error.classList.add('fadeIn');
                return;
            }

            error.style.display = 'none';
            error.classList.remove('fadeIn');

            const imagem = document.querySelector('.box-clima img');
            const temperatura = document.querySelector('.box-clima .temperatura');
            const descricao = document.querySelector('.box-clima .descricao');
            const chuva = document.querySelector('.detalhes-clima .chuva span');
            const vento = document.querySelector('.detalhes-clima .vento span');

            switch (json.weather[0].main){
                case 'Clear':
                    imagem.src = '/PrevisaoTempo/img/sol.png';
                    break;

                case 'Rain':
                    imagem.src = '/PrevisaoTempo/img/chuva.png';
                    break;
                
                case 'Snow':
                    imagem.src = '/PrevisaoTempo/img/trovao.png';
                    break;

                case 'Clouds':
                    imagem.src = '/PrevisaoTempo/img/nublado.png';
                    break;

                case 'Haze':
                    imagem.src = '/PrevisaoTempo/img/trovao.png';
                    break;
                
                default:
                    imagem.src = '';
            }

            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            descricao.innerHTML = `${json.weather[0].description}`;
            chuva.innerHTML = `${json.main.humidity}%`;
            vento.innerHTML = `${parseInt(json.wind.speed)}Km/h`;


            climaBox.style.display = '';
            detalhesClima.style.display = '';
            climaBox.classList.add('fadeIn');
            detalhesClima.classList.add('fadeIn');
            container.style.height = '500px';
    })
})