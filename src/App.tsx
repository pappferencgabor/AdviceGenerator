import './app.css'
import { useState, useEffect, FormEvent } from 'react'
import { fetchAdvice } from './api/api'
import { adviceType } from './type/type'

function App() {
	const [advice, setAdvice] = useState<adviceType>()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getAdvice = async() => {
			const adviceData = await fetchAdvice()
			setAdvice(adviceData)
			setIsLoading(false)
		}
		getAdvice()
	}, [])

	const handleSubmit = async(e:FormEvent) => {
		e.preventDefault()
		const adviceData = await fetchAdvice()
		setAdvice(adviceData)
		setIsLoading(false)
	}

	return (
		<>
			<form className='container' onSubmit={handleSubmit}>
				<p className='advice-num'>Advice #{advice?.id}</p>

				<h2 className='advice-text'>
					{ 
						isLoading ? 'Loading' : <q>{advice?.advice}</q>
					}
				</h2>

				<img src="public/pattern-divider-mobile.svg" alt="" className='dividerMobile'/>
				<img src="public/pattern-divider-desktop.svg" alt="" className='dividerDesktop'/>
				{/* <hr/> */}

				<button type='submit'>
					<img src="public/icon-dice.svg" alt="" />
				</button>
			</form>
		</>
	)
}

export default App
