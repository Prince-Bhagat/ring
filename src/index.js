import { createRoot } from 'react-dom/client'
import './styles.css'
import { Logo } from '@pmndrs/branding'
import { App } from './App'



function Root() {
  return (
    <>
      <App />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
       
        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '16px',fontFamily: "Emblema One",
  fontWeight: "400",  fontStyle: "normal" }} href="#">
          THE UNIVERSE OF MOST BEAUTIFUL GIRL <span>&#128147;&#128147;&#128147;&#128147;</span>

        </a>
      </div>{' '}
    </>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
