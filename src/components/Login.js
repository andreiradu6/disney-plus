import React from 'react'
import styled from 'styled-components'


function Login() {

    
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Acces to Raya and the Last Dragon force with a Disney+ subscription.
                    As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    

    &:before{
        position: absolute;
        content: '';
        top: 0;
        left:0;
        bottom:0;
        right:0;
        background-image: url('/images/login-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        z-index: -1;
        opacity: 0.7;
    }
`

const CTA = styled.div`
    width: 90%;
    max-width: 650px;
    padding: 80px 40px;
    display flex;
    align-items: center;
    flex-direction:column;
    // margin-top: 100px;

`

const CTALogoOne = styled.img`

`


const CTALogoTwo = styled.img`
    width: 90%;
`

const SignUp = styled.a`
    width:100%;
    background-color: #0063e5;
    font-weight:bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align:center;
    cursor:pointer;
    transition: all 250ms ease;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`   

const Description = styled.p`
    font-size:11px;
    letter-spacing: 1.5px;
    line-height: 1.5;
    text-align: center;
`
