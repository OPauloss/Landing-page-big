function contratar(){
    let contrato = document.querySelector('button')
    contrato.textContent = `Me contratou!`
    alert(`Essa foi a melhor decisão da sua vida!`)
    alert('Uma conta no valor de R$ 500.000,00 chegará em breve no endereço do usuário.')
}
function conheça(){
    alert('Tem que pagar')
}
function dinheiro(){
    alert('Desculpe, você não tem dinheiro suficiente para visualizar o conteúdo desta página. Volte quando for rico.')
}
function pechincha(){
    alert('Pague o valor integral sempre. Doguezinglsh merece.')
}
function lambidinha(){
    alert('Grátis na primeira narigadinha. R$ 900.000,00 para cada narigadinha adicional.')
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);