import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { useLocation, useNavigate,  } from "react-router-dom";
import { QuestionData } from "../assets/data/questiondata";
import {useEffect} from 'react';

import Wrapper from "../common/Wrapper";

const Redir = () => {
    const navigate = useNavigate();

    // const location = useLocation();
    const link = window.location.href;
    
    // ? 뒤의 숫자가 0~11이기 때문에 반복문 이중 for문 만들어줘서
    // 숫자 끝까지 검사함.
  
    let parse_idx = "";
    for(let i=0; i<link.length; i++){
      if(link[i] === '?'){
        for(let j=i+1;j<link.length; j++){
          parse_idx += link[j]; //물음표 뒤에 숫자 
        }
        break;
      }
    }
    
    // parse_idx 의 자료형을 str -> int
    parse_idx *= 1;

    let tmp = "/result";

    useEffect(()=> {

    })

    return(
      useEffect(() =>{
        navigate(tmp + "?" + parse_idx,{
          state: {
              idx : parse_idx, // string parse
          }
        }
        );
      })
    )
}

export default Redir;