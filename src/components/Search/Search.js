import React, { Component } from 'react'
import { Input } from 'reactstrap'
import axios from 'axios'

class Search extends Component {
    constructor (props) {
        super (props)
        this.state = {
            search : '',
            searchResults : [],
            page : 1,
            totalPages : 1
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.getSearch = this.getSearch.bind(this)
    }
    getSearch () {
        axios ({
            method : 'GET',
            url : `https://api.themoviedb.org/4/discover/movie/latest`,
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWYxMjY4N2E5ODkxZTc1MTY0MjhkZDliNDE3ZTY4OSIsInN1YiI6IjVhOTNmNzEwMGUwYTI2MTZiZDAzMDBhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-1cpL4lWO7-UKjI41a02wxhfqM8sYSgpYfpaze6bZHI`,
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
    handleSearch (e) {
        this.setState({
            search: e.target.value
        })
        this.getSearch ()
    }
    render () {
        return (
            <div>
                <Input
                    type="search" 
                    onChange={this.handleSearch}
                    value = {this.state.search}
                />
            </div>
        )
    }
}
export default Search