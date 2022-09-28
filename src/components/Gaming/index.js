import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import GamingCard from '../GamingCard'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  TrendingContainer,
  TrendingContentContainer,
  VideoItemsContainer,
  LoaderContainer,
  NoVideosViewContainer,
  NoVideosImage,
  NoVideosFoundHeading,
  NoVideosFoundDes,
  TrendingRetryButton,
  TrendingBannerContainer,
  BannerHeading,
  BannerLogo,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const fireStyles = {
  display: 'flex',
  color: '#ff0b37',
  fontSize: '24px',
  textDecoration: 'none',
}

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN-PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    activeStatus: apiStatus.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({activeStatus: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbNailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))
      this.setState({
        videosList: formattedData,
        activeStatus: apiStatus.success,
      })
    } else {
      this.setState({activeStatus: apiStatus.failure})
    }
  }

  renderTrendingInProgressView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const color = isLightTheme ? ' #4f46e5' : '#ffffff'
        return (
          <LoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color={color} height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const imageUrl = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <NoVideosViewContainer>
            <NoVideosImage alt="failure view" src={imageUrl} />
            <NoVideosFoundHeading isLightTheme={isLightTheme}>
              Oops! Something Went Wrong
            </NoVideosFoundHeading>
            <NoVideosFoundDes isLightTheme={isLightTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </NoVideosFoundDes>
            <TrendingRetryButton onClick={this.getTrendingVideos}>
              Retry
            </TrendingRetryButton>
          </NoVideosViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    console.log(videosList)
    return (
      <VideoItemsContainer>
        {videosList.map(video => (
          <GamingCard key={video.id} videoDetails={video} />
        ))}
      </VideoItemsContainer>
    )
  }

  renderFinalView = () => {
    const {activeStatus} = this.state
    switch (activeStatus) {
      case apiStatus.success:
        return this.renderSuccessView()
      case apiStatus.inProgress:
        return this.renderTrendingInProgressView()
      case apiStatus.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  renderBanner = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <TrendingBannerContainer
            isLightTheme={isLightTheme}
            data-testid="banner"
          >
            <BannerLogo isLightTheme={isLightTheme}>
              <FaGamepad style={fireStyles} />
            </BannerLogo>
            <BannerHeading isLightTheme={isLightTheme}>Gaming</BannerHeading>
          </TrendingBannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <>
              <Header />
              <TrendingContainer
                data-testid="gaming"
                isLightTheme={isLightTheme}
              >
                <SideBar />
                <TrendingContentContainer isLightTheme={isLightTheme}>
                  {this.renderBanner()}
                  {this.renderFinalView()}
                </TrendingContentContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
