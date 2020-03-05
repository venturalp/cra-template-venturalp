import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes'
import Loading from './components/Loading'

export default () => {
  const isLoading = false

  return (
    <BrowserRouter>
      {isLoading && <Loading />}
      <Switch>
        {routes.map(route => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
