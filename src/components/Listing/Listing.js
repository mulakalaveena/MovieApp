import React, { Component } from 'react'
import { 
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col 
} from 'reactstrap'; 
// import { moment } from 'moment'
import { apiKey } from '../../config/config'
import axiosInstance from '../axiosInstance'


class Listing extends Component {
    constructor (props) {
        super (props)
        this.state = {
            topMovies : [],
            page : 1,
            totalPages : 1,
            movieDetail : false,
            popularMovies : []
        }
    }
    componentDidMount () {
        this.getTopMovies ()
        // this.getPopularMovies ()
    }
    getTopMovies () {
        axiosInstance ({
            method : 'GET',
            url : `trending/all/day?api_key=${apiKey}`
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
    getPopularMovies () {
        axiosInstance ({
            method : 'GET',
            url : `popular?api_key=${apiKey}&language=en-US`,
        })
        .then(res => {
            console.log(res.data)
            this.setState ({
                popularMovies : res.data.results,
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