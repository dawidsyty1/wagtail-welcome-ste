import { Component } from 'react';
import axios from '../axios';



class BaseSection extends Component {
    state = {
        page_content: null
    }

    componentWillMount() {
        axios.get('/pages/' + this.props.id)
            .then(res => res.data)
            .then(page => this.setState({page_content:page}))
            .catch(error => { console.log(error) });
    };
};

export default BaseSection;
