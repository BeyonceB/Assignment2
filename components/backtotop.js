import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Back onClick={scrollToTop}>
            <Image src="/arrow.png" width="40" height="40" />
        </Back>
      )}
    </>
  );
};

const Back = styled.div`
display: flex;
position: fixed;
bottom: 40px;
right: 40px;
`;
