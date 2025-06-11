import {
	StyledDiv,
	StyledH2,
	StyledP,
	StyledImg,
	StyledButton
} from './card.styles';

const Card = ({ title, image, children }) => {
	return (
		<>
			<StyledDiv color='red'>
				<StyledImg src={`/assets/images/${image}`} alt={`icon ${title}`} />
				<StyledH2>{title}</StyledH2>
				<StyledP>{children}</StyledP>
				<StyledButton>Learn more</StyledButton>
			</StyledDiv>
		</>
	);
};

export default Card;
