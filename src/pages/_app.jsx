import { MenuProvider } from '../providers/menu'

import '../styles/globals.css'

function MyApp ({Component,pageProps}) {
    return (
        <MenuProvider> 
            <Component {...pageProps}/>
        </MenuProvider>
    )      
}

export default MyApp 