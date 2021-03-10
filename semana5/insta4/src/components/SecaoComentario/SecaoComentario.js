import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorComentario: ''
		
	}

	onChangeComentario = (event) => {
		this.setState({valorComentario: event.target.value})
		console.log(event.target)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}			
				onChange={this.onChangeComentario} value = {this.state.valorComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
