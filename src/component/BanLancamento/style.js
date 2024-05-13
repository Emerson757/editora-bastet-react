import styled from "styled-components";

export const BanLancamento = styled.div`
    display: flex;   
    background-image: url(../src/assets/img/banner-morro.svg);
    background-repeat: no-repeat;
    background-size: cover;
    
    padding: 85px 40px;
    width: 100vw;
    height: auto;
    gap: 60px;
`

export const TitleBan = styled.h1`
    font-size: 36px;
    color: #fff;
    margin-bottom: 30px;
`

export const Text = styled.p`
    font-size: 26px;
    color: #fff;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;    
    width: 48%;
    height: 800px;
    background-color: rgba(0,0,0, 0.5);
    /* border: 1px solid #fff;  */
`

export const BookContainer = styled.div`
    display: flex;
    padding-top: 100px;

    img {
        width: 600px;
        height: 800px;
    }

    img:hover {
        transform: scale(1.03);
        transition: 1s ease;
        
    }
`
