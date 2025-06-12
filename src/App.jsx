import Card from './components/Card/Card';
import { GlobalStyles } from './styles/GlobalStyles';
import { COLORS } from './styles/colors';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<div className='contenedorCards'>
				<Card
					color={COLORS.Bright_orange}
					title='SEDANS'
					image='icon-sedans.svg'
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
					minus, perferendis deserunt voluptate praesentium fugiat et veniam nam
					error officiis est sunt optio eveniet rerum. Perspiciatis dolores
					officiis dolor doloremque!
				</Card>
				<Card color={COLORS.Dark_cyan} title='SUVS' image='icon-suvs.svg'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odio
					natus molestiae ipsum quisquam perspiciatis nam tempora, quos
					voluptates, commodi pariatur reprehenderit? Suscipit eaque perferendis
					dolorum omnis molestias, magni autem?
				</Card>
				<Card
					color={COLORS.Very_dark_cyan}
					title='LUXURY'
					image='icon-luxury.svg'
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
					voluptates adipisci voluptas, perferendis, odio vitae aliquid
					blanditiis delectus tenetur quas animi beatae neque nobis deserunt quo
					suscipit sed distinctio accusantium!
				</Card>
			</div>
		</div>
	);
};

export default App;
