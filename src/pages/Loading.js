import React from 'react';
import {Background, LoadingText} from './Styles';
import Spinner from './assets/spinner.gif';

export const Loading = () => {
  return (
    <Background>
        <LoadingText>나의 취향 분석중</LoadingText>
        <img src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};

export default Loading;