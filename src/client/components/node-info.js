import { h, Component } from 'preact';

class NodeInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSentences: false
    };
    this.toggleSentences = this.toggleSentences.bind(this);
  }

  toggleSentences() {
    this.setState(prevState => ({
      showSentences: !prevState.showSentences
    }));
  }

  render(){
    const { node } = this.props;
    const data = node.data();
    const { name } = data;
    const type = data.NodeTypeFormatted + (data.Type ? ` (${data.Type})` : '');
    const sentences = data.sentencesToShow;

    return h('div', { class: 'node-info' }, [
      h('div', { class: 'node-info-name' }, name),
      h('div', { class: 'node-info-type' }, type),
      h('div', { class: 'node-info-toggle' }, [
        h('div', { class: 'show-sentences', onClick: this.toggleSentences }, 'Show Sentences')
      ]),
      this.state.showSentences && h('div', { class: 'sentences-table-wrapper' }, [
        h('table', { class: 'sentences-table' }, [
          h('thead', {}, [
            h('tr', {}, [
              h('th', {}, 'Sentences')
            ])
          ]),
          h('tbody', {}, sentences.map(sentence =>
              h('tr', {}, [
                h('td', {}, sentence)
              ])
          ))
        ])
      ])
    ]);
  }
}

export default NodeInfo;
export { NodeInfo };
