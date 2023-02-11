# get-the-fruit-education

O jogo é chamado "Pegue as frutas". Ele apresenta dois sprites: um personagem principal e uma fruta. O objetivo do jogo é mover o personagem principal para pegar todas as frutas que aparecem na tela. Se o personagem toca a fruta, ela desaparece e uma pontuação é adicionada à contagem de pontos. O jogo acaba quando todas as frutas são pegadas ou o tempo acaba.

O personagem principal é controlado pelo usuário usando as setas do teclado. A fruta é gerada aleatoriamente na tela e se move para baixo ao longo do tempo. Se a fruta sai da tela, ela é gerada novamente em uma nova posição aleatória.

O projeto usa três scripts: um para o personagem principal, um para a fruta e um para a contagem de pontos. O script do personagem principal usa uma condicional para verificar se as teclas de seta estão sendo pressionadas e mover o personagem na direção apropriada. O script da fruta usa uma variável para controlar a posição da fruta na tela e um loop para fazê-la se mover para baixo ao longo do tempo. O script da contagem de pontos usa uma variável para armazenar o número de frutas pegadas e uma condicional para verificar se o jogo acabou.

O projeto também usa um bloco personalizado feito via "Make a Block", que é chamado quando o personagem toca a fruta. Este bloco adiciona um ponto à contagem de pontos e faz a fruta desaparecer da tela.

