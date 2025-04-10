const parent = React.createElement('div', {
    id: 'parent'
}, [
    React.createElement('div', {
        id: 'child'
    }, [
        React.createElement('h1', {}, "I'm h1 Tag"),
        React.createElement('h2', {}, "I'm h2 Tag")
    ]),
    React.createElement('div', {
        id: 'child2'
    }, [
        React.createElement('h1', {}, "I'm h1 Tag"),
        React.createElement('h2', {}, "I'm h2 Tag")
    ])
]);
// JSX
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
