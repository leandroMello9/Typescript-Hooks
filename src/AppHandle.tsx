import React, {useRef} from 'react';
import Form, {FormRef} from './Form';
// import { Container } from './styles';

const AppHandle : React.FC = () => {
  const formRef = useRef<FormRef>(null);

  function handleSubmit() {
    formRef.current?.submit();
  }
  return (
    <Form ref={formRef}/>
  );
}

export default AppHandle;
