import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

const Modal = styled.div`
    position: fixed;
    top: 0px;
    right: ${p => p.show ? '0px' : '-50vw'};
    z-index: 2147483647;
    overflow: hidden;
    outline: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1478D0;
    border-radius: 3px;
    color: white;
    margin: 2rem;
    padding: 10rem 5rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 4px 21px rgba(0,0,0,0.24);
`

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Modal show={this.props.showOverlay}>
                    <h1>SetBounty</h1><br/>
                    <p>Funding issues for open-source GitHub projects</p>
                </Modal>
            </div>
        )
       
    }
}

const mapStateToProps = ({ auth, environment }) => {
    return {
        ...auth,
        showOverlay: environment.showOverlay
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);