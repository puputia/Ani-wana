import React from 'react';
import Button from 'react-bootstrap/Button';
import KakaoIcon from "../assets/img/logo/kakaotalk_sharing_btn_small.png";
const { Kakao } = window;

const KakaoShareButton = ({data}) => {
  const url = "https://aniwana.swygbro.com/";
  const resultUrl = window.location.href;
  console.log("kakao data", data);
  console.log('ddd', resultUrl, url)

  React.useEffect(()=> {
    Kakao.cleanup();
    Kakao.init("f273d96f219a5ebcebfb1cfd23bbd415");
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '나의 애니메이션 추천 결과',
        description: `나와 맞는 애니메이션은 ${data.name} 입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      
      
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  }
  
    return (
      <Button onClick={shareKakao}
      style={{
        background: "#FEE500",
        border: "none",
        color: "black",
        fontFamily: "Pretendard-Regular",
        width: 300,
        height: 55,
        marginTop: "15px",
        
      }}
    >
      <img
        style={{ border: "none", width: "28px", marginRight: "10px" }}
        src={KakaoIcon}
        alt="카카오톡 공유"
      />
      카카오톡 공유하기
    </Button>)
}




export default KakaoShareButton;
