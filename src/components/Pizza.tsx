import React from 'react';
import styled from 'styled-components';
import { ApiProduct } from '../redux/types';
import { nanoid } from 'nanoid';
import { IoIosHeart } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
  backSelect,
  backSet,
  frontSelect,
  frontSet,
  moodSelect,
  priceSelect,
  priceSet,
  sizeSelect,
  sizeSet,
  themeSet,
  typeSelect,
  typeSet,
} from '../redux/slices/itemsSlice';

const Pizza: React.FC<ApiProduct> = ({
  image,
  title,
  category,
  description,
  additionalVariants,
}) => {
  const dispatch = useDispatch();
  const [select, setSelect] = React.useState(0);
  const theme = useSelector(moodSelect);
  const size = useSelector(sizeSelect);
  const type = useSelector(typeSelect);
  const front = useSelector(frontSelect);
  const back = useSelector(backSelect);
  const price = useSelector(priceSelect);

  const filterIndex = () => {
    return Number(
      additionalVariants
        .map((elem, index) => (elem.size === size && elem.type === type ? index : null))
        .filter((elem) => elem !== null)
        .toString(),
    );
  };

  React.useEffect(() => {
    setSelect(filterIndex());
    // eslint-disable-next-line
  }, [size, type]);

  const toggleSize = (elemsize: string, index: number) => {
    dispatch(sizeSet(elemsize));
    dispatch(backSet(index));
  };

  const toggleDough = (type: string, index: number) => {
    if (type === 'Обычное') {
      dispatch(typeSet('common'));
      dispatch(sizeSet('s'));
    } else if (type === 'Тонкое') {
      dispatch(typeSet('thin'));
      dispatch(sizeSet('m'));
    }
    dispatch(frontSet(index));
    dispatch(backSet(0));
  };

  const sizes = (size: string) => {
    if (size === 'm') {
      return 'Средняя';
    } else if (size === 's') {
      return 'Маленькая';
    } else if (size === 'l') {
      return 'Большая';
    }
  };

  const dough = (type: string) => {
    if (type === 'common') {
      return 'Обычное';
    } else if (type === 'thin') {
      return 'Тонкое';
    }
  };

  const doughTypes = additionalVariants.map((elem) => dough(elem.type));
  const noRepeats = doughTypes.filter((elem, index) => doughTypes.indexOf(elem) === index);

  const sizesFront = additionalVariants
    .filter((elem) => elem.type === type)
    .map((elem, index) => (
      <ButtonLi
        key={nanoid()}
        onClick={() => toggleSize(elem.size, index)}
        className={index === back ? 'active' : ''}>
        {elem.type === type ? sizes(elem.size) : null}
      </ButtonLi>
    ));

  const pricePizza = Number(
    additionalVariants
      .map((elem) => elem.price)
      .filter((_, index) => index === select)
      .toString(),
  );

  return (
    <Card>
      <img src={image} alt={title} />
      <div>
        <Text>{category}</Text>
        <h3>{title}</h3>
        <Desc>{description}</Desc>
        <FlexPar>
          <p>
            {additionalVariants
              .map((elem) => `${elem.weight} г.`)
              .filter((_, index) => index === select)}
          </p>
          <p>
            {additionalVariants.map((elem) => elem.energy).filter((_, index) => index === select)}{' '}
            ккал
          </p>
        </FlexPar>
        <FlexUl>
          {noRepeats.map((elem, index) => (
            <ButtonLi
              key={nanoid()}
              onClick={() => toggleDough(elem!, index)}
              className={index === front ? 'active' : ''}>
              {elem}
            </ButtonLi>
          ))}
        </FlexUl>
        <FlexUl>{sizesFront}</FlexUl>
        <Price>{pricePizza} ₽</Price>
        <FlexCart>
          <button onClick={() => dispatch(priceSet([...price, pricePizza]))}>В корзину</button>
          <IoIosHeart
            onClick={() => dispatch(themeSet(!theme))}
            cursor={'pointer'}
            size={'30px'}
            className={theme ? 'active' : ''}
          />
        </FlexCart>
      </div>
    </Card>
  );
};

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  padding: 2.5rem 0;
  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
  }
  h3 {
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  color: #0505054c;
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  color: var(--text);
  margin-bottom: 1rem;
`;

const FlexPar = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FlexUl = styled.ul`
  border-radius: 0.5rem;
  outline: none;
  display: flex;
  max-width: fit-content;
  background-color: var(--spirit);
  border: 1px solid var(--spirit);
  outline: none;
  margin-bottom: 1rem;
  align-items: center;
  gap: 1rem;
`;

const ButtonLi = styled.li`
  background-color: transparent;
  padding: 0.5rem 0;
  width: 120px;
  text-align: center;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition: 0.2s all ease-in-out;
  &.active {
    background-color: var(--green);
    color: var(--white);
  }
`;

const FlexCart = styled.div`
  outline: none;
  display: inline-flex;
  align-items: center;
  outline: none;
  margin-bottom: 1rem;
  align-items: center;
  gap: 1rem;
  button {
    width: 120px;
    padding: 0.5rem 0;
    background-color: var(--green);
    color: var(--white);
    border: 1px solid var(--shadow);
    outline: none;
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: 0px 1px 10px var(--shadow);
    transition: 0.2s ease-in-out all;
    &:active {
      transform: scale(0.95);
      transition: 0.2s ease-in-out all;
    }
  }
  svg {
    color: var(--opacity);
    transition: 0.2s ease-in-out all;
    &:active {
      transform: scale(0.85);
    }
    &.active {
      color: var(--red);
      transition: 0.2s ease-in-out all;
    }
  }
`;

export default Pizza;
