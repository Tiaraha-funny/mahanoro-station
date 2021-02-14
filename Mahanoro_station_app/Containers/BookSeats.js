export default function BookSeatsContainer() {
    const { trip } = useParams();
    const nextTrips = useSelector((state) => state.nextDestination);
    const bookingSeat = useSelector((state) => state.bookingSeats);
    const dispatch = useDispatch();
    const bookingSeatDetails = nextTrips.filter((trip) => trip.id === trip)
   useEffect(() => {
        dispatch(setBookingSeats(bookingSeatDetails))
   }, [])
   console.log(bookingSeat)
    return (
        <div>
            Hello
        </div>
    )
}