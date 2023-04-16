import ModuleOne from "./componentcssmodule/lesson1";
import StyleModuleTwo from "./componentcssmodule/lesson2";

function App() {
  return (
    <div className="app--one">
      <StyleModuleTwo />
      <ModuleOne />
    </div>
  );
}

export default App;
