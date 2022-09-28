import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const TrendingContentContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
`
export const SearchInputContainer = styled.div`
  width: 100%;
  max-width: 500px;
  border: 1px;
  border-style: solid;
  border-color: ${props => (props.isLightTheme ? ' #cbd5e1' : '#424242')};
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`
export const InputElement = styled.input`
  width: 93%;
  max-width: 500px;
  background-color: ${props =>
    props.isLightTheme ? '#ffffff' : 'transparent'};
  padding: 8px;
  border: 0;
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
  outline: none;
`

export const HomeSearchButton = styled.button`
  background-color: ${props => (props.isLightTheme ? '#cbd5e1' : '#212121')};
  border: 0;
  outline: none;
  cursor: pointer;
  padding-left: 15px;
  padding-right: 15px;
`

export const VideoItemsContainer = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const NoVideosImage = styled.img`
  margin-top: 50px;
  max-width: 400px;
`

export const NoVideosFoundHeading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`
export const NoVideosFoundDes = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#383838' : '#f4f4f4')};
  margin-top: 5px;
`
export const TrendingRetryButton = styled.button`
  background-color: #4f46e5;
  color:#ffffff;
  font-family:"Roboto"
  font-size:16px;
  padding:8px 16px 8px 16px;
  border:0;
  border-radius:3px;
  margin-bottom:10px;
`
export const TrendingBannerContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#ebebeb' : '#181818')};
  background-size: cover;
  height: 20vh;
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
`
export const BannerHeading = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#383838' : '#ffffff')};
  line-height: 1.5;
  margin-left: 15px;
`
export const BannerLogo = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${props => (props.isLightTheme ? '#d7dfe9' : '#0f0f0f')};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
