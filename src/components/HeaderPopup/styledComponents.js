import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 0;
`

export const CrossIconButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  outline: none;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 100vh;
`

export const NavLinksList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0;
  width: 100%;
`

export const NavLinkItem = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  max-width: 500px;
  margin-bottom: 20px;
  height: 50px;
  background-color: ${props => {
    if (props.isLightTheme && props.isActive) {
      return '#cbd5e1'
    }
    if (!props.isLightTheme && props.isActive) {
      return '#383838'
    }
    return ''
  }};
  color: ${props => (props.isActive ? '#ff0000' : '#909090')};
  width: 100%;
`

export const NavLinkContent = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0px;
  margin-left: 15px;
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  margin-top: 2px;
`
