import axios from 'axios'

export  const instance = axios.create ({
    baseUrl : 'https://api.themoviedb.org/4/discover/movie?primary_release_date.gte=2018-10-10&primary_release_date.lte=2018-10-10',
    headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWYxMjY4N2E5ODkxZTc1MTY0MjhkZDliNDE3ZTY4OSIsInN1YiI6IjVhOTNmNzEwMGUwYTI2MTZiZDAzMDBhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-1cpL4lWO7-UKjI41a02wxhfqM8sYSgpYfpaze6bZHI`,
        'Content-Type': 'application/json'
    },
})