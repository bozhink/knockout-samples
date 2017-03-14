function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [{
        mealName: 'Standard (sandwich)',
        price: 0
    }, {
        mealName: 'Premium (lobster)',
        price: 34.95
    }, {
        mealName: 'Ultimate (whole zebra)',
        price: 290
    }];

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation(`Steve`, self.availableMeals[0]),
        new SeatReservation(`Bert`, self.availableMeals[0]),
        new SeatReservation(`N'Gosho`, self.availableMeals[2]),
    ]);

    // Operations
    self.addSeat = function() {
        self.seats.push(new SeatReservation('', self.availableMeals[0]));
    }

    self.removeSeat = function(seat) {
        if (seat) {
            self.seats.remove(seat);
        }
    }

    self.totalSurcharge = ko.computed(function() {
        var i, len, total = 0;
        len = self.seats().length;
        for (i = 0; i < len; i += 1) {
            total += self.seats()[i].meal().price;
        }

        return total;
    });
}
