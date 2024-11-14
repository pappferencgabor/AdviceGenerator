import './app.css'
import { useState, useEffect } from 'react'
import { fetchAdvice } from './api/api'
import { adviceType } from './type/type'

function App() {
	const [advice, setAdvice] = useState<adviceType>()

	useEffect(() => {
		const getAdvice = async() => {
			const adviceData = await fetchAdvice()
			setAdvice(adviceData)
		}
		getAdvice()
	}, [])

	return (
		<>
			<div className='container'>
				<p className='advice-num'>Advice #{advice?.id}</p>

				<h2 className='advice-text'><q>{advice?.advice}</q></h2>

				<hr/>

				<button>
					<img src="public/icon-dice.svg" alt="" />
				</button>
			</div>
		</>
	)
}

export default App
