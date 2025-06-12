import {
	StyledDiv,
	StyledH2,
	StyledP,
	StyledImg,
	StyledButton
} from './card.styles';

const Card = ({ color, title, image, children }) => {
	return (
		<>
			<StyledDiv color={color}>
				<StyledImg src={`/assets/images/${image}`} alt={`icon ${title}`} />
				<StyledH2>{title}</StyledH2>
				<StyledP>{children}</StyledP>
				<StyledButton color={color}>Learn more</StyledButton>
			</StyledDiv>
		</>
	);
};

export default Card;
