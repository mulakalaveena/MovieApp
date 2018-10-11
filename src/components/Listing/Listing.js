import React, { Component } from 'react'
import axios from 'axios'
import { 
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col 
} from 'reactstrap'; 
import { moment } from 'moment'

class Listing extends Component {
    constructor (props) {
        super (props)
        this.state = {
            topMovies : [],
            page : 1,
            totalPages : 1,
            movieDetail : false
        }
    }
    componentDidMount () {
        this.getTopMovies ()
    }
    getTopMovies () {
        axios ({
            method : 'GET',
            url : `https://api.themoviedb.org/4/discover/movie?primary_release_date.gte=2018-10-10`,
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWYxMjY4N2E5ODkxZTc1MTY0MjhkZDliNDE3ZTY4OSIsInN1YiI6IjVhOTNmNzEwMGUwYTI2MTZiZDAzMDBhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-1cpL4lWO7-UKjI41a02wxhfqM8sYSgpYfpaze6bZHI`,
                'Content-Type': 'application/json'
            },
            json : true
        })
        .then(res => {
            console.log(res.data)
            this.setState ({
                topMovies : res.data.results,
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
            <div className="container-fluid">
                <h1>Movies to release</h1>
                {this.state.topMovies.length > 0 ? 
                <Row>
                    {this.state.topMovies.map((e, key) => {
                        return <Col  md="4" sm="12" key = {key} >
                        <Card onClick = {() => this.setState({movieDetail : !this.state.movieDetail}) }>
                            <CardImg top width="100px" src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt={e.title} />
                            <CardBody>
                            <CardTitle>{e.title}</CardTitle>
                            <CardText >{e.overview}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    })}
                </Row>
                : <p>No Records</p>}
                {/* {this.state.movieDetail ? <MovieDetails/> : null } */}
            </div>
        )
    }
}
export default Listing