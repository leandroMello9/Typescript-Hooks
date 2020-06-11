import React,{
  useState,
  useReducer,
  useRef,
  useCallback,
  useContext,
  useImperativeHandle,
} from 'react';

interface User {
  name: string,
  login: string,
  avatar_url: string
  
}
interface App {
  data: Array<User>;
}

function App() {
  //Guardando um input dentra da referencia, não pode começar como undefinded e sim null
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<User>()
  //Example useMemo, juntando todos os nomes por virgula
   //const names = useMemo(() => users?.map(user => user.name).join(', '), [users])
  async function loadData() {
    fetch('https://api.github.com/users/leandroMello9').then(resp => {
      resp.json().then(resp => setUsers(resp)).catch(console.log)
    });
   
    inputRef?.current?.focus();
  }
  loadData();
  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form> 
  );
}

export default App;
