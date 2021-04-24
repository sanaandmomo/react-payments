import { memo, useRef } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardNumberInput.style';

const transparentInputStyles = {
  0: {
    color: COLOR.MINT,
    paddingLeft: '14%',
    textAlign: 'center',
    width: '32%',
  },
  1: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
  },
  2: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
    fontSize: '24px',
  },
  3: {
    color: COLOR.MINT,
    paddingRight: '14%',
    textAlign: 'center',
    width: '32%',
    fontSize: '24px',
  },
};

const CardNumberInput = memo(({ cardNumber, setCardNumber }) => {
  const $input1 = useRef(null);
  const $input2 = useRef(null);
  const $input3 = useRef(null);

  const handleInputChange = ({ target }) => {
    if (target.value.length > 4) return;

    setCardNumber(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === '0' && target.value.length === 4) {
      $input1.current.disabled = false;
      $input1.current.focus();

      return;
    }

    if (target.name === '1' && target.value.length === 4) {
      $input2.current.disabled = false;
      $input2.current.focus();

      return;
    }

    if (target.name === '2' && target.value.length === 4) {
      $input3.current.disabled = false;
      $input3.current.focus();
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>카드 번호</Styled.InputLabelContainer>
      <Styled.InputContainer>
        <TransparentInput
          name="0"
          type="number"
          min="0"
          max="9999"
          value={cardNumber['0']}
          onChange={handleInputChange}
          styles={transparentInputStyles['0']}
          autoFocus
        />
        {cardNumber['0'].length === 4 && <Styled.Dash>-</Styled.Dash>}
        <TransparentInput
          name="1"
          type="number"
          min="0"
          max="9999"
          value={cardNumber['1']}
          onChange={handleInputChange}
          innerRef={$input1}
          styles={transparentInputStyles['1']}
          disabled
        />
        {cardNumber['1'].length === 4 && <Styled.Dash>-</Styled.Dash>}
        <TransparentInput
          name="2"
          type="password"
          minLength="4"
          maxLength="4"
          value={cardNumber['2']}
          onChange={handleInputChange}
          innerRef={$input2}
          styles={transparentInputStyles['2']}
          disabled
        />
        {cardNumber['2'].length === 4 && <Styled.Dash>-</Styled.Dash>}
        <TransparentInput
          name="3"
          type="password"
          minLength="4"
          maxLength="4"
          value={cardNumber['3']}
          onChange={handleInputChange}
          innerRef={$input3}
          styles={transparentInputStyles['3']}
          disabled
        />
      </Styled.InputContainer>
    </div>
  );
});

export default CardNumberInput;
