class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName,
            this.flights = [],
            this.bookings = [],
            this.bookingsCount = 0
    }
    addFlight(flightNumber, destination, departureTime, price) {
        const bool = this.flights.find((flight) => flight.flightNumber === flightNumber);
        if (bool) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }
        const flight = {
            flightNumber: flightNumber,
            destination: destination,
            departureTime: departureTime,
            price: price
        }
        this.flights.push(flight);

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }
    bookFlight(passengerName, flightNumber) {
        const bool = this.flights.find((flight) => flight.flightNumber === flightNumber);
        if (!bool) {
            return `Flight ${flightNumber} is not available for booking.`; 
        }

            const booking = {
                passengerName: passengerName,
                flightNumber: flightNumber
            }
            this.bookings.push(booking);
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        

    }
    cancelBooking(passengerName, flightNumber) {
        if ((this.bookings.includes(passengerName)) === true && (this.bookings.includes(flightNumber)) === true) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }
        const bookingIndex = this.bookings.findIndex(b => b.passengerName === passengerName && b.flightNumber === flightNumber);
        this.bookings.splice(bookingIndex, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    }
    showBookings(criteria) {
        if (this.bookingsCount <= 0) {
            throw new Error(`No bookings have been made yet.`);
        }
        let cheapFlights = [];
        let expensiveFlights = [];
        for (let i = 0; i < this.bookings.length; i++) {
            const currBooking = this.bookings[i];
            const flightNumber = currBooking.flightNumber;
            const indexOfFlight = this.flights.findIndex(fl => {
                return fl.id === this.flights[flightNumber]
            });

            let corrspondingFlight = this.flights[indexOfFlight];
                if ( corrspondingFlight.price <= 100) {
                    cheapFlights.push(this.bookings[i]);
                } else {
                    expensiveFlights.push(this.bookings[i]);
                }
            }
            let firstRow;
            let printBookings = [];
            if (criteria === "all") {
                firstRow = `All bookings(${this.bookingsCount}):`;
                for (let i = 0; i < this.bookings.length; i++) {
                    printBookings.push(`${this.bookings[i].passengerName} booked for flight ${this.bookings[i].flightNumber}.`)
                }
                return [
                    firstRow,
                    printBookings.join('\n')
                ].join('\n');
            } else if (criteria === 'cheap') {
                if (cheapFlights.length <= 0) {
                    return "No cheap bookings found.";
                }
                firstRow = "Cheap bookings:";
                for (let i = 0; i < cheapFlights.length; i++) {
                    printBookings.push(`${cheapFlights[0].passengerName} booked for flight ${cheapFlights[1].flightNumber}.`)
                }
                return [
                    firstRow,
                    printBookings.join("\n")
                ].join('\n');
            } else if (criteria === 'expensive') {
                if (expensiveFlights.length <= 0) {
                    return "No expensive bookings found.";
                }
                firstRow = "Expensive bookings:";
                for (let i = 0; i < expensiveFlights.length; i++) {
                    printBookings.push(`${expensiveFlights[0].passengerName} booked for flight ${expensiveFlights[1].flightNumber}.`)
                }
                return [
                    firstRow,
                    printBookings.join("\n")
                ].join('\n');
            }
        }

    }
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  
  
  



