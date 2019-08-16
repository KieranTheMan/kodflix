import React from 'react'
class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        message: `Hello, this will be the details page 
        for each Movie & TV show :-)`
        }
    }
componentDidMount(){ //waits for the componetent to mouted(initiated) and runs the code inside
    setTimeout(()=> { this.setState({message:'Coming soon! :)'}); }, 3000);

}


render() {
    return ( 
        <div>
            <h1>{this.state.message}</h1>
        </div>
    );
  }
}
export default app

