import crypto, { pbkdf2Sync } from "crypto";

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

/**
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
 */


/**
 * ! Use secret key to create more secure password
 * ? crypto.createHmac()
*/ 
const password1 = "Raj123";
const password2 = "Raj123";
const secretKey = "mysecret" 

const hashPassword1 = crypto.createHmac("sha256",secretKey).update(password1).digest("hex");
console.log("hashPassword1:", hashPassword1);


const hashPassword2 = crypto.createHmac("sha256",secretKey).update(password2).digest("hex");
console.log("hashPassword2:", hashPassword2);
console.log(hashPassword1 === hashPassword2);


const ITERATIONS = 100000;
const KEYLEN = 32;
const DIGEST = "sha256";

const createhashPassword = (pass) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(pass,salt, ITERATIONS,KEYLEN , DIGEST).toString("hex")
  return `${salt}.${hash}`;
}


const hash1 = createhashPassword("Aditya123");
const hash2 = createhashPassword("Ravi#456");

const verifyPassword = (typedPassword, storePassword) => {
  const [ salt, storedHash] = storePassword.split(".");

  const newHash = crypto.pbkdf2Sync(typedPassword,salt, ITERATIONS,KEYLEN, DIGEST);

  const isMatched =  crypto.timingSafeEqual(Buffer.from(storedHash, "hex"),newHash);
  return isMatched;
}

console.log(verifyPassword("Aditya123", hash1));
console.log(verifyPassword("Aditya124", hash1));
