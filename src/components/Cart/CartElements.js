import styled from 'styled-components';

export const CartContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #4a4444;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ProductWrapper = styled.div`
  margin: 30px 20px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DetailedInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5px 10px;

  @media screen and (max-width: 500px) {
    max-width: 250px;
    width: 100%;
  }
`;
export const ProductImg = styled.img`
  width: 250px;
  height: 200;
  border-radius: 12px;
`;
export const ProductTitle = styled.h1`
  font-size: 20px;
`;
export const ProductDescription = styled.p`
  font-size: 14px;
`;
export const ProductPrice = styled.strong`
  font-weight: 400;
  font-size: 20px;
`;
export const Quantity = styled.input`
  width: 40px;
  border-radius: 5px;
  text-align: center;
`;
export const QtyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 500px) {
    flex-direction: initial;
    justify-content: space-evenly;
    width: 100%;
  }
`;
export const CartSummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3;
  border-radius: 12px;
  background-color: #242424;
  padding: 20px 0px;
`;

export const CartSummaryTitle = styled.div`
  font-size: 20px;
`;
export const CartTotal = styled.strong`
  font-size: 18px;
  font-weight: 200;
`;
export const CheckoutButton = styled.button`
  max-width: 250px;
  width: 100%;
  height: 50px;
  background-color: #ffc500;
  border-radius: 15px;
  border: none;
`;
