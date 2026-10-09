const EventEmitter = require("events");
const event = new EventEmitter();

/**
 * ! 1. Create Event
 * ? event.on("event name", event_listener_function)
 */

const handleLogin = (fullname) => {
  console.log(`User ${fullname} Logged In`);
};

const handleLogout = (fn) => {
  console.log(`User ${fn} Logout..!`);
};

event.on("login", handleLogin);
event.on("logout", handleLogout);

/**
 * ! 2. Run Event
 * ? event.emit()
 */
event.emit("login", "Raj");
event.emit("logout", "Raj");

event.removeAllListeners();

event.emit("login", "Dinga");
event.emit("logout", "Dinga");

/**
 * ! Remove Listener
 * ? event.removeListener("event name", listener function)
 * ? event.off("event name", listener function)
 * ? event.removeAllListeners()
 */
