import crypto from "crypto";

/**
 * ! crypto.randomBytes()

const otpChar = crypto.randomBytes(3).toString("hex");
console.log("otpChar:",otpChar); // otpChar = aa8587

const apiKey = crypto.randomBytes(16).toString("hex");
console.log("apiKey:",apiKey);
 */

/**
 * ! crypto.randomInt(min, max)
const createOtp = (length = 6) => crypto.randomInt(10**(length - 1), 10**length);
console.log(createOtp())
console.log(createOtp(4))
*/

/**
 * ! Hashing
 * ? crypto.createHash()
 * ? sha256 => 32 bytes 
 * ? sha512 => 64 bytes
 * 
 * sha = secure hashing algorithm

const password = "Superman123";

const passwordHash = crypto.createHash("sha256").update(password).digest("hex");
console.log("passwordHash:",passwordHash);
// passwordHash = 80b50b5f2d8dc0444bb44c5482c35eb2dc3b25436d9f1f6bae1540d6339f6afa


const passwordInput = "Superman123";
const newPasswordHash = crypto.createHash("sha256").update(passwordInput).digest("hex")
console.log("newPasswordHash:", newPasswordHash);

console.log(passwordHash === newPasswordHash)
 */

const createHash = (value) => {
  return crypto.createHash("sha256").update(value).digest("hex");
};

const password1 = "Superman1";
const hashPassword = createHash(password1);
console.log("hashPassword:", hashPassword);

const password2 = "Superman1";
const newHashPassword = createHash(password2);
console.log("newHashPassword:", newHashPassword);

console.log("comparison:", hashPassword === newHashPassword);
