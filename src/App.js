import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ThemeContext from './Context/ThemeContext'
import './App.css'

class App extends Component {
  state = {
    isLightTheme: true,
    savedVideosList: [],
  }

  addToSavedList = videoDetails => {
    const {savedVideosList} = this.state
    const findDetails = savedVideosList.find(
      each => each.id === videoDetails.id,
    )
    if (findDetails === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetails],
      }))
    } else {
      const filteredList = savedVideosList.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({savedVideosList: filteredList})
    }
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isLightTheme: !prevState.isLightTheme}))
  }

  render() {
    const {isLightTheme, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isLightTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideosList,
          addToSavedList: this.addToSavedList,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </>
      </ThemeContext.Provider>
    )
  }
}

export default App
