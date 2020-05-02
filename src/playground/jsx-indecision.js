console.log("he is the asshole");

// JSX -JavaScrip XML

const app = {
  title: "Indecision app",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecision();
  }
}

// moy importante that you remember to re-render the page on change

const removeAll = () => {
  app.options = [];
  renderIndecision();
};


const onMakeDecision = () => {
  let optionSection = Math.floor(Math.random() * app.options.length)
  if (app.options.length == 0) {
    return;
  }
  alert(app.options[optionSection]);
}


const numbers = [55, 101, 1000];

const renderIndecision = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? (<p>Here are some options</p>) : (<p>No options</p>)}
      <button onClick={onMakeDecision}>What should i do?</button>
      <button onClick={removeAll}> Remove all options</button>
      {
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
      }
      <ol id="orderedlist">
        {app.options.map((option) => {
          return <li key={option}>{option}</li>
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);

}


const appRoot = document.getElementById("app");

renderIndecision();


