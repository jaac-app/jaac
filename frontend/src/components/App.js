import React from 'react'
import 'css/App.css'
import Homepage from "../pages/homepage/Homepage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const App = () => {
	return (
		<Homepage />
	)
}

export default App
