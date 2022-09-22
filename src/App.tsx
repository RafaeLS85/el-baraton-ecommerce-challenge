import { categories } from "./data/categories.json";

import "./App.css";


type Category = {
  id: number;
  name: string;
  sublevels?: Category[]
}
type MenuProps = {
  categories: Category[]
}

function Menu({categories} : MenuProps ) {
  return (
    <div>
      <ol>
        {categories.map((category) => (
          <li key={category.id}> 
           <span>{category.name}</span>
           { category.sublevels && <Menu categories={category.sublevels} /> }   
          </li>
        ))}
      </ol>
    </div>
  );
}
function App() {
  return (
    <div>
      <Menu categories={categories}/>
    </div>
  );
}

export default App;
