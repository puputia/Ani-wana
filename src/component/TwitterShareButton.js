import React from 'react';
import Button from 'react-bootstrap/Button';
import TwitterIcon from "../assets/img/logo/twitter.png"


const TwitterShareButton = (data) => {
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
    const tmp = "https://aniwana.swygbro.com//Redirect";
    let copy_link = tmp + "?" + parse_idx;
    if(data.type === 'click'){
        window.open("https://twitter.com/intent/tweet"
        + "?via=Aniwana"
        + "&text=" + encodeURIComponent("나에게 맞는 취향저격 애니메이션은?!") // twitter 공유 함수
        + "&url=" + encodeURIComponent(copy_link)
    );}

    return (
        <Button onClick={TwitterShareButton}
            style={{
                background: "#50abf1",
                border: "1px solid #cccccc",
                color: "white",
                fontFamily: "Pretendard-Regular",
                width: 300,
                height: 55,
                marginTop: "15px",
            }}
        >
            <img
                style={{ border: "none", width: "35px", margin: "5px" }}
                src={TwitterIcon}
                alt="트위터 공유"
                />
                트위터 공유하기
          
      </Button>
    )
}

export default TwitterShareButton;