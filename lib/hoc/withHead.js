import Head from 'next/head'

export default ComposedComponent => props => (
  <div>
    <Head>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
    </Head>
    <ComposedComponent {...props} />
  </div>
)
