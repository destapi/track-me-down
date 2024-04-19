import Parse from './constants';

export function createGame() {
    // Simple syntax to create a new subclass of Parse.Object.
    const PaymentMethod = Parse.Object.extend("PaymentMethod");

    // Create a new instance of that class.
    const pm = new PaymentMethod();

    //set data and save
    pm.set("paymentType", "DEBITCARD");
    pm.set("accountNumber", "1224243254");
    pm.set("firstName", "Jimmy");
    pm.set("lastName", "Mwai");
    pm.set("expiryDate", "08/02/2025");
    pm.set("vericationPCode", "233");

    pm.save()
        .then((pm) => {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + pm.objectId);
        }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
        });
}