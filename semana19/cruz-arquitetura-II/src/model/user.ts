export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export const toUserRoles = (value: string) => {
   switch (value) {
      case "NORMAL":
         return USER_ROLES.NORMAL
      case "ADMIN":
         return USER_ROLES.ADMIN
      default:
         // return USER_ROLES.NORMAL
         throw new Error("Valid user roles are 'NORMAL' and 'ADMIN'")
   }
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type userData = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}


export type user = userData & { id: string }

export const userModel = (
   input: any
): user => {
   return {
      id: input.id,
      name: input.name,
      nickname: input.nickname,
      email: input.email,
      password: input.password,
      role: toUserRoles(input.role)
   }
}