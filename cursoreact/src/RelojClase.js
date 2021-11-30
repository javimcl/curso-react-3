import React from 'react'

class RelojClase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hora: new Date() }
    }

    componentDidMount(){
        this.timer = setInterval(
            ()=>{
                this.setState(() => ({hora:new Date()}))
            },
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1>Son las: {this.state.hora.toLocaleTimeString()}</h1>
            </div>
        )
    }
}


export default RelojClase;