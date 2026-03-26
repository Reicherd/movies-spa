import axios from "axios";

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzUzMmM2ZWE4NGQ3ZmZiOWJmYjY5YTM0Y2Q5ZTM2MyIsIm5iZiI6MTc3NDExOTY4NS45MzQsInN1YiI6IjY5YmVlYjA1ODExMGE2ZDE1NGQzNDA2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zGSx5qbQ1B4S45xCoFvT9pl4mPjGL0Pe-DGedweYHx8"
    }
})