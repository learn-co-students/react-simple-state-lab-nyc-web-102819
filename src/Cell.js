import React from 'react'

class Cell extends React.Component {
    constructor(props) {
        // debugger
        super()
        this.state = {
            color: `${props.value}`
        }
        debugger
    }

    colorChanger = () => {
        this.setState({
            color: "#333"
        })
    }

    render() {
        return(
            <div onClick={this.colorChanger} className="cell" style={{backgroundColor: this.state.color}}></div>
        )
    }
}


export default Cell