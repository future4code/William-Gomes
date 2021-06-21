import {performPurchase } from "../src/index"
import { User } from "../src/model/user"


test("Testing balance greater than value", () => {
    const user:User = {
        name:"Astrodev",
        balance:100
    }
    const result = performPurchase(user,40)

    expect(result).toEqual({
        name:"Astrodev",
        balance:60
    })
})

test("Testing bvalance greater than value",()=>{
    const user:User = {
        name:"Astrodev",
        balance:30
    }
    const result = performPurchase(user,50)

    expect(result).not.toBeDefined()
})