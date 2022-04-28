import React, { useContext, useCallback } from 'react';
import Card from './components/Card';
import PageTitle from './components/PageTitle';
import styled from 'styled-components';
import CardNumber from './components/CardNumber';
import CardExpiration from './components/CardExpiration';
import CardOwner from './components/CardOwner';
import CardCvc from './components/CardCvc';
import CardPassword from './components/CardPassword';
import MoveButton from './components/MoveButton';
import CardContext from './CardContext';
import CardListModal from './components/CardListModal';
import validator from '../src/validations/validator';
import CARD_COMPANIES from './constants';

const CardAdditionContainer = styled.div`
  height: 100%;
  padding: 16px 24px;
`;

function CardAddition() {
  const {
    cardNumber,
    cardExpiration,
    cardOwner,
    cardCvc,
    cardPassword,
    cardCompanyIndex,
    dispatch,
  } = useContext(CardContext);

  const validateAllInputs = () => {
    try {
      validator.checkCardCompany(cardCompanyIndex);
      validator.checkCardNumber(cardNumber);
      validator.checkCardExpiration(cardExpiration);
      validator.checkCardOwner(cardOwner);
      validator.checkCardCvc(cardCvc);
      validator.checkCardPassword(cardPassword);

      return false;
    } catch (error) {
      return true;
    }
  };

  const onClickCard = useCallback(() => {
    dispatch({ type: 'SET_MODAL_FLAG', flag: true });
  }, []);

  const submitCard = () => {
    const cardData = {
      카드사: CARD_COMPANIES[cardCompanyIndex].NAME,
      카드번호: cardNumber,
      카드만료일: cardExpiration,
      카드소유자: cardOwner,
      보안코드: cardCvc,
      카드비밀번호: cardPassword,
    };
    console.log(cardData);
    alert('입력된 카드 정보가 콘솔로그로 전송되었습니다. 콘솔로그를 확인해주세요.');
  };

  const cardColor = cardCompanyIndex === -1 ? '#737373' : CARD_COMPANIES[cardCompanyIndex].COLOR;

  const cardName = cardCompanyIndex === -1 ? '' : CARD_COMPANIES[cardCompanyIndex].NAME;

  return (
    <CardAdditionContainer>
      <PageTitle hasPrevButton={true} title="카드 추가" />
      <Card
        cardCompanyIndex={cardCompanyIndex}
        cardNumber={cardNumber}
        cardExpiration={cardExpiration}
        cardOwner={cardOwner}
        cardName={cardName}
        color={cardColor}
        onClick={onClickCard}
      />
      <CardNumber color={cardColor} />
      <CardExpiration color={cardColor} />
      <CardOwner color={cardColor} />
      <CardCvc color={cardColor} />
      <CardPassword color={cardColor} />
      <MoveButton onClick={submitCard} disabled={validateAllInputs()} color={cardColor}>
        다음
      </MoveButton>
      <CardListModal />
    </CardAdditionContainer>
  );
}

export default CardAddition;
