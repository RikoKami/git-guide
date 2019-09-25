import React from "react";
import logo from "./assets/logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Git Guide
        </p>
          {/* https://git-scm.com/book/pt-br/v1/Primeiros-passos-Configura%C3%A7%C3%A3o-Inicial-do-Git
          …or create a new repository on the command line echo "# git-guide" >>
          README.md git init git add README.md git commit -m "first commit" git
          remote add origin git@github.com:RikoKami/git-guide.git git push -u
          origin master …or push an existing repository from the command line
          git remote add origin git@github.com:RikoKami/git-guide.git git push
          -u origin master …or import code from another repository You can
          initialize this repository with code from a Subversion, Mercurial, or
          TFS project. Learn React */}
      </header>
    </div>
  );
}

export default App;
