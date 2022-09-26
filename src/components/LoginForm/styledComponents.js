import styled from 'styled-components'

export const LoginLightBackground = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginLightContainer = styled.div`
  background-color: #ffffff;
  width: 90%;
  max-width: 500px;
  margin: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
`
export const Logo = styled.img`
  width: 120px;
  align-self: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const FromContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputCheckboxContainer = styled.div`
  display: flex;
`
export const LabelElement = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  border: 0;
  margin-bottom: 10px;
`
export const LabelCheckboxElement = styled.label`
  color: #231f20;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border: 0;
  margin-bottom: 10px;
  margin-left: 5px;
`
export const InputElement = styled.input`
  background-color: transparent;
  border: 1px solid #94a3b8;
  outline: none;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  color: #64748b;
`
export const Button = styled.button`
  background-color: #3b82f6;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
`
