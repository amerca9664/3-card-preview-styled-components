import { v4 } from 'uuid';
import Card from './components/Card/Card';
import { GlobalStyles } from './styles/GlobalStyles';
import { COLORS } from './styles/colors';

const cards = [
	{
		colorObj: COLORS.Bright_orange,
		titleObj: 'SEDANS',
		imageObj: 'icon-sedans.svg',
		textObj:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, minus, perferendis deserunt voluptate praesentium fugiat et veniam nam error officiis est sunt optio eveniet rerum. Perspiciatis dolores officiis dolor doloremque!'
	},
	{
		colorObj: COLORS.Dark_cyan,
		titleObj: 'SUVS',
		imageObj: 'icon-suvs.svg',
		textObj:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odio natus molestiae ipsum quisquam perspiciatis nam tempora, quos voluptates, commodi pariatur reprehenderit? Suscipit eaque perferendis dolorum omnis molestias, magni autem?'
	},
	{
		colorObj: COLORS.Very_dark_cyan,
		titleObj: 'LUXURY',
		imageObj: 'icon-luxury.svg',
		textObj:
			' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, voluptates adipisci voluptas, perferendis, odio vitae aliquid blanditiis delectus tenetur quas animi beatae neque nobis deserunt quo suscipit sed distinctio accusantium!'
	}
];

const cardInfo = iteam => (
	<Card
		key={v4()}
		color={iteam.colorObj}
		title={iteam.titleObj}
		image={iteam.imageObj}
	>
		{iteam.textObj}
	</Card>
);

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<div className='contenedorCards'>{cards.map(cardInfo)}</div>
		</div>
	);
};

export default App;
