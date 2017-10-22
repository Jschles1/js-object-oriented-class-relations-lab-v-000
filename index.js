let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = driverId++;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    })
  }

  passengers() {
    const passIds = this.trips().map(trip => trip.passengerId);
    return store.passengers.filter(passenger => {
      return passIds.includes(passenger.id);
    })
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = passengerId++;
    this.name = name;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    })
  }

  drivers() {
    const drivIds = this.trips().map(trip => trip.driverId);
    return store.drivers.filter(driver => {
      return drivIds.includes(driver.id);
    })
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = tripId++;
    if (driver) { this.driverId = driver.id; }
    if (passenger) { this.passengerId = passenger.id; }

    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }
}