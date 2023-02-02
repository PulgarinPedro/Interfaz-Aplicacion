
interface person {
    name: string;
    theme:{
    backgroundColor: string;
    color: string;
  }
}

export default function TodoList(person: person) {
    return(
        <div style={person.theme}>
            <h1>{person.name}&apos; Todos</h1>
            <img className="avatar" src="https://ekosnegocios.com/image/posts/March2022/jIRzLLynRDy0s6fsGGz7.jpg" />
            <ul>
               <li>Improve the videophone</li>
               <li>Prepare aeronautics lectures</li>
               <li>Work on the alcohol-fuelled engine</li>    
            </ul>  
        </div>
    );
}
