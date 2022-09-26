import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import VideoItemCard from '../VideoItemCard'

import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContainer,
  HomeContainer,
  HomeContentContainer,
  HomeContentContainer1,
  SearchInputContainer,
  InputElement,
  HomeSearchButton,
  VideoItemsContainer,
  LoaderContainer,
  NoVideosViewContainer,
  NoVideosImage,
  NoVideosFoundHeading,
  NoVideosFoundDes,
  HomeButton,
  HomeBannerContainer,
  HeaderLogo,
  BannerDescription,
  BannerButton,
  CrossIconButton,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

let inputValue = ''

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN-PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    activeStatus: apiStatus.initial,
    videosList: [],
    displayBanner: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onClickBannerClose = () => {
    this.setState({displayBanner: false})
  }

  getHomeVideos = async () => {
    this.setState({activeStatus: apiStatus.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        publishedAt: video.published_at,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      this.setState({
        videosList: formattedData,
        activeStatus: apiStatus.success,
      })
    } else {
      this.setState({activeStatus: apiStatus.failure})
    }
  }

  renderHomeInProgressView = () => (
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

  renderNoHomeVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <NoVideosViewContainer>
            <NoVideosImage
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <NoVideosFoundHeading isLightTheme={isLightTheme}>
              No Search results found
            </NoVideosFoundHeading>
            <NoVideosFoundDes isLightTheme={isLightTheme}>
              Try different key words or remove search filter
            </NoVideosFoundDes>
            <HomeButton onClick={this.getHomeVideos}>Retry</HomeButton>
          </NoVideosViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeFailureView = () => (
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
              We are having some trouble
            </NoVideosFoundDes>
            <HomeButton onClick={this.getHomeVideos}>Retry</HomeButton>
          </NoVideosViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onBlurSearchInput = event => {
    inputValue = event.target.value
  }

  onClickSearchIcon = () => {
    this.setState({searchInput: inputValue}, this.getHomeVideos)
  }

  renderListOfJobs = () => {
    const {videosList} = this.state
    console.log(videosList)
    return (
      <VideoItemsContainer>
        {videosList.map(video => (
          <VideoItemCard key={video.id} videoDetails={video} />
        ))}
      </VideoItemsContainer>
    )
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length > 0
          ? this.renderListOfJobs()
          : this.renderNoHomeVideosView()}
      </>
    )
  }

  renderFinalView = () => {
    const {activeStatus} = this.state
    switch (activeStatus) {
      case apiStatus.success:
        return this.renderSuccessView()
      case apiStatus.inProgress:
        return this.renderHomeInProgressView()
      case apiStatus.failure:
        return this.renderHomeFailureView()
      default:
        return null
    }
  }

  renderSearchScreenInput = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const searchIconStyles = {
          fontSize: '15px',
          color: isLightTheme ? '#0f0f0f' : '#ffffff',
        }
        return (
          <SearchInputContainer isLightTheme={isLightTheme}>
            <InputElement
              isLightTheme={isLightTheme}
              onBlur={this.onBlurSearchInput}
              placeholder="Search"
              type="search"
            />
            <HomeSearchButton
              isLightTheme={isLightTheme}
              onClick={this.onClickSearchIcon}
              type="button"
              data-testid="searchButton"
            >
              <BsSearch style={searchIconStyles} />
            </HomeSearchButton>
          </SearchInputContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderBanner = () => {
    const {displayBanner} = this.state
    return (
      <HomeBannerContainer displayBanner={displayBanner} data-testid="banner">
        <div>
          <HeaderLogo
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </div>
        <div>
          <CrossIconButton
            onClick={this.onClickBannerClose}
            type="button"
            data-testid="close"
          >
            <IoMdClose size="24px" />
          </CrossIconButton>
        </div>
      </HomeBannerContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <MainContainer isLightTheme={isLightTheme} data-testid="home">
              <Header />
              <HomeContainer isLightTheme={isLightTheme}>
                <SideBar />
                <HomeContentContainer isLightTheme={isLightTheme}>
                  {this.renderBanner()}
                  <HomeContentContainer1>
                    {this.renderSearchScreenInput()}
                    {this.renderFinalView()}
                  </HomeContentContainer1>
                </HomeContentContainer>
              </HomeContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
