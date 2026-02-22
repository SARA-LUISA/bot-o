    document.querySelector('#verde')?.addEventListener('click', () => 
        {
            console.log('Botão verde clicado!');
            document.body.style.backgroundColor = 'green';
        });
    document.querySelector('#rosa')?.addEventListener('click',() =>{
        console.log('Botão rosa clicado!')
        document.body.style.backgroundColor = 'pink'
    });
    document.querySelector('#lilas')?.addEventListener('click',() =>{
        console.log('Botão lilas clicado!')
        document.body.style.backgroundColor = 'purple'
    });
    document.querySelector('#retorne')?.addEventListener('click',() =>{
        console.log('Botão retorne clicado!')
        document.body.style.backgroundColor = 'white'
    });
    document.querySelector('#mensagem')?.addEventListener
    // Adiciona um ouvinte de evento para o botão de mensagem especial
    ('click',() =>{
        console.log('Botão mensagem clicado!')
        alert ('Esta é minha primeira aula de javascript, estou aprendendo a criar botões que mudam a cor do fundo da página!')
    });