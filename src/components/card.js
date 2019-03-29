import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Theme from '../theme';

const StyledCard = styled.div`
  -webkit-box-align: stretch;
  -webkit-box-flex: 1;
  align-items: stretch;
  display: flex;
  flex: 1 1 auto;
  font-size: 16px;
  line-height: 20px;
  max-width: 680px;
  width: 100%;
  background: ${Theme.colors.light};
  height: 100%;
`;
const ImgDiv = styled.div`
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  background-position: 50% 50% !important;
  background-size: cover;
  display: block;
  height: 100%;
  outline: 0;
  text-decoration: none;
  background-origin: border-box;
  flex: 1 1 auto;
  flex-basis: 25%;
`;

const CardBody = styled.div`
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  text-align: left;
  flex-basis: 60%;
  padding: 0.5rem;
`;

const Title = styled.h2`
  font-family: ${Theme.headingFont};
  color: ${Theme.colors.dark};
  display: -webkit-box;
  fill: rgba(0, 0, 0, 0.84);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  max-height: 40px;
  margin: 0;
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Subtitle = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${Theme.colors.secondary};
  display: -webkit-box;
  fill: rgba(0, 0, 0, 0.54);
  font-size: 13px;
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0;
  line-height: 18px;
  margin-top: 2px;
  max-height: 40px;
  max-width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateY(1.52px);
`;

const CardLink = styled.div`
  color: ${Theme.colors.blue};
  background: white;
  margin-top: 0.5rem;
  padding: 0;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: uppercase;
`;

export const Card = ({ title, subtitle, img, link }) => {
  const imgStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <StyledCard>
      <CardBody>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {!link || <CardLink>{link}</CardLink>}
      </CardBody>
      {!img || <ImgDiv style={imgStyle} />}
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.element,
};

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.25rem;
  width: 100%;
  justify-content: center;
`;
export default Card;
