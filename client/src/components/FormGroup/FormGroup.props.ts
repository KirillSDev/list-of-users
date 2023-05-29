import { FormProps } from 'react-bootstrap';
export interface IFormGroup extends FormProps {
    type: 'Login' | 'Register';
}
