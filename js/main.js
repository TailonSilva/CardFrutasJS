import ClassCardsFrutas from './class/classCardsFrutas.js';

const containerPai = document.getElementById('cards');

const cardMaca = new ClassCardsFrutas(
  containerPai,
  'Maçã',
  'Fruta de Pomar',
  '3,75',
  'Comprar Este Produto',
  'red', 
  //corButton, 
  //corConainer,
  //corTxtBotao,
  'white',
  './assets/img/maça/img_principal.png',
  './assets/img/maça/img_mini_1.png',
  './assets/img/maça/img_mini_2.png',
  './assets/img/maça/img_mini_3.png',
  './assets/img/maça/img_mini_4.png',
  'Cor: Vermelho ou Verde',
  'Preparo: Em Natura',
  'Origem: Santa Catarina',
  'Rico em Nutrientes',
);

cardMaca.criarCard()