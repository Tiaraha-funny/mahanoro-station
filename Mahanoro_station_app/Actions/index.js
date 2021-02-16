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

const chair = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Fpng-airplane-chair-seat-computer-icons-emoji-seat-icon-5278406%2Fpreview.html&psig=AOvVaw2emjj6g7qS36Z4ILcMBl_D&ust=1613534941125000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNi-1Y297u4CFQAAAAAdAAAAABAD";
