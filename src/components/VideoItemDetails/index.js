import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  VideoDetailsContainer,
  VideoContentContainer,
  VideoDescription,
  LoaderContainer,
  NoVideosViewContainer,
  NoVideosImage,
  NoVideosFoundHeading,
  NoVideosFoundDes,
  TrendingRetryButton,
  VideoCardSpecifications,
  VideoSpecificationsContainer,
  VideoSpecificationsContentContainer,
  ChannelLogo,
  VideoChannelDescription,
  VideoChannelSpecifications,
  ChannelSpecificationsContainer,
  ChannelSpecificationsDes,
  CommentButton,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN-PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    activeStatus: apiStatus.initial,
    videoDetails: {},
    isLikeActive: false,
    isDislikeActive: false,
    isSaveActive: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({activeStatus: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const formattedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        thumbNailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }

      this.setState({
        videoDetails: formattedData,
        activeStatus: apiStatus.success,
      })
    } else {
      this.setState({activeStatus: apiStatus.failure})
    }
  }

  onClickLike = () => {
    this.setState({
      isLikeActive: true,
      isDislikeActive: false,
    })
  }

  onClickDislike = () => {
    this.setState({
      isLikeActive: false,
      isDislikeActive: true,
    })
  }

  changeSavedStatus = () => {
    this.setState(prevState => ({isSaveActive: !prevState.isSaveActive}))
  }

  renderInProgressView = () => (
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

  renderFailureView = () => (
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
            <TrendingRetryButton onClick={this.getVideoDetails}>
              Retry
            </TrendingRetryButton>
          </NoVideosViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessView = () => {
    const {
      videoDetails,
      isLikeActive,
      isDislikeActive,
      isSaveActive,
    } = this.state

    const {
      videoUrl,
      title,
      publishedAt,
      viewCount,
      channel,
      description,
    } = videoDetails
    const {profileImageUrl, name, subscriberCount} = channel
    const date = formatDistanceToNow(new Date(publishedAt))
    const saveButtonText = isSaveActive ? 'Saved' : 'Save'
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme, addToSavedList} = value
          const style = isLightTheme ? {colorL: '#606060'} : {color: '#cccccc'}

          const onClickSave = () => {
            addToSavedList(videoDetails)
            this.changeSavedStatus()
          }
          return (
            <>
              <ReactPlayer width="100%" url={videoUrl} controls />
              <VideoDescription isLightTheme={isLightTheme}>
                {title}
              </VideoDescription>
              <VideoSpecificationsContentContainer>
                <VideoSpecificationsContainer>
                  <VideoCardSpecifications isLightTheme={isLightTheme}>
                    {viewCount} views
                  </VideoCardSpecifications>
                  <VscDebugStackframeDot style={style} />
                  <VideoCardSpecifications isLightTheme={isLightTheme}>
                    {date}
                  </VideoCardSpecifications>
                </VideoSpecificationsContainer>
                <VideoSpecificationsContainer>
                  <CommentButton
                    onClick={this.onClickLike}
                    isActive={isLikeActive}
                  >
                    <AiOutlineLike size="20px" /> Like
                  </CommentButton>

                  <CommentButton
                    onClick={this.onClickDislike}
                    isActive={isDislikeActive}
                  >
                    <AiOutlineDislike size="20px" /> Dislike
                  </CommentButton>

                  <CommentButton onClick={onClickSave} isActive={isSaveActive}>
                    <RiMenuAddFill size="20px" /> {saveButtonText}
                  </CommentButton>
                </VideoSpecificationsContainer>
              </VideoSpecificationsContentContainer>
              <hr />
              <ChannelSpecificationsContainer>
                <ChannelLogo alt="channel logo" src={profileImageUrl} />
                <div>
                  <VideoChannelDescription isLightTheme={isLightTheme}>
                    {name}
                  </VideoChannelDescription>
                  <VideoChannelSpecifications isLightTheme={isLightTheme}>
                    {subscriberCount} subscribers
                  </VideoChannelSpecifications>
                </div>
              </ChannelSpecificationsContainer>
              <ChannelSpecificationsDes isLightTheme={isLightTheme}>
                {description}
              </ChannelSpecificationsDes>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFinalView = () => {
    const {activeStatus} = this.state
    switch (activeStatus) {
      case apiStatus.success:
        return this.renderSuccessView()
      case apiStatus.inProgress:
        return this.renderInProgressView()
      case apiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <>
              <Header />
              <VideoDetailsContainer
                data-testid="videoItemDetails"
                isLightTheme={isLightTheme}
              >
                <SideBar />
                <VideoContentContainer isLightTheme={isLightTheme}>
                  {this.renderFinalView()}
                </VideoContentContainer>
              </VideoDetailsContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
