import '../styles/globals.css'
import { ConfigProvider } from 'antd'


function MyApp({ Component, pageProps }) {  
  return   <ConfigProvider
    theme={{
      token: {
        "colorPrimary": "#1abac4"
        , "wireframe": false
        , "colorSuccess": "#82ff44"
        , "colorWarning": "#fa6014"
        , "colorError": "#ff0004"
        , "colorInfo": "#1172f9"
      },
    }}>
        <Component {...pageProps} />
    </ConfigProvider>
}

export default MyApp
