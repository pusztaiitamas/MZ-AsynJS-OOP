class User{
    #firstName
    #lastName
    #email
    constructor(firstName,lastName,email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
    }

    get getFullName(){
        return this.#firstName + " " + this.#lastName;
    }

    get getEmail(){
        return this.#email;
    }
}
export {User};