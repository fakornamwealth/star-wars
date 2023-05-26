//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  display: 'inline-block'
}

const headerStyle = {
  backgroundImage: 'url(/static/images/star-wars.jpg/)',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  maxHeight: '600px',
  color: '#fff'
}

const titleStyle = {
  color: '#fff',
  fontWeight: 'bold',
  textShadow: 'rgba(0,0,0,.5) 0 6px 6px'
}


const Header = () => (
    <div style={headerStyle}>
        <div className="container">
          <Link style={linkStyle} href="/">
            <h1 className="display-1" style={titleStyle}> Star Wars</h1>
          </Link>
        </div>
    </div>
)

export default Header