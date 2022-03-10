class IssueFilter extends React.Component {
  render() {
    return <div>This is a placeholder for the issue filter.</div>;
  }
}

class IssueTable extends React.Component {
  render() {
    return <div>This is a placeholder for a table of issues.</div>;
  }
}

class IssueAdd extends React.Component {
  render() {
    return <div>This is a placeholder for a form to add an issue.</div>;
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  }
}

const element = <IssueList />;

// render the React elements and actually display them on the site
ReactDOM.render(element, document.getElementById("content"));
