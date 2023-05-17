marked.setOptions({
    breaks: true,
     //Interpret carriage returns and render them as br (line break) elements. 
     gfm : true
})

//#region placeholder

const placeholder = `# Welcome to my React Markdown Previewer

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
  return multiLineCode;
}
}
\`\`\`

**bold** text
Also _italic_.
And **_both!_**
You could also ~~cross words out~~.

There's also [links](https://github.com/lezojeda), and
> Block Quotes!

Lists:

- First indentation level
\t- Second indentation
   - Third
      - And fourth

Numbered lists:

1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...

![React Logo w/ Text](https://goo.gl/Umyytc)`

//#endregion

class App extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
                text: placeholder
          }
          this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
          this.setState({ text: event.target.value })
    }

    render() {
          return (
                <div class="app-container">
                      <div class="container editor-container">
                            <div class = "title">Editor</div>
                            <textarea id="editor" value={this.state.text} onChange={this.handleChange}></textarea>
                      </div>
                      <Previewer text={this.state.text} />
                </div >
          )
    }
}

class Previewer extends React.Component {
    constructor(props) {
          super(props);
    }

    componentDidMount() {
      this.parseMarkdown(this.props.text)
    }

    componentDidUpdate(prevProps) {
      if (prevProps.text !== this.props.text) {
        this.parseMarkdown(this.props.text)
      }
    }

    parseMarkdown() {
      document.getElementById('preview').innerHTML =
        marked.parse(this.props.text);
    }

    render() {
          return (
                <div class="container previewer-container">
                      <div class = "title">Preview</div>
                      <div id="preview" />
                </div>

          )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))