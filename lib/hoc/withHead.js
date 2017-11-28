import Head from 'next/head'

export default ComposedComponent => props => (
  <div>
    <Head>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
      <title>Chefbook</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <ComposedComponent {...props} />
  </div>
)
