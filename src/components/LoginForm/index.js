import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginLightBackground,
  LoginLightContainer,
  FromContainer,
  InputContainer,
  InputCheckboxContainer,
  Logo,
  LabelElement,
  LabelCheckboxElement,
  InputElement,
  Button,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isFailure: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onClickCheckbox = event => {
    this.setState({showPassword: event.target.checked})
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onFailureLogin = data => {
    this.setState({errorMsg: data.error_msg, isFailure: true})
  }

  onSubmitUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data)
    }
  }

  renderInputUsername = () => {
    const {username} = this.state
    return (
      <>
        <LabelElement htmlFor="loginInput">USERNAME</LabelElement>
        <InputElement
          onChange={this.onChangeUsername}
          value={username}
          className="input-element"
          id="loginInput"
          placeholder="Username"
          type="text"
        />
      </>
    )
  }

  renderInputPassword = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <>
        <LabelElement htmlFor="loginPassword">PASSWORD</LabelElement>
        <InputElement
          onChange={this.onChangePassword}
          value={password}
          className="input-element"
          id="loginPassword"
          placeholder="Password"
          type={passwordType}
        />
      </>
    )
  }

  renderInputCheckbox = () => (
    <>
      <InputElement
        id="inputCheckbox"
        onClick={this.onClickCheckbox}
        type="checkbox"
      />
      <LabelCheckboxElement htmlFor="inputCheckbox">
        Show Password
      </LabelCheckboxElement>
    </>
  )

  render() {
    const {isFailure, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginLightBackground>
        <LoginLightContainer>
          <Logo
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <FromContainer onSubmit={this.onSubmitUserDetails}>
            <InputContainer>{this.renderInputUsername()}</InputContainer>
            <InputContainer>{this.renderInputPassword()}</InputContainer>
            <InputCheckboxContainer>
              {this.renderInputCheckbox()}
            </InputCheckboxContainer>
            <Button type="submit">Login</Button>
          </FromContainer>
          {isFailure && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </LoginLightContainer>
      </LoginLightBackground>
    )
  }
}
export default LoginForm
