import { ValidationError } from "express-validator"
import { CustomError } from "./custom-error"

export class RequestValidationError extends CustomError {
  statusCode = 400

  constructor(private errors: ValidationError[]){
    super("Invalid request parameters")
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  
  }

  getErrors(): ValidationError[] {
    return this.errors;
  }

  serializeErrors(){
    return this.errors.map(error => {
      return { message: error.msg, field: error.msg}
    })
  }
}
