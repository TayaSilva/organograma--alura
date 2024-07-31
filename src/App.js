
import Banner from './componentes/Banner/Banner';
import FormText from './componentes/FormText/Index';

function App() {
	return (
		<div className="App">
			<Banner />
			<FormText label="Nome" placeholder="Digite seu nome"/>
			<FormText label="Cargo"  placeholder="Digite seu cargo"/>
			<FormText label="Imagem"  placeholder="Digite o endereço da imagem"/>

		</div>
	);
}

export default App;
