import { ValidationError } from "express-validator"

export class RequestValidationError extends Error {
  statusCode = 400

  constructor(private errors: ValidationError[]){
    super()
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