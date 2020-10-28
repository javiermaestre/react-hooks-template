const ADMIN = 'ADMIN';
const USER = 'USER';
const ALL_USER_TYPES = [ADMIN, USER] as const;

declare type Roles = typeof ALL_USER_TYPES[number];

const ANY_ROLE: Roles[] = [ADMIN, USER];
const BASIC_ROLE: Roles[] = [USER];
const ADMIN_ROLE: Roles[] = [ADMIN];

/**
 * Check if the role provided has an ADMIN role
 * @param role The role to check
 */
function isAdmin(role: string): boolean {
  return ADMIN_ROLE.includes(role as Roles);
}

/**
 * Check if the role provided has an BASIC role
 * @param role The role to check
 */
function isBasic(role: string): boolean {
  return BASIC_ROLE.includes(role as Roles);
}

export { isAdmin, isBasic, ADMIN_ROLE, ANY_ROLE, BASIC_ROLE };
