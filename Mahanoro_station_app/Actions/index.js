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
    return {
        type: "ADD_SEATS",
        value: seats
    }
}

export function getPrice(price) {
    console.log(seats);
    return {
        type: "GET_PRICE",
        value: price
    }
}

export function firstName(name) {
    return {
        type: "FIRST_NAME",
        value: name
    }
}

export function lastName(name) {
    return {
        type: "LAST_NAME",
        value: name
    }
}

export function phoneNumber(number) {
    return {
        type: "PHONE_NUMBER",
        value: number
    }
}