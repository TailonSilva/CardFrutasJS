import ClassCardsFrutas from './class/classCardsFrutas.js';

const containerPai = document.getElementById('cards');

const cardMaca = new ClassCardsFrutas(
  containerPai,
  'Maçã',
  'Fruta de Pomar',
  '3,75',
  'Comprar Este Produto',
    //corCard, 
    //corButton, 
    //corConainer,
    //corTxtBotao,
    //corContainerMiniatura,
  './assets/img/frutas/maça/maça.png',
  './assets/img/frutas/maça/maça2.png',
  './assets/img/frutas/maça/maça3.png',
  './assets/img/frutas/maça/maça4.png',
  './assets/img/frutas/maça/maça5.png',
  'Cor: Vermelho ou Verde',
  'Preparo: Em Natura',
  'Origem: Santa Catarina',
  'Rico em Nutrientes',
);

cardMaca.criarElemento()