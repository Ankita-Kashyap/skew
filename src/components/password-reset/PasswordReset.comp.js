import React from 'react'
import  PropTypes  from 'prop-types'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
export const ResetPassword = ({handleOnChange,handleOnResetSubmit,formSwitcher = {formSwitcher},email}) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1 className='text-info text-center'>Reset Password</h1>
            <hr/>
            <Form autoComplete='off' onSubmit = {handleOnResetSubmit}>
            <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
                type = "email"
                name = "email"
                value ={email}

                onChange={handleOnChange} // it occurs when value of the function has been changed
                placeholder = "Enter Email"
                required
            />
            </Form.Group>
            <br/>
            <Button type = "submit">Reset Password</Button>
            </Form>
            <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#!'onClick={()=>formSwitcher('login')}>Loging Now</a>
            </Col>
        </Row>
    </Container>
  )
}
 ResetPassword.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnResetSubmit : PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    formSwitcher : PropTypes.func.isRequired

}
//doesnt crash the application coz of different data type