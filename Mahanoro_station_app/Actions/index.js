export function destionation() {
    return async(dispatch) => {
        const res = await fetch(`https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json`);
        const destinations = await res.json();
        return dispatch({
            type: "DESTINATION",
            value: destinations
        })
    }
}

export function bookedSeats(seat) {
    return {
        type: "BOOK_SEATS",
        value: seat
    }
}

export function addSeats(seats) {
    console.log(seats);
    return {
        type: "ADD_SEATS",
        value: seats
    }
}
