    // const heading = React.createElement('div', {}, 'Hello from React');
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(heading)

// const heading = React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, `I'm h1 tag`), React.createElement('h1', {}, `I'm h1 tag`)]);
// const root = ReactDOM.createRoot(document.getElementById('parent'));
// root.render(heading);



const heading = React.createElement('div', { id: 'child1' }, [React.createElement('h1', {}, `I'm h1 tag`), React.createElement('h1', {}, `I'm h1 tag`)],React.createElement('div', { id: 'child2' }, [React.createElement('h1', {}, `I'm h1 tag`), React.createElement('h1', {}, `I'm h1 tag`)])  );
const root = ReactDOM.createRoot(document.getElementById('parent'));
root.render(heading);