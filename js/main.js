import ClassCard from './class/classCard.js';

const containerPai = document.getElementById('cards');

const cardMaca = new ClassCard(
  containerPai,
  'Fone de Ouvido',                               //TITULO DO CARD
  'Cod.: 54785-66',                               //SUB-TITULO DO CARD
  '124,99',                                         //PREÇO DO PRODUTO
  'Comprar Este Produto',                         // TEXTO DO BOTÃO
  'blue',                                          //COR DO FUNDO DO CARD COM IMG PRINCIPAL
  'blue',                                         //COR DO BOTÃO
  'white',                                       //COR DO CONTAINER PRINCIPAL DO CARD
  'white',                                        //COR DO TEXTO DO BOTÃO
  'white',                                        //COR DO CONTAINER DAS MINIATURAS
  './assets/img/fone/img_principal.png',          //URL DA IMG PRINCIPAL
  './assets/img/fone/img_mini_1.png',             //URL DA IMG MINIATURA 1 - ESQUEDA PARA DIREITA
  './assets/img/fone/img_mini_2.png',             //URL DA IMG MINIATURA 2 - ESQUEDA PARA DIREITA
  './assets/img/fone/img_mini_3.png',             //URL DA IMG MINIATURA 3 - ESQUEDA PARA DIREITA
  './assets/img/fone/img_mini_4.png',             //URL DA IMG MINIATURA 4 - ESQUEDA PARA DIREITA
  'Cor: Vermelho ou Verde',                       //TEXTO DO ITEM 1 - INFORMAÇÕES DO PRODUTO
  'Preparo: Em Natura',                           //TEXTO DO ITEM 2 - INFORMAÇÕES DO PRODUTO
  'Origem: Santa Catarina',                       //TEXTO DO ITEM 3 - INFORMAÇÕES DO PRODUTO
  'Rico em Nutrientes',                           //TEXTO DO ITEM 4 - INFORMAÇÕES DO PRODUTO
);

cardMaca.criarCard()