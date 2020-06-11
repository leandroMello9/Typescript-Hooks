import React,{forwardRef, useImperativeHandle} from 'react';

// import { Container } from './styles';
interface FormProps {
  initialData?:string;
}
export interface FormRef {
  submit(): void;
}
const Form: React.RefForwardingComponent<FormRef,FormProps> = (props, ref) => {
  function submit() {
    alert('submit')
    
  }
  useImperativeHandle(ref, () => ({
      submit,
  }))
  return (
    <form action="">
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
    </form>
  );
}
//forwardRef = redirecionamento da referencia
export default forwardRef(Form);
