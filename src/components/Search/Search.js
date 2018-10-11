import React, { Component } from 'react'
import { Input } from 'reactstrap'
import { apiKey } from '../../config/config';
import axios from 'axios'


class Search extends Component {
    constructor (props) {
        super (props)
        this.state = {
            search : '',
            searchResults : [],
            page : 1,
            totalPages : 1,
            getSearch : false
        }
        this.handleSearch = this.handleSearch.bind(this)
        // this.getSearch = this.getSearch.bind(this)
        // this.setResults = this.setResults.bind(this)
    }
    handleSearch (e) {
        this.setState({
            search: e.target.value,
            getSearch : true
        })
    }
    getSearch () {
        axios ({
            method : 'GET',
            url : `https://api.themoviedb.org/3/discover/search/multi?query=${this.state.search}?api_key=${apiKey}`,
            headers: {
                'Content-Type': 'application/json'
            },
            json : true
        })
        .then(res => {
            console.log(res.data)
            this.setState ({
                searchResults : res.data.results,
                page : res.data.page,
                totalPages : res.data.total_pages
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render () {
        return (
            <div>
                {this.state.getSearch ? this.getSearch () : null}
                <label>search</label>
                <Input type="text" value = {this.state.search} onChange={this.handleSearch}/>
            </div>
        )
    }
}
export default Search