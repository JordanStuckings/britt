import styled from "styled-components";

export const Profile = styled.span`
  width: 19vw;
  height: 19vw;
  min-width: 75px;
  min-height: 75px;
  max-width: 120px;
  max-height: 120px;
  background-color: #fafafa;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin-left: auto;
  @media (min-width: 800px) {
    
  }
`;

export const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  
`;

export const ProfileName = styled.h1`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  font-size: 28px;
  line-height: 32px;
  font-weight: 300;
`;

export const ProfileTitle = styled.h2`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
