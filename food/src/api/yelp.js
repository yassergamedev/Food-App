import axios from 'axios'

export default (axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer dZouf8UfMvXijs-J_xA2uVjbQzD2wFwQ7L8q4JN9xizALa2SdvXB8HZDy1PKszQcXVpmx40dTxzFfnyYcfOrxqN2i5-dusJCajeQ9K2eqWhi7ryKJpvjb9hWZIH7ZHYx'
    }
}))