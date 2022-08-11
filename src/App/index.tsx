import React from 'react';
import { nanoid } from 'nanoid';
import Pizza from '../components/Pizza';
import getApiProduct from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { priceSelect, priceSet } from '../redux/slices/itemsSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styled from 'styled-components';

const App: React.FC = () => {
  const price = useSelector(priceSelect);
  const dispatch = useDispatch();
  const mapPizza = getApiProduct.map((elem) => <Pizza key={nanoid()} {...elem} />);

  return (
    <div>
      {mapPizza}
      {price.length >= 1 && (
        <CartWrap>
          <h2>{price.reduce((acc, elem) => acc + elem, 0)} ₽</h2>
          <button onClick={() => dispatch(priceSet([]))}>
            <span>Clear cart</span>
            <RiDeleteBin6Line size={'20px'} opacity={'0.5'} />
          </button>
        </CartWrap>
      )}
    </div>
  );
};

const CartWrap = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: var(--cart);
  padding: 1.5rem 0;
  h2 {
    opacity: 0.7;
  }
  button {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.7rem;
    border: var(--border);
    cursor: pointer;
    transition: 0.2s ease all;
    &:hover {
      transition: 0.2s ease all;
      box-shadow: var(--shadow-box);
    }
    &:active {
      transform: scale(0.95);
    }
  }
  span {
    display: block;
    margin-right: 0.5rem;
    opacity: 0.5;
    font-weight: 700;
  }
`;

export default App;
