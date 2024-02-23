import React, { Component } from 'react';

class DataFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(this.props.url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            this.setState({ data, loading: false });
        } catch (error) {
            this.setState({ loading: false, error });
        }
    }

    render() {
        const { data, loading, error } = this.state;
        const { render } = this.props;
        return render({ data, loading, error });
    }
}

export default DataFetcher;
