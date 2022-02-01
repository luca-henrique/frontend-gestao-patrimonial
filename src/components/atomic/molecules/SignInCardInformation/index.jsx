import React from 'react';
import {Left, Information} from './style';

const CardInformation = () => {
  return (
    <Left>
      <Information>
        <div>
          <h3 style={{fontSize: '28px'}}>
            Bem vindo, sistema de gestão patrimonial
          </h3>
        </div>

        <div style={{marginTop: '10px'}}>
          <p>
            Gerenciar todos os bens permanentes do município com emissão de
            fichas dos bens individual, lançamento por publicação de bens,
            depreciação do bem, gerando relatórios consolidados com informações
            confiáveis.
          </p>
        </div>
      </Information>
    </Left>
  );
};

export default CardInformation;
