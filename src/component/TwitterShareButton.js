import React from 'react';
import Button from 'react-bootstrap/Button';
import TwitterIcon from "../assets/img/logo/twitter.png"
const TwitterShareButton = (data) => {
 
    if(data.type === 'click'){
        window.open("https://twitter.com/intent/tweet"
        + "?via=Aniwana"
        + "&text=" + encodeURIComponent("나에게 맞는 취향저격 애니메이션은?!") // twitter 공유 함수
        + "&url=" + encodeURIComponent(window.location.href)
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