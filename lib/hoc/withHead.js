import Head from 'next/head'

export default ComposedComponent => props => (
  <div>
    <Head>
      <link rel='stylesheet' href='/static/react-md.light_blue-yellow.min.css' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons' />
    </Head>
    <ComposedComponent {...props} />
  </div>
)
