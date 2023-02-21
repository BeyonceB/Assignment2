import Head from 'next/head'
import styled from "styled-components"
import Image from 'next/image'
import Text from '@/components/text'

export default function ImageBox({
    src = "/el_greco.jpg",
    arr=[]
}){

  return (
    <>
      <BorderBox>
        <Imgs src={src} width="300" height="300"/>
      </BorderBox>
    </>  
  )
}

const BorderBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Imgs = styled(Image)`
display: flex;
justify-content: center;
background-image: url(${props => props.src});
border: 3px solid #000000;
width: 80%;
height: 80%;
`;