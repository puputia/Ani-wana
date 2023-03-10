import React from "react";
//css-in-js
import styled from "styled-components";
// import PangImage from '../assets/first_cat.jpg';
import Button from "react-bootstrap/Button";
// import { useLocation } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";
import NetflixLogo from "../assets/img/logo/netflix_logo.png";
import LaftelLogo from "../assets/img/logo/laftel_logo.png";
import Arrow from "../assets/img/logo/arrow.png";
import TwitterShareButton from "../component/TwitterShareButton";
// import CopyUrl from '../component/CopyUrl'
import KakaoShareButton from "../component/KakaoShareButton";
// import Twitter from "../assets/img/logo/twitter.png";
import CopyToClipboard from "react-copy-to-clipboard";
import CopyLink from "../assets/img/logo/link.png";
import Wrapper from "../common/Wrapper";
import Footer from "../common/Footer";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const Ani = searchParams.get("Ani");
  //최종적으로 도출한 결과 객체
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.name === Ani);
    setResultData(result);
    console.log("result", result);
  }, [Ani]);

  console.log(resultData);
  console.log("resultdata", ResultData);
  console.log("searchParams", searchParams);
  // idx 구하는식.
  // const x = () => {
  //   ...
  //   setResult(2);
  // }

  // const location = useLocation();
  const link = window.location.href;

  const tmp = "https://aniwana.netlify.app/Redirect";
  
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

  
  // const idx = location.state.idx;

  // let copy_link = link + "?" + parse_idx;
  let copy_link = tmp + "?" + parse_idx; // using debug, not publish
  
  const alertMessage = () => {
    alert("내 애니메이션 추천 결과가 클립보드에 담겼어요!");
  };
  return (
    <>
      <Wrapper>
        <Contents>
          <Header
            style={{
              fontFamily: "MICEGothic Bold",
              fontSize: "30px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            나의 취향 애니찾기
          </Header>
          <Title style={{ fontFamily: "MICEGothic Bold" }}>결과 보기</Title>
          <LogoImage>
            <img
              className="col-lg-10 col-md-8 mx-3 col-sm-8 col-8 rounded-3"
              src={ResultData[parse_idx].image}
              alt="애니사진"
            />
          </LogoImage>
          <Desc>
            <div>내 애니취향은</div>
            <div
              className="mb-20"
              style={{ fontFamily: "ONE-Mobile-POP", fontSize: "48px" }}
            >
              {ResultData[parse_idx].name}
            </div>
          </Desc>
          <Plot>
            <div
              style={{
                whiteSpace: "pre-wrap",
                textAlign: "left",
                margin: "0 10px 0 10px",
                alignItems: "center",
              }}
            >
              {ResultData[parse_idx].plot}
            </div>
          </Plot>
          <Platform>
            <div style={{ fontWeight: "bold" }}>감상 가능한 플랫폼</div>
            <ButtonGroup>
              {/* {ResultData[0].url2 ? (<></>) : (<></>)} */}
              {ResultData[parse_idx].url1 ? (
                <button
                  className="my-4"
                  width="20rem"
                  style={{
                    background: "white",
                    border: "none",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    window.open(ResultData[parse_idx].url1);
                  }}
                >
                  <img src={LaftelLogo} alt="logo2" width="100" />
                  <div
                    className="my-4"
                    style={{
                      alignItems: "center",
                      justifyContents: "center",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    라프텔
                  </div>
                  <img src={Arrow} alt="arrow" width="35" />
                </button>
              ) : (
                <></>
              )}
              {ResultData[parse_idx].url2 ? (
                <button
                  className="my-4"
                  width="20rem"
                  style={{
                    background: "white",
                    border: "none",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    window.open(ResultData[parse_idx].url2);
                  }}
                >
                  <img src={NetflixLogo} alt="logo2" width="100" />
                  <div
                    className="my-4"
                    style={{
                      alignItems: "center",
                      justifyContents: "center",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    넷플릭스
                  </div>
                  <img src={Arrow} alt="arrow" width="35" />
                </button>
              ) : (
                <></>
              )}
            </ButtonGroup>
          </Platform>
          <KakaoShareButton data={ResultData[parse_idx]} />
          <ButtonGroup>
            <TwitterShareButton data={parse_idx} />
                
            {/* <Button
            style={{
              color: "black",
              background: "#d3d3d3",
              fontFamily: "Pretendard-Regular",
              width: 300,
              height: 55,
              marginTop: "15px", 
            }}
            >
            <img
              style={{ border: "none", width: "28px", marginRight: "10px" }}
              src={CopyLink}
              alt="링크 복사하기"
            />
            링크 복사하기
          </Button>  */}
            <CopyToClipboard text={copy_link}>
              <Button
                style={{
                  color: "black",
                  background: "#d3d3d3",
                  fontFamily: "Pretendard-Regular",
                  width: 300,
                  height: 55,
                  marginTop: "15px",
                  border: "none",
                }}
                onClick={alertMessage}
              >
                <img
                  style={{ border: "none", width: "28px", marginRight: "10px" }}
                  src={CopyLink}
                  alt="링크 복사하기"
                />
                링크 복사하기
              </Button>
            </CopyToClipboard>
            {/* /* <Button onclick={CopyUrl}></Button> */}
            <Button
              style={{
                background: "black",
                fontFamily: "Pretendard-Regular",
                width: 300,
                height: 55,
                marginTop: "15px",
                marginBottom: "50px",
                border: "none",
              }}
              onClick={() => navigate("/")}
            >
              테스트 다시하기
            </Button>
          </ButtonGroup>
          <Footer />
        </Contents>
      </Wrapper>
    </>
  );
};

export default Result;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   display: flex;
// `;

const Header = styled.div`
 
  display: flex;
  font-size: 25pt;
  font-family: 'Pretendard-Regular';
  width: 100%; 
  text-align: center
  margin: auto;
  justify-content: center;
  background-color: #34ab64;
  color: white;
  
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 448px;
  font-family: "Pretendard-Regular";
  background-color: white;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  white-space: pre-line;
  width: 60%;
`;

const Plot = styled.div`
  width: 80%;
  background: #cccccc;
  font-size: 15pt;
  margin-top: 20px;
  font-family: "Pretendard-Regular";
`;

const Platform = styled.div`
  width: 60%;
  font-size: 20pt;
  margin-top: 20px;
  font-family: "Pretendard-Regular"; ;
`;

const Title = styled.div`
  font-size: 25pt;
  margin-top: 40px;
  font-family: "Pretendard-Regular";
`;

const LogoImage = styled.div`
  margin-top: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
