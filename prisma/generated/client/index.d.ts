
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Distribuidor
 * 
 */
export type Distribuidor = $Result.DefaultSelection<Prisma.$DistribuidorPayload>
/**
 * Model Carrito
 * 
 */
export type Carrito = $Result.DefaultSelection<Prisma.$CarritoPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model TokenWhitelist
 * 
 */
export type TokenWhitelist = $Result.DefaultSelection<Prisma.$TokenWhitelistPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.distribuidor`: Exposes CRUD operations for the **Distribuidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distribuidors
    * const distribuidors = await prisma.distribuidor.findMany()
    * ```
    */
  get distribuidor(): Prisma.DistribuidorDelegate<ExtArgs>;

  /**
   * `prisma.carrito`: Exposes CRUD operations for the **Carrito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carritos
    * const carritos = await prisma.carrito.findMany()
    * ```
    */
  get carrito(): Prisma.CarritoDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.tokenWhitelist`: Exposes CRUD operations for the **TokenWhitelist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenWhitelists
    * const tokenWhitelists = await prisma.tokenWhitelist.findMany()
    * ```
    */
  get tokenWhitelist(): Prisma.TokenWhitelistDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    Distribuidor: 'Distribuidor',
    Carrito: 'Carrito',
    Category: 'Category',
    TokenWhitelist: 'TokenWhitelist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'product' | 'distribuidor' | 'carrito' | 'category' | 'tokenWhitelist'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Distribuidor: {
        payload: Prisma.$DistribuidorPayload<ExtArgs>
        fields: Prisma.DistribuidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistribuidorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistribuidorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          findFirst: {
            args: Prisma.DistribuidorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistribuidorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          findMany: {
            args: Prisma.DistribuidorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>[]
          }
          create: {
            args: Prisma.DistribuidorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          createMany: {
            args: Prisma.DistribuidorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DistribuidorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          update: {
            args: Prisma.DistribuidorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          deleteMany: {
            args: Prisma.DistribuidorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DistribuidorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DistribuidorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistribuidorPayload>
          }
          aggregate: {
            args: Prisma.DistribuidorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDistribuidor>
          }
          groupBy: {
            args: Prisma.DistribuidorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DistribuidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistribuidorCountArgs<ExtArgs>,
            result: $Utils.Optional<DistribuidorCountAggregateOutputType> | number
          }
        }
      }
      Carrito: {
        payload: Prisma.$CarritoPayload<ExtArgs>
        fields: Prisma.CarritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarritoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarritoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findFirst: {
            args: Prisma.CarritoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarritoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findMany: {
            args: Prisma.CarritoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          create: {
            args: Prisma.CarritoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          createMany: {
            args: Prisma.CarritoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarritoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          update: {
            args: Prisma.CarritoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          deleteMany: {
            args: Prisma.CarritoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarritoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarritoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          aggregate: {
            args: Prisma.CarritoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarrito>
          }
          groupBy: {
            args: Prisma.CarritoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarritoCountArgs<ExtArgs>,
            result: $Utils.Optional<CarritoCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      TokenWhitelist: {
        payload: Prisma.$TokenWhitelistPayload<ExtArgs>
        fields: Prisma.TokenWhitelistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenWhitelistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenWhitelistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload>
          }
          findFirst: {
            args: Prisma.TokenWhitelistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenWhitelistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload>
          }
          findMany: {
            args: Prisma.TokenWhitelistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload>[]
          }
          create: {
            args: Prisma.TokenWhitelistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload>
          }
          createMany: {
            args: Prisma.TokenWhitelistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TokenWhitelistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload>
          }
          update: {
            args: Prisma.TokenWhitelistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload>
          }
          deleteMany: {
            args: Prisma.TokenWhitelistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TokenWhitelistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TokenWhitelistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TokenWhitelistPayload>
          }
          aggregate: {
            args: Prisma.TokenWhitelistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTokenWhitelist>
          }
          groupBy: {
            args: Prisma.TokenWhitelistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TokenWhitelistGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenWhitelistCountArgs<ExtArgs>,
            result: $Utils.Optional<TokenWhitelistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    carritos: number
    tokenWhitelist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carritos?: boolean | UserCountOutputTypeCountCarritosArgs
    tokenWhitelist?: boolean | UserCountOutputTypeCountTokenWhitelistArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCarritosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CarritoWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenWhitelistArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TokenWhitelistWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    carritos: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carritos?: boolean | ProductCountOutputTypeCountCarritosArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCarritosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CarritoWhereInput
  }



  /**
   * Count Type DistribuidorCountOutputType
   */

  export type DistribuidorCountOutputType = {
    products: number
  }

  export type DistribuidorCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    products?: boolean | DistribuidorCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * DistribuidorCountOutputType without action
   */
  export type DistribuidorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistribuidorCountOutputType
     */
    select?: DistribuidorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DistribuidorCountOutputType without action
   */
  export type DistribuidorCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    email: string | null
    name: string | null
    direccion: string | null
    image: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    email: string | null
    name: string | null
    direccion: string | null
    image: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    email: number
    name: number
    direccion: number
    image: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    email?: true
    name?: true
    direccion?: true
    image?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    email?: true
    name?: true
    direccion?: true
    image?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    email?: true
    name?: true
    direccion?: true
    image?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    email: string
    name: string
    direccion: string | null
    image: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    direccion?: boolean
    image?: boolean
    password?: boolean
    carritos?: boolean | User$carritosArgs<ExtArgs>
    tokenWhitelist?: boolean | User$tokenWhitelistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    email?: boolean
    name?: boolean
    direccion?: boolean
    image?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    carritos?: boolean | User$carritosArgs<ExtArgs>
    tokenWhitelist?: boolean | User$tokenWhitelistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      carritos: Prisma.$CarritoPayload<ExtArgs>[]
      tokenWhitelist: Prisma.$TokenWhitelistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      email: string
      name: string
      direccion: string | null
      image: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const userWithEmailOnly = await prisma.user.findMany({ select: { email: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    carritos<T extends User$carritosArgs<ExtArgs> = {}>(args?: Subset<T, User$carritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'findMany'> | Null>;

    tokenWhitelist<T extends User$tokenWhitelistArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenWhitelistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly direccion: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.carritos
   */
  export type User$carritosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    where?: CarritoWhereInput
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    cursor?: CarritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }


  /**
   * User.tokenWhitelist
   */
  export type User$tokenWhitelistArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    where?: TokenWhitelistWhereInput
    orderBy?: TokenWhitelistOrderByWithRelationInput | TokenWhitelistOrderByWithRelationInput[]
    cursor?: TokenWhitelistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenWhitelistScalarFieldEnum | TokenWhitelistScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    name: string | null
    price: number | null
    codigo: string | null
    stock: number | null
    createdAt: Date | null
    categoryId: string | null
    distribuidorId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    name: string | null
    price: number | null
    codigo: string | null
    stock: number | null
    createdAt: Date | null
    categoryId: string | null
    distribuidorId: string | null
  }

  export type ProductCountAggregateOutputType = {
    name: number
    price: number
    codigo: number
    stock: number
    descripcionExtras: number
    createdAt: number
    categoryId: number
    distribuidorId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductMinAggregateInputType = {
    name?: true
    price?: true
    codigo?: true
    stock?: true
    createdAt?: true
    categoryId?: true
    distribuidorId?: true
  }

  export type ProductMaxAggregateInputType = {
    name?: true
    price?: true
    codigo?: true
    stock?: true
    createdAt?: true
    categoryId?: true
    distribuidorId?: true
  }

  export type ProductCountAggregateInputType = {
    name?: true
    price?: true
    codigo?: true
    stock?: true
    descripcionExtras?: true
    createdAt?: true
    categoryId?: true
    distribuidorId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    name: string
    price: number
    codigo: string
    stock: number
    descripcionExtras: JsonValue
    createdAt: Date
    categoryId: string
    distribuidorId: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    price?: boolean
    codigo?: boolean
    stock?: boolean
    descripcionExtras?: boolean
    createdAt?: boolean
    categoryId?: boolean
    distribuidorId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    distribuidor?: boolean | DistribuidorDefaultArgs<ExtArgs>
    carritos?: boolean | Product$carritosArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    name?: boolean
    price?: boolean
    codigo?: boolean
    stock?: boolean
    descripcionExtras?: boolean
    createdAt?: boolean
    categoryId?: boolean
    distribuidorId?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    distribuidor?: boolean | DistribuidorDefaultArgs<ExtArgs>
    carritos?: boolean | Product$carritosArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      distribuidor: Prisma.$DistribuidorPayload<ExtArgs>
      carritos: Prisma.$CarritoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      name: string
      price: number
      codigo: string
      stock: number
      descripcionExtras: Prisma.JsonValue
      createdAt: Date
      categoryId: string
      distribuidorId: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const productWithNameOnly = await prisma.product.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    distribuidor<T extends DistribuidorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistribuidorDefaultArgs<ExtArgs>>): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    carritos<T extends Product$carritosArgs<ExtArgs> = {}>(args?: Subset<T, Product$carritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly codigo: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly descripcionExtras: FieldRef<"Product", 'Json'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly distribuidorId: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.carritos
   */
  export type Product$carritosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    where?: CarritoWhereInput
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    cursor?: CarritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Distribuidor
   */

  export type AggregateDistribuidor = {
    _count: DistribuidorCountAggregateOutputType | null
    _min: DistribuidorMinAggregateOutputType | null
    _max: DistribuidorMaxAggregateOutputType | null
  }

  export type DistribuidorMinAggregateOutputType = {
    name: string | null
    createdAt: Date | null
  }

  export type DistribuidorMaxAggregateOutputType = {
    name: string | null
    createdAt: Date | null
  }

  export type DistribuidorCountAggregateOutputType = {
    name: number
    createdAt: number
    _all: number
  }


  export type DistribuidorMinAggregateInputType = {
    name?: true
    createdAt?: true
  }

  export type DistribuidorMaxAggregateInputType = {
    name?: true
    createdAt?: true
  }

  export type DistribuidorCountAggregateInputType = {
    name?: true
    createdAt?: true
    _all?: true
  }

  export type DistribuidorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distribuidor to aggregate.
     */
    where?: DistribuidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuidors to fetch.
     */
    orderBy?: DistribuidorOrderByWithRelationInput | DistribuidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistribuidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distribuidors
    **/
    _count?: true | DistribuidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistribuidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistribuidorMaxAggregateInputType
  }

  export type GetDistribuidorAggregateType<T extends DistribuidorAggregateArgs> = {
        [P in keyof T & keyof AggregateDistribuidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistribuidor[P]>
      : GetScalarType<T[P], AggregateDistribuidor[P]>
  }




  export type DistribuidorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DistribuidorWhereInput
    orderBy?: DistribuidorOrderByWithAggregationInput | DistribuidorOrderByWithAggregationInput[]
    by: DistribuidorScalarFieldEnum[] | DistribuidorScalarFieldEnum
    having?: DistribuidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistribuidorCountAggregateInputType | true
    _min?: DistribuidorMinAggregateInputType
    _max?: DistribuidorMaxAggregateInputType
  }

  export type DistribuidorGroupByOutputType = {
    name: string
    createdAt: Date
    _count: DistribuidorCountAggregateOutputType | null
    _min: DistribuidorMinAggregateOutputType | null
    _max: DistribuidorMaxAggregateOutputType | null
  }

  type GetDistribuidorGroupByPayload<T extends DistribuidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistribuidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistribuidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistribuidorGroupByOutputType[P]>
            : GetScalarType<T[P], DistribuidorGroupByOutputType[P]>
        }
      >
    >


  export type DistribuidorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    createdAt?: boolean
    products?: boolean | Distribuidor$productsArgs<ExtArgs>
    _count?: boolean | DistribuidorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distribuidor"]>

  export type DistribuidorSelectScalar = {
    name?: boolean
    createdAt?: boolean
  }

  export type DistribuidorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    products?: boolean | Distribuidor$productsArgs<ExtArgs>
    _count?: boolean | DistribuidorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DistribuidorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Distribuidor"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      name: string
      createdAt: Date
    }, ExtArgs["result"]["distribuidor"]>
    composites: {}
  }


  type DistribuidorGetPayload<S extends boolean | null | undefined | DistribuidorDefaultArgs> = $Result.GetResult<Prisma.$DistribuidorPayload, S>

  type DistribuidorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DistribuidorFindManyArgs, 'select' | 'include'> & {
      select?: DistribuidorCountAggregateInputType | true
    }

  export interface DistribuidorDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distribuidor'], meta: { name: 'Distribuidor' } }
    /**
     * Find zero or one Distribuidor that matches the filter.
     * @param {DistribuidorFindUniqueArgs} args - Arguments to find a Distribuidor
     * @example
     * // Get one Distribuidor
     * const distribuidor = await prisma.distribuidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DistribuidorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DistribuidorFindUniqueArgs<ExtArgs>>
    ): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Distribuidor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DistribuidorFindUniqueOrThrowArgs} args - Arguments to find a Distribuidor
     * @example
     * // Get one Distribuidor
     * const distribuidor = await prisma.distribuidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DistribuidorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DistribuidorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Distribuidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorFindFirstArgs} args - Arguments to find a Distribuidor
     * @example
     * // Get one Distribuidor
     * const distribuidor = await prisma.distribuidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DistribuidorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DistribuidorFindFirstArgs<ExtArgs>>
    ): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Distribuidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorFindFirstOrThrowArgs} args - Arguments to find a Distribuidor
     * @example
     * // Get one Distribuidor
     * const distribuidor = await prisma.distribuidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DistribuidorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DistribuidorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Distribuidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distribuidors
     * const distribuidors = await prisma.distribuidor.findMany()
     * 
     * // Get first 10 Distribuidors
     * const distribuidors = await prisma.distribuidor.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const distribuidorWithNameOnly = await prisma.distribuidor.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends DistribuidorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DistribuidorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Distribuidor.
     * @param {DistribuidorCreateArgs} args - Arguments to create a Distribuidor.
     * @example
     * // Create one Distribuidor
     * const Distribuidor = await prisma.distribuidor.create({
     *   data: {
     *     // ... data to create a Distribuidor
     *   }
     * })
     * 
    **/
    create<T extends DistribuidorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DistribuidorCreateArgs<ExtArgs>>
    ): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Distribuidors.
     *     @param {DistribuidorCreateManyArgs} args - Arguments to create many Distribuidors.
     *     @example
     *     // Create many Distribuidors
     *     const distribuidor = await prisma.distribuidor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DistribuidorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DistribuidorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Distribuidor.
     * @param {DistribuidorDeleteArgs} args - Arguments to delete one Distribuidor.
     * @example
     * // Delete one Distribuidor
     * const Distribuidor = await prisma.distribuidor.delete({
     *   where: {
     *     // ... filter to delete one Distribuidor
     *   }
     * })
     * 
    **/
    delete<T extends DistribuidorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DistribuidorDeleteArgs<ExtArgs>>
    ): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Distribuidor.
     * @param {DistribuidorUpdateArgs} args - Arguments to update one Distribuidor.
     * @example
     * // Update one Distribuidor
     * const distribuidor = await prisma.distribuidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DistribuidorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DistribuidorUpdateArgs<ExtArgs>>
    ): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Distribuidors.
     * @param {DistribuidorDeleteManyArgs} args - Arguments to filter Distribuidors to delete.
     * @example
     * // Delete a few Distribuidors
     * const { count } = await prisma.distribuidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DistribuidorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DistribuidorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distribuidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distribuidors
     * const distribuidor = await prisma.distribuidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DistribuidorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DistribuidorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Distribuidor.
     * @param {DistribuidorUpsertArgs} args - Arguments to update or create a Distribuidor.
     * @example
     * // Update or create a Distribuidor
     * const distribuidor = await prisma.distribuidor.upsert({
     *   create: {
     *     // ... data to create a Distribuidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distribuidor we want to update
     *   }
     * })
    **/
    upsert<T extends DistribuidorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DistribuidorUpsertArgs<ExtArgs>>
    ): Prisma__DistribuidorClient<$Result.GetResult<Prisma.$DistribuidorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Distribuidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorCountArgs} args - Arguments to filter Distribuidors to count.
     * @example
     * // Count the number of Distribuidors
     * const count = await prisma.distribuidor.count({
     *   where: {
     *     // ... the filter for the Distribuidors we want to count
     *   }
     * })
    **/
    count<T extends DistribuidorCountArgs>(
      args?: Subset<T, DistribuidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistribuidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distribuidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistribuidorAggregateArgs>(args: Subset<T, DistribuidorAggregateArgs>): Prisma.PrismaPromise<GetDistribuidorAggregateType<T>>

    /**
     * Group by Distribuidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistribuidorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistribuidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistribuidorGroupByArgs['orderBy'] }
        : { orderBy?: DistribuidorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistribuidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistribuidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distribuidor model
   */
  readonly fields: DistribuidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distribuidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistribuidorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Distribuidor$productsArgs<ExtArgs> = {}>(args?: Subset<T, Distribuidor$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Distribuidor model
   */ 
  interface DistribuidorFieldRefs {
    readonly name: FieldRef<"Distribuidor", 'String'>
    readonly createdAt: FieldRef<"Distribuidor", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Distribuidor findUnique
   */
  export type DistribuidorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidor to fetch.
     */
    where: DistribuidorWhereUniqueInput
  }


  /**
   * Distribuidor findUniqueOrThrow
   */
  export type DistribuidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidor to fetch.
     */
    where: DistribuidorWhereUniqueInput
  }


  /**
   * Distribuidor findFirst
   */
  export type DistribuidorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidor to fetch.
     */
    where?: DistribuidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuidors to fetch.
     */
    orderBy?: DistribuidorOrderByWithRelationInput | DistribuidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distribuidors.
     */
    cursor?: DistribuidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distribuidors.
     */
    distinct?: DistribuidorScalarFieldEnum | DistribuidorScalarFieldEnum[]
  }


  /**
   * Distribuidor findFirstOrThrow
   */
  export type DistribuidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidor to fetch.
     */
    where?: DistribuidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuidors to fetch.
     */
    orderBy?: DistribuidorOrderByWithRelationInput | DistribuidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distribuidors.
     */
    cursor?: DistribuidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distribuidors.
     */
    distinct?: DistribuidorScalarFieldEnum | DistribuidorScalarFieldEnum[]
  }


  /**
   * Distribuidor findMany
   */
  export type DistribuidorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter, which Distribuidors to fetch.
     */
    where?: DistribuidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distribuidors to fetch.
     */
    orderBy?: DistribuidorOrderByWithRelationInput | DistribuidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distribuidors.
     */
    cursor?: DistribuidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distribuidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distribuidors.
     */
    skip?: number
    distinct?: DistribuidorScalarFieldEnum | DistribuidorScalarFieldEnum[]
  }


  /**
   * Distribuidor create
   */
  export type DistribuidorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Distribuidor.
     */
    data: XOR<DistribuidorCreateInput, DistribuidorUncheckedCreateInput>
  }


  /**
   * Distribuidor createMany
   */
  export type DistribuidorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distribuidors.
     */
    data: DistribuidorCreateManyInput | DistribuidorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Distribuidor update
   */
  export type DistribuidorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Distribuidor.
     */
    data: XOR<DistribuidorUpdateInput, DistribuidorUncheckedUpdateInput>
    /**
     * Choose, which Distribuidor to update.
     */
    where: DistribuidorWhereUniqueInput
  }


  /**
   * Distribuidor updateMany
   */
  export type DistribuidorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distribuidors.
     */
    data: XOR<DistribuidorUpdateManyMutationInput, DistribuidorUncheckedUpdateManyInput>
    /**
     * Filter which Distribuidors to update
     */
    where?: DistribuidorWhereInput
  }


  /**
   * Distribuidor upsert
   */
  export type DistribuidorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Distribuidor to update in case it exists.
     */
    where: DistribuidorWhereUniqueInput
    /**
     * In case the Distribuidor found by the `where` argument doesn't exist, create a new Distribuidor with this data.
     */
    create: XOR<DistribuidorCreateInput, DistribuidorUncheckedCreateInput>
    /**
     * In case the Distribuidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistribuidorUpdateInput, DistribuidorUncheckedUpdateInput>
  }


  /**
   * Distribuidor delete
   */
  export type DistribuidorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
    /**
     * Filter which Distribuidor to delete.
     */
    where: DistribuidorWhereUniqueInput
  }


  /**
   * Distribuidor deleteMany
   */
  export type DistribuidorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distribuidors to delete
     */
    where?: DistribuidorWhereInput
  }


  /**
   * Distribuidor.products
   */
  export type Distribuidor$productsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Distribuidor without action
   */
  export type DistribuidorDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distribuidor
     */
    select?: DistribuidorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistribuidorInclude<ExtArgs> | null
  }



  /**
   * Model Carrito
   */

  export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  export type CarritoAvgAggregateOutputType = {
    id: number | null
    cantidad: number | null
  }

  export type CarritoSumAggregateOutputType = {
    id: number | null
    cantidad: number | null
  }

  export type CarritoMinAggregateOutputType = {
    id: number | null
    userId: string | null
    productId: string | null
    cantidad: number | null
    createdAt: Date | null
  }

  export type CarritoMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    productId: string | null
    cantidad: number | null
    createdAt: Date | null
  }

  export type CarritoCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    cantidad: number
    createdAt: number
    _all: number
  }


  export type CarritoAvgAggregateInputType = {
    id?: true
    cantidad?: true
  }

  export type CarritoSumAggregateInputType = {
    id?: true
    cantidad?: true
  }

  export type CarritoMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    cantidad?: true
    createdAt?: true
  }

  export type CarritoMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    cantidad?: true
    createdAt?: true
  }

  export type CarritoCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    cantidad?: true
    createdAt?: true
    _all?: true
  }

  export type CarritoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrito to aggregate.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carritos
    **/
    _count?: true | CarritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoMaxAggregateInputType
  }

  export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrito[P]>
      : GetScalarType<T[P], AggregateCarrito[P]>
  }




  export type CarritoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CarritoWhereInput
    orderBy?: CarritoOrderByWithAggregationInput | CarritoOrderByWithAggregationInput[]
    by: CarritoScalarFieldEnum[] | CarritoScalarFieldEnum
    having?: CarritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoCountAggregateInputType | true
    _avg?: CarritoAvgAggregateInputType
    _sum?: CarritoSumAggregateInputType
    _min?: CarritoMinAggregateInputType
    _max?: CarritoMaxAggregateInputType
  }

  export type CarritoGroupByOutputType = {
    id: number
    userId: string
    productId: string
    cantidad: number
    createdAt: Date
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  type GetCarritoGroupByPayload<T extends CarritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoGroupByOutputType[P]>
        }
      >
    >


  export type CarritoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    cantidad?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>

  export type CarritoSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    cantidad?: boolean
    createdAt?: boolean
  }

  export type CarritoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $CarritoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Carrito"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      userId: string
      productId: string
      cantidad: number
      createdAt: Date
    }, ExtArgs["result"]["carrito"]>
    composites: {}
  }


  type CarritoGetPayload<S extends boolean | null | undefined | CarritoDefaultArgs> = $Result.GetResult<Prisma.$CarritoPayload, S>

  type CarritoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CarritoFindManyArgs, 'select' | 'include'> & {
      select?: CarritoCountAggregateInputType | true
    }

  export interface CarritoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrito'], meta: { name: 'Carrito' } }
    /**
     * Find zero or one Carrito that matches the filter.
     * @param {CarritoFindUniqueArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarritoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarritoFindUniqueArgs<ExtArgs>>
    ): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Carrito that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarritoFindUniqueOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarritoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarritoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Carrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarritoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarritoFindFirstArgs<ExtArgs>>
    ): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Carrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarritoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarritoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Carritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carritos
     * const carritos = await prisma.carrito.findMany()
     * 
     * // Get first 10 Carritos
     * const carritos = await prisma.carrito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carritoWithIdOnly = await prisma.carrito.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CarritoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarritoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Carrito.
     * @param {CarritoCreateArgs} args - Arguments to create a Carrito.
     * @example
     * // Create one Carrito
     * const Carrito = await prisma.carrito.create({
     *   data: {
     *     // ... data to create a Carrito
     *   }
     * })
     * 
    **/
    create<T extends CarritoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarritoCreateArgs<ExtArgs>>
    ): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Carritos.
     *     @param {CarritoCreateManyArgs} args - Arguments to create many Carritos.
     *     @example
     *     // Create many Carritos
     *     const carrito = await prisma.carrito.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarritoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarritoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carrito.
     * @param {CarritoDeleteArgs} args - Arguments to delete one Carrito.
     * @example
     * // Delete one Carrito
     * const Carrito = await prisma.carrito.delete({
     *   where: {
     *     // ... filter to delete one Carrito
     *   }
     * })
     * 
    **/
    delete<T extends CarritoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarritoDeleteArgs<ExtArgs>>
    ): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Carrito.
     * @param {CarritoUpdateArgs} args - Arguments to update one Carrito.
     * @example
     * // Update one Carrito
     * const carrito = await prisma.carrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarritoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarritoUpdateArgs<ExtArgs>>
    ): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Carritos.
     * @param {CarritoDeleteManyArgs} args - Arguments to filter Carritos to delete.
     * @example
     * // Delete a few Carritos
     * const { count } = await prisma.carrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarritoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarritoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarritoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarritoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carrito.
     * @param {CarritoUpsertArgs} args - Arguments to update or create a Carrito.
     * @example
     * // Update or create a Carrito
     * const carrito = await prisma.carrito.upsert({
     *   create: {
     *     // ... data to create a Carrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrito we want to update
     *   }
     * })
    **/
    upsert<T extends CarritoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarritoUpsertArgs<ExtArgs>>
    ): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoCountArgs} args - Arguments to filter Carritos to count.
     * @example
     * // Count the number of Carritos
     * const count = await prisma.carrito.count({
     *   where: {
     *     // ... the filter for the Carritos we want to count
     *   }
     * })
    **/
    count<T extends CarritoCountArgs>(
      args?: Subset<T, CarritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarritoAggregateArgs>(args: Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>

    /**
     * Group by Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarritoGroupByArgs['orderBy'] }
        : { orderBy?: CarritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrito model
   */
  readonly fields: CarritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarritoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Carrito model
   */ 
  interface CarritoFieldRefs {
    readonly id: FieldRef<"Carrito", 'Int'>
    readonly userId: FieldRef<"Carrito", 'String'>
    readonly productId: FieldRef<"Carrito", 'String'>
    readonly cantidad: FieldRef<"Carrito", 'Int'>
    readonly createdAt: FieldRef<"Carrito", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Carrito findUnique
   */
  export type CarritoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }


  /**
   * Carrito findUniqueOrThrow
   */
  export type CarritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }


  /**
   * Carrito findFirst
   */
  export type CarritoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }


  /**
   * Carrito findFirstOrThrow
   */
  export type CarritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }


  /**
   * Carrito findMany
   */
  export type CarritoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carritos to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }


  /**
   * Carrito create
   */
  export type CarritoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrito.
     */
    data: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
  }


  /**
   * Carrito createMany
   */
  export type CarritoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carritos.
     */
    data: CarritoCreateManyInput | CarritoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Carrito update
   */
  export type CarritoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrito.
     */
    data: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
    /**
     * Choose, which Carrito to update.
     */
    where: CarritoWhereUniqueInput
  }


  /**
   * Carrito updateMany
   */
  export type CarritoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carritos.
     */
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyInput>
    /**
     * Filter which Carritos to update
     */
    where?: CarritoWhereInput
  }


  /**
   * Carrito upsert
   */
  export type CarritoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrito to update in case it exists.
     */
    where: CarritoWhereUniqueInput
    /**
     * In case the Carrito found by the `where` argument doesn't exist, create a new Carrito with this data.
     */
    create: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
    /**
     * In case the Carrito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
  }


  /**
   * Carrito delete
   */
  export type CarritoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter which Carrito to delete.
     */
    where: CarritoWhereUniqueInput
  }


  /**
   * Carrito deleteMany
   */
  export type CarritoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carritos to delete
     */
    where?: CarritoWhereInput
  }


  /**
   * Carrito without action
   */
  export type CarritoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarritoInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    name: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const categoryWithNameOnly = await prisma.category.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model TokenWhitelist
   */

  export type AggregateTokenWhitelist = {
    _count: TokenWhitelistCountAggregateOutputType | null
    _min: TokenWhitelistMinAggregateOutputType | null
    _max: TokenWhitelistMaxAggregateOutputType | null
  }

  export type TokenWhitelistMinAggregateOutputType = {
    jti: string | null
    lastActivity: Date | null
    userId: string | null
  }

  export type TokenWhitelistMaxAggregateOutputType = {
    jti: string | null
    lastActivity: Date | null
    userId: string | null
  }

  export type TokenWhitelistCountAggregateOutputType = {
    jti: number
    lastActivity: number
    userId: number
    _all: number
  }


  export type TokenWhitelistMinAggregateInputType = {
    jti?: true
    lastActivity?: true
    userId?: true
  }

  export type TokenWhitelistMaxAggregateInputType = {
    jti?: true
    lastActivity?: true
    userId?: true
  }

  export type TokenWhitelistCountAggregateInputType = {
    jti?: true
    lastActivity?: true
    userId?: true
    _all?: true
  }

  export type TokenWhitelistAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenWhitelist to aggregate.
     */
    where?: TokenWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenWhitelists to fetch.
     */
    orderBy?: TokenWhitelistOrderByWithRelationInput | TokenWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenWhitelists
    **/
    _count?: true | TokenWhitelistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenWhitelistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenWhitelistMaxAggregateInputType
  }

  export type GetTokenWhitelistAggregateType<T extends TokenWhitelistAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenWhitelist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenWhitelist[P]>
      : GetScalarType<T[P], AggregateTokenWhitelist[P]>
  }




  export type TokenWhitelistGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TokenWhitelistWhereInput
    orderBy?: TokenWhitelistOrderByWithAggregationInput | TokenWhitelistOrderByWithAggregationInput[]
    by: TokenWhitelistScalarFieldEnum[] | TokenWhitelistScalarFieldEnum
    having?: TokenWhitelistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenWhitelistCountAggregateInputType | true
    _min?: TokenWhitelistMinAggregateInputType
    _max?: TokenWhitelistMaxAggregateInputType
  }

  export type TokenWhitelistGroupByOutputType = {
    jti: string
    lastActivity: Date
    userId: string
    _count: TokenWhitelistCountAggregateOutputType | null
    _min: TokenWhitelistMinAggregateOutputType | null
    _max: TokenWhitelistMaxAggregateOutputType | null
  }

  type GetTokenWhitelistGroupByPayload<T extends TokenWhitelistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenWhitelistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenWhitelistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenWhitelistGroupByOutputType[P]>
            : GetScalarType<T[P], TokenWhitelistGroupByOutputType[P]>
        }
      >
    >


  export type TokenWhitelistSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jti?: boolean
    lastActivity?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenWhitelist"]>

  export type TokenWhitelistSelectScalar = {
    jti?: boolean
    lastActivity?: boolean
    userId?: boolean
  }

  export type TokenWhitelistInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TokenWhitelistPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "TokenWhitelist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      jti: string
      lastActivity: Date
      userId: string
    }, ExtArgs["result"]["tokenWhitelist"]>
    composites: {}
  }


  type TokenWhitelistGetPayload<S extends boolean | null | undefined | TokenWhitelistDefaultArgs> = $Result.GetResult<Prisma.$TokenWhitelistPayload, S>

  type TokenWhitelistCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TokenWhitelistFindManyArgs, 'select' | 'include'> & {
      select?: TokenWhitelistCountAggregateInputType | true
    }

  export interface TokenWhitelistDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenWhitelist'], meta: { name: 'TokenWhitelist' } }
    /**
     * Find zero or one TokenWhitelist that matches the filter.
     * @param {TokenWhitelistFindUniqueArgs} args - Arguments to find a TokenWhitelist
     * @example
     * // Get one TokenWhitelist
     * const tokenWhitelist = await prisma.tokenWhitelist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenWhitelistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TokenWhitelistFindUniqueArgs<ExtArgs>>
    ): Prisma__TokenWhitelistClient<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TokenWhitelist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TokenWhitelistFindUniqueOrThrowArgs} args - Arguments to find a TokenWhitelist
     * @example
     * // Get one TokenWhitelist
     * const tokenWhitelist = await prisma.tokenWhitelist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TokenWhitelistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenWhitelistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TokenWhitelistClient<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TokenWhitelist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenWhitelistFindFirstArgs} args - Arguments to find a TokenWhitelist
     * @example
     * // Get one TokenWhitelist
     * const tokenWhitelist = await prisma.tokenWhitelist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenWhitelistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenWhitelistFindFirstArgs<ExtArgs>>
    ): Prisma__TokenWhitelistClient<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TokenWhitelist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenWhitelistFindFirstOrThrowArgs} args - Arguments to find a TokenWhitelist
     * @example
     * // Get one TokenWhitelist
     * const tokenWhitelist = await prisma.tokenWhitelist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TokenWhitelistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenWhitelistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TokenWhitelistClient<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TokenWhitelists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenWhitelistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenWhitelists
     * const tokenWhitelists = await prisma.tokenWhitelist.findMany()
     * 
     * // Get first 10 TokenWhitelists
     * const tokenWhitelists = await prisma.tokenWhitelist.findMany({ take: 10 })
     * 
     * // Only select the `jti`
     * const tokenWhitelistWithJtiOnly = await prisma.tokenWhitelist.findMany({ select: { jti: true } })
     * 
    **/
    findMany<T extends TokenWhitelistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenWhitelistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TokenWhitelist.
     * @param {TokenWhitelistCreateArgs} args - Arguments to create a TokenWhitelist.
     * @example
     * // Create one TokenWhitelist
     * const TokenWhitelist = await prisma.tokenWhitelist.create({
     *   data: {
     *     // ... data to create a TokenWhitelist
     *   }
     * })
     * 
    **/
    create<T extends TokenWhitelistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenWhitelistCreateArgs<ExtArgs>>
    ): Prisma__TokenWhitelistClient<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TokenWhitelists.
     *     @param {TokenWhitelistCreateManyArgs} args - Arguments to create many TokenWhitelists.
     *     @example
     *     // Create many TokenWhitelists
     *     const tokenWhitelist = await prisma.tokenWhitelist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenWhitelistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenWhitelistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TokenWhitelist.
     * @param {TokenWhitelistDeleteArgs} args - Arguments to delete one TokenWhitelist.
     * @example
     * // Delete one TokenWhitelist
     * const TokenWhitelist = await prisma.tokenWhitelist.delete({
     *   where: {
     *     // ... filter to delete one TokenWhitelist
     *   }
     * })
     * 
    **/
    delete<T extends TokenWhitelistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TokenWhitelistDeleteArgs<ExtArgs>>
    ): Prisma__TokenWhitelistClient<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TokenWhitelist.
     * @param {TokenWhitelistUpdateArgs} args - Arguments to update one TokenWhitelist.
     * @example
     * // Update one TokenWhitelist
     * const tokenWhitelist = await prisma.tokenWhitelist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenWhitelistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TokenWhitelistUpdateArgs<ExtArgs>>
    ): Prisma__TokenWhitelistClient<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TokenWhitelists.
     * @param {TokenWhitelistDeleteManyArgs} args - Arguments to filter TokenWhitelists to delete.
     * @example
     * // Delete a few TokenWhitelists
     * const { count } = await prisma.tokenWhitelist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenWhitelistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TokenWhitelistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenWhitelists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenWhitelistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenWhitelists
     * const tokenWhitelist = await prisma.tokenWhitelist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenWhitelistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TokenWhitelistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenWhitelist.
     * @param {TokenWhitelistUpsertArgs} args - Arguments to update or create a TokenWhitelist.
     * @example
     * // Update or create a TokenWhitelist
     * const tokenWhitelist = await prisma.tokenWhitelist.upsert({
     *   create: {
     *     // ... data to create a TokenWhitelist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenWhitelist we want to update
     *   }
     * })
    **/
    upsert<T extends TokenWhitelistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TokenWhitelistUpsertArgs<ExtArgs>>
    ): Prisma__TokenWhitelistClient<$Result.GetResult<Prisma.$TokenWhitelistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TokenWhitelists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenWhitelistCountArgs} args - Arguments to filter TokenWhitelists to count.
     * @example
     * // Count the number of TokenWhitelists
     * const count = await prisma.tokenWhitelist.count({
     *   where: {
     *     // ... the filter for the TokenWhitelists we want to count
     *   }
     * })
    **/
    count<T extends TokenWhitelistCountArgs>(
      args?: Subset<T, TokenWhitelistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenWhitelistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenWhitelist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenWhitelistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenWhitelistAggregateArgs>(args: Subset<T, TokenWhitelistAggregateArgs>): Prisma.PrismaPromise<GetTokenWhitelistAggregateType<T>>

    /**
     * Group by TokenWhitelist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenWhitelistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenWhitelistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenWhitelistGroupByArgs['orderBy'] }
        : { orderBy?: TokenWhitelistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenWhitelistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenWhitelistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenWhitelist model
   */
  readonly fields: TokenWhitelistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenWhitelist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenWhitelistClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TokenWhitelist model
   */ 
  interface TokenWhitelistFieldRefs {
    readonly jti: FieldRef<"TokenWhitelist", 'String'>
    readonly lastActivity: FieldRef<"TokenWhitelist", 'DateTime'>
    readonly userId: FieldRef<"TokenWhitelist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TokenWhitelist findUnique
   */
  export type TokenWhitelistFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * Filter, which TokenWhitelist to fetch.
     */
    where: TokenWhitelistWhereUniqueInput
  }


  /**
   * TokenWhitelist findUniqueOrThrow
   */
  export type TokenWhitelistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * Filter, which TokenWhitelist to fetch.
     */
    where: TokenWhitelistWhereUniqueInput
  }


  /**
   * TokenWhitelist findFirst
   */
  export type TokenWhitelistFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * Filter, which TokenWhitelist to fetch.
     */
    where?: TokenWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenWhitelists to fetch.
     */
    orderBy?: TokenWhitelistOrderByWithRelationInput | TokenWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenWhitelists.
     */
    cursor?: TokenWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenWhitelists.
     */
    distinct?: TokenWhitelistScalarFieldEnum | TokenWhitelistScalarFieldEnum[]
  }


  /**
   * TokenWhitelist findFirstOrThrow
   */
  export type TokenWhitelistFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * Filter, which TokenWhitelist to fetch.
     */
    where?: TokenWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenWhitelists to fetch.
     */
    orderBy?: TokenWhitelistOrderByWithRelationInput | TokenWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenWhitelists.
     */
    cursor?: TokenWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenWhitelists.
     */
    distinct?: TokenWhitelistScalarFieldEnum | TokenWhitelistScalarFieldEnum[]
  }


  /**
   * TokenWhitelist findMany
   */
  export type TokenWhitelistFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * Filter, which TokenWhitelists to fetch.
     */
    where?: TokenWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenWhitelists to fetch.
     */
    orderBy?: TokenWhitelistOrderByWithRelationInput | TokenWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenWhitelists.
     */
    cursor?: TokenWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenWhitelists.
     */
    skip?: number
    distinct?: TokenWhitelistScalarFieldEnum | TokenWhitelistScalarFieldEnum[]
  }


  /**
   * TokenWhitelist create
   */
  export type TokenWhitelistCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenWhitelist.
     */
    data: XOR<TokenWhitelistCreateInput, TokenWhitelistUncheckedCreateInput>
  }


  /**
   * TokenWhitelist createMany
   */
  export type TokenWhitelistCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenWhitelists.
     */
    data: TokenWhitelistCreateManyInput | TokenWhitelistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TokenWhitelist update
   */
  export type TokenWhitelistUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenWhitelist.
     */
    data: XOR<TokenWhitelistUpdateInput, TokenWhitelistUncheckedUpdateInput>
    /**
     * Choose, which TokenWhitelist to update.
     */
    where: TokenWhitelistWhereUniqueInput
  }


  /**
   * TokenWhitelist updateMany
   */
  export type TokenWhitelistUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenWhitelists.
     */
    data: XOR<TokenWhitelistUpdateManyMutationInput, TokenWhitelistUncheckedUpdateManyInput>
    /**
     * Filter which TokenWhitelists to update
     */
    where?: TokenWhitelistWhereInput
  }


  /**
   * TokenWhitelist upsert
   */
  export type TokenWhitelistUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenWhitelist to update in case it exists.
     */
    where: TokenWhitelistWhereUniqueInput
    /**
     * In case the TokenWhitelist found by the `where` argument doesn't exist, create a new TokenWhitelist with this data.
     */
    create: XOR<TokenWhitelistCreateInput, TokenWhitelistUncheckedCreateInput>
    /**
     * In case the TokenWhitelist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenWhitelistUpdateInput, TokenWhitelistUncheckedUpdateInput>
  }


  /**
   * TokenWhitelist delete
   */
  export type TokenWhitelistDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
    /**
     * Filter which TokenWhitelist to delete.
     */
    where: TokenWhitelistWhereUniqueInput
  }


  /**
   * TokenWhitelist deleteMany
   */
  export type TokenWhitelistDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenWhitelists to delete
     */
    where?: TokenWhitelistWhereInput
  }


  /**
   * TokenWhitelist without action
   */
  export type TokenWhitelistDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenWhitelist
     */
    select?: TokenWhitelistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TokenWhitelistInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    email: 'email',
    name: 'name',
    direccion: 'direccion',
    image: 'image',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    name: 'name',
    price: 'price',
    codigo: 'codigo',
    stock: 'stock',
    descripcionExtras: 'descripcionExtras',
    createdAt: 'createdAt',
    categoryId: 'categoryId',
    distribuidorId: 'distribuidorId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const DistribuidorScalarFieldEnum: {
    name: 'name',
    createdAt: 'createdAt'
  };

  export type DistribuidorScalarFieldEnum = (typeof DistribuidorScalarFieldEnum)[keyof typeof DistribuidorScalarFieldEnum]


  export const CarritoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    cantidad: 'cantidad',
    createdAt: 'createdAt'
  };

  export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TokenWhitelistScalarFieldEnum: {
    jti: 'jti',
    lastActivity: 'lastActivity',
    userId: 'userId'
  };

  export type TokenWhitelistScalarFieldEnum = (typeof TokenWhitelistScalarFieldEnum)[keyof typeof TokenWhitelistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    direccion?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    carritos?: CarritoListRelationFilter
    tokenWhitelist?: TokenWhitelistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    email?: SortOrder
    name?: SortOrder
    direccion?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    carritos?: CarritoOrderByRelationAggregateInput
    tokenWhitelist?: TokenWhitelistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    direccion?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    carritos?: CarritoListRelationFilter
    tokenWhitelist?: TokenWhitelistListRelationFilter
  }, "email">

  export type UserOrderByWithAggregationInput = {
    email?: SortOrder
    name?: SortOrder
    direccion?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    direccion?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    codigo?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    descripcionExtras?: JsonFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    categoryId?: StringFilter<"Product"> | string
    distribuidorId?: StringFilter<"Product"> | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    distribuidor?: XOR<DistribuidorRelationFilter, DistribuidorWhereInput>
    carritos?: CarritoListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    name?: SortOrder
    price?: SortOrder
    codigo?: SortOrder
    stock?: SortOrder
    descripcionExtras?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    distribuidorId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    distribuidor?: DistribuidorOrderByWithRelationInput
    carritos?: CarritoOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    price?: IntFilter<"Product"> | number
    codigo?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    descripcionExtras?: JsonFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    categoryId?: StringFilter<"Product"> | string
    distribuidorId?: StringFilter<"Product"> | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    distribuidor?: XOR<DistribuidorRelationFilter, DistribuidorWhereInput>
    carritos?: CarritoListRelationFilter
  }, "name">

  export type ProductOrderByWithAggregationInput = {
    name?: SortOrder
    price?: SortOrder
    codigo?: SortOrder
    stock?: SortOrder
    descripcionExtras?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    distribuidorId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    codigo?: StringWithAggregatesFilter<"Product"> | string
    stock?: IntWithAggregatesFilter<"Product"> | number
    descripcionExtras?: JsonWithAggregatesFilter<"Product">
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    distribuidorId?: StringWithAggregatesFilter<"Product"> | string
  }

  export type DistribuidorWhereInput = {
    AND?: DistribuidorWhereInput | DistribuidorWhereInput[]
    OR?: DistribuidorWhereInput[]
    NOT?: DistribuidorWhereInput | DistribuidorWhereInput[]
    name?: StringFilter<"Distribuidor"> | string
    createdAt?: DateTimeFilter<"Distribuidor"> | Date | string
    products?: ProductListRelationFilter
  }

  export type DistribuidorOrderByWithRelationInput = {
    name?: SortOrder
    createdAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type DistribuidorWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: DistribuidorWhereInput | DistribuidorWhereInput[]
    OR?: DistribuidorWhereInput[]
    NOT?: DistribuidorWhereInput | DistribuidorWhereInput[]
    createdAt?: DateTimeFilter<"Distribuidor"> | Date | string
    products?: ProductListRelationFilter
  }, "name">

  export type DistribuidorOrderByWithAggregationInput = {
    name?: SortOrder
    createdAt?: SortOrder
    _count?: DistribuidorCountOrderByAggregateInput
    _max?: DistribuidorMaxOrderByAggregateInput
    _min?: DistribuidorMinOrderByAggregateInput
  }

  export type DistribuidorScalarWhereWithAggregatesInput = {
    AND?: DistribuidorScalarWhereWithAggregatesInput | DistribuidorScalarWhereWithAggregatesInput[]
    OR?: DistribuidorScalarWhereWithAggregatesInput[]
    NOT?: DistribuidorScalarWhereWithAggregatesInput | DistribuidorScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Distribuidor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Distribuidor"> | Date | string
  }

  export type CarritoWhereInput = {
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    id?: IntFilter<"Carrito"> | number
    userId?: StringFilter<"Carrito"> | string
    productId?: StringFilter<"Carrito"> | string
    cantidad?: IntFilter<"Carrito"> | number
    createdAt?: DateTimeFilter<"Carrito"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type CarritoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    cantidad?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type CarritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    userId?: StringFilter<"Carrito"> | string
    productId?: StringFilter<"Carrito"> | string
    cantidad?: IntFilter<"Carrito"> | number
    createdAt?: DateTimeFilter<"Carrito"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type CarritoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    cantidad?: SortOrder
    createdAt?: SortOrder
    _count?: CarritoCountOrderByAggregateInput
    _avg?: CarritoAvgOrderByAggregateInput
    _max?: CarritoMaxOrderByAggregateInput
    _min?: CarritoMinOrderByAggregateInput
    _sum?: CarritoSumOrderByAggregateInput
  }

  export type CarritoScalarWhereWithAggregatesInput = {
    AND?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    OR?: CarritoScalarWhereWithAggregatesInput[]
    NOT?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrito"> | number
    userId?: StringWithAggregatesFilter<"Carrito"> | string
    productId?: StringWithAggregatesFilter<"Carrito"> | string
    cantidad?: IntWithAggregatesFilter<"Carrito"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Carrito"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    name?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    products?: ProductListRelationFilter
  }, "name">

  export type CategoryOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type TokenWhitelistWhereInput = {
    AND?: TokenWhitelistWhereInput | TokenWhitelistWhereInput[]
    OR?: TokenWhitelistWhereInput[]
    NOT?: TokenWhitelistWhereInput | TokenWhitelistWhereInput[]
    jti?: StringFilter<"TokenWhitelist"> | string
    lastActivity?: DateTimeFilter<"TokenWhitelist"> | Date | string
    userId?: StringFilter<"TokenWhitelist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenWhitelistOrderByWithRelationInput = {
    jti?: SortOrder
    lastActivity?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhitelistWhereUniqueInput = Prisma.AtLeast<{
    jti?: string
    AND?: TokenWhitelistWhereInput | TokenWhitelistWhereInput[]
    OR?: TokenWhitelistWhereInput[]
    NOT?: TokenWhitelistWhereInput | TokenWhitelistWhereInput[]
    lastActivity?: DateTimeFilter<"TokenWhitelist"> | Date | string
    userId?: StringFilter<"TokenWhitelist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "jti">

  export type TokenWhitelistOrderByWithAggregationInput = {
    jti?: SortOrder
    lastActivity?: SortOrder
    userId?: SortOrder
    _count?: TokenWhitelistCountOrderByAggregateInput
    _max?: TokenWhitelistMaxOrderByAggregateInput
    _min?: TokenWhitelistMinOrderByAggregateInput
  }

  export type TokenWhitelistScalarWhereWithAggregatesInput = {
    AND?: TokenWhitelistScalarWhereWithAggregatesInput | TokenWhitelistScalarWhereWithAggregatesInput[]
    OR?: TokenWhitelistScalarWhereWithAggregatesInput[]
    NOT?: TokenWhitelistScalarWhereWithAggregatesInput | TokenWhitelistScalarWhereWithAggregatesInput[]
    jti?: StringWithAggregatesFilter<"TokenWhitelist"> | string
    lastActivity?: DateTimeWithAggregatesFilter<"TokenWhitelist"> | Date | string
    userId?: StringWithAggregatesFilter<"TokenWhitelist"> | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    direccion?: string | null
    image?: string | null
    password: string
    carritos?: CarritoCreateNestedManyWithoutUserInput
    tokenWhitelist?: TokenWhitelistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    email: string
    name: string
    direccion?: string | null
    image?: string | null
    password: string
    carritos?: CarritoUncheckedCreateNestedManyWithoutUserInput
    tokenWhitelist?: TokenWhitelistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    carritos?: CarritoUpdateManyWithoutUserNestedInput
    tokenWhitelist?: TokenWhitelistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    carritos?: CarritoUncheckedUpdateManyWithoutUserNestedInput
    tokenWhitelist?: TokenWhitelistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    email: string
    name: string
    direccion?: string | null
    image?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    distribuidor: DistribuidorCreateNestedOneWithoutProductsInput
    carritos?: CarritoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categoryId: string
    distribuidorId: string
    carritos?: CarritoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    distribuidor?: DistribuidorUpdateOneRequiredWithoutProductsNestedInput
    carritos?: CarritoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    distribuidorId?: StringFieldUpdateOperationsInput | string
    carritos?: CarritoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categoryId: string
    distribuidorId: string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    distribuidorId?: StringFieldUpdateOperationsInput | string
  }

  export type DistribuidorCreateInput = {
    name: string
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutDistribuidorInput
  }

  export type DistribuidorUncheckedCreateInput = {
    name: string
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutDistribuidorInput
  }

  export type DistribuidorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutDistribuidorNestedInput
  }

  export type DistribuidorUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutDistribuidorNestedInput
  }

  export type DistribuidorCreateManyInput = {
    name: string
    createdAt?: Date | string
  }

  export type DistribuidorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistribuidorUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoCreateInput = {
    cantidad?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCarritosInput
    product: ProductCreateNestedOneWithoutCarritosInput
  }

  export type CarritoUncheckedCreateInput = {
    id?: number
    userId: string
    productId: string
    cantidad?: number
    createdAt?: Date | string
  }

  export type CarritoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCarritosNestedInput
    product?: ProductUpdateOneRequiredWithoutCarritosNestedInput
  }

  export type CarritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoCreateManyInput = {
    id?: number
    userId: string
    productId: string
    cantidad?: number
    createdAt?: Date | string
  }

  export type CarritoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TokenWhitelistCreateInput = {
    jti: string
    lastActivity: Date | string
    user: UserCreateNestedOneWithoutTokenWhitelistInput
  }

  export type TokenWhitelistUncheckedCreateInput = {
    jti: string
    lastActivity: Date | string
    userId: string
  }

  export type TokenWhitelistUpdateInput = {
    jti?: StringFieldUpdateOperationsInput | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenWhitelistNestedInput
  }

  export type TokenWhitelistUncheckedUpdateInput = {
    jti?: StringFieldUpdateOperationsInput | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenWhitelistCreateManyInput = {
    jti: string
    lastActivity: Date | string
    userId: string
  }

  export type TokenWhitelistUpdateManyMutationInput = {
    jti?: StringFieldUpdateOperationsInput | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenWhitelistUncheckedUpdateManyInput = {
    jti?: StringFieldUpdateOperationsInput | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CarritoListRelationFilter = {
    every?: CarritoWhereInput
    some?: CarritoWhereInput
    none?: CarritoWhereInput
  }

  export type TokenWhitelistListRelationFilter = {
    every?: TokenWhitelistWhereInput
    some?: TokenWhitelistWhereInput
    none?: TokenWhitelistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenWhitelistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    direccion?: SortOrder
    image?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    direccion?: SortOrder
    image?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    direccion?: SortOrder
    image?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type DistribuidorRelationFilter = {
    is?: DistribuidorWhereInput
    isNot?: DistribuidorWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    name?: SortOrder
    price?: SortOrder
    codigo?: SortOrder
    stock?: SortOrder
    descripcionExtras?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    distribuidorId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    name?: SortOrder
    price?: SortOrder
    codigo?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    distribuidorId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    name?: SortOrder
    price?: SortOrder
    codigo?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    distribuidorId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistribuidorCountOrderByAggregateInput = {
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DistribuidorMaxOrderByAggregateInput = {
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type DistribuidorMinOrderByAggregateInput = {
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CarritoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    cantidad?: SortOrder
    createdAt?: SortOrder
  }

  export type CarritoAvgOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
  }

  export type CarritoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    cantidad?: SortOrder
    createdAt?: SortOrder
  }

  export type CarritoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    cantidad?: SortOrder
    createdAt?: SortOrder
  }

  export type CarritoSumOrderByAggregateInput = {
    id?: SortOrder
    cantidad?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type TokenWhitelistCountOrderByAggregateInput = {
    jti?: SortOrder
    lastActivity?: SortOrder
    userId?: SortOrder
  }

  export type TokenWhitelistMaxOrderByAggregateInput = {
    jti?: SortOrder
    lastActivity?: SortOrder
    userId?: SortOrder
  }

  export type TokenWhitelistMinOrderByAggregateInput = {
    jti?: SortOrder
    lastActivity?: SortOrder
    userId?: SortOrder
  }

  export type CarritoCreateNestedManyWithoutUserInput = {
    create?: XOR<CarritoCreateWithoutUserInput, CarritoUncheckedCreateWithoutUserInput> | CarritoCreateWithoutUserInput[] | CarritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutUserInput | CarritoCreateOrConnectWithoutUserInput[]
    createMany?: CarritoCreateManyUserInputEnvelope
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
  }

  export type TokenWhitelistCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenWhitelistCreateWithoutUserInput, TokenWhitelistUncheckedCreateWithoutUserInput> | TokenWhitelistCreateWithoutUserInput[] | TokenWhitelistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenWhitelistCreateOrConnectWithoutUserInput | TokenWhitelistCreateOrConnectWithoutUserInput[]
    createMany?: TokenWhitelistCreateManyUserInputEnvelope
    connect?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
  }

  export type CarritoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CarritoCreateWithoutUserInput, CarritoUncheckedCreateWithoutUserInput> | CarritoCreateWithoutUserInput[] | CarritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutUserInput | CarritoCreateOrConnectWithoutUserInput[]
    createMany?: CarritoCreateManyUserInputEnvelope
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
  }

  export type TokenWhitelistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenWhitelistCreateWithoutUserInput, TokenWhitelistUncheckedCreateWithoutUserInput> | TokenWhitelistCreateWithoutUserInput[] | TokenWhitelistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenWhitelistCreateOrConnectWithoutUserInput | TokenWhitelistCreateOrConnectWithoutUserInput[]
    createMany?: TokenWhitelistCreateManyUserInputEnvelope
    connect?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CarritoUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarritoCreateWithoutUserInput, CarritoUncheckedCreateWithoutUserInput> | CarritoCreateWithoutUserInput[] | CarritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutUserInput | CarritoCreateOrConnectWithoutUserInput[]
    upsert?: CarritoUpsertWithWhereUniqueWithoutUserInput | CarritoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarritoCreateManyUserInputEnvelope
    set?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    disconnect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    delete?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    update?: CarritoUpdateWithWhereUniqueWithoutUserInput | CarritoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarritoUpdateManyWithWhereWithoutUserInput | CarritoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
  }

  export type TokenWhitelistUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenWhitelistCreateWithoutUserInput, TokenWhitelistUncheckedCreateWithoutUserInput> | TokenWhitelistCreateWithoutUserInput[] | TokenWhitelistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenWhitelistCreateOrConnectWithoutUserInput | TokenWhitelistCreateOrConnectWithoutUserInput[]
    upsert?: TokenWhitelistUpsertWithWhereUniqueWithoutUserInput | TokenWhitelistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenWhitelistCreateManyUserInputEnvelope
    set?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
    disconnect?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
    delete?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
    connect?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
    update?: TokenWhitelistUpdateWithWhereUniqueWithoutUserInput | TokenWhitelistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenWhitelistUpdateManyWithWhereWithoutUserInput | TokenWhitelistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenWhitelistScalarWhereInput | TokenWhitelistScalarWhereInput[]
  }

  export type CarritoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CarritoCreateWithoutUserInput, CarritoUncheckedCreateWithoutUserInput> | CarritoCreateWithoutUserInput[] | CarritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutUserInput | CarritoCreateOrConnectWithoutUserInput[]
    upsert?: CarritoUpsertWithWhereUniqueWithoutUserInput | CarritoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CarritoCreateManyUserInputEnvelope
    set?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    disconnect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    delete?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    update?: CarritoUpdateWithWhereUniqueWithoutUserInput | CarritoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CarritoUpdateManyWithWhereWithoutUserInput | CarritoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
  }

  export type TokenWhitelistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenWhitelistCreateWithoutUserInput, TokenWhitelistUncheckedCreateWithoutUserInput> | TokenWhitelistCreateWithoutUserInput[] | TokenWhitelistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenWhitelistCreateOrConnectWithoutUserInput | TokenWhitelistCreateOrConnectWithoutUserInput[]
    upsert?: TokenWhitelistUpsertWithWhereUniqueWithoutUserInput | TokenWhitelistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenWhitelistCreateManyUserInputEnvelope
    set?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
    disconnect?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
    delete?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
    connect?: TokenWhitelistWhereUniqueInput | TokenWhitelistWhereUniqueInput[]
    update?: TokenWhitelistUpdateWithWhereUniqueWithoutUserInput | TokenWhitelistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenWhitelistUpdateManyWithWhereWithoutUserInput | TokenWhitelistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenWhitelistScalarWhereInput | TokenWhitelistScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type DistribuidorCreateNestedOneWithoutProductsInput = {
    create?: XOR<DistribuidorCreateWithoutProductsInput, DistribuidorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: DistribuidorCreateOrConnectWithoutProductsInput
    connect?: DistribuidorWhereUniqueInput
  }

  export type CarritoCreateNestedManyWithoutProductInput = {
    create?: XOR<CarritoCreateWithoutProductInput, CarritoUncheckedCreateWithoutProductInput> | CarritoCreateWithoutProductInput[] | CarritoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutProductInput | CarritoCreateOrConnectWithoutProductInput[]
    createMany?: CarritoCreateManyProductInputEnvelope
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
  }

  export type CarritoUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CarritoCreateWithoutProductInput, CarritoUncheckedCreateWithoutProductInput> | CarritoCreateWithoutProductInput[] | CarritoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutProductInput | CarritoCreateOrConnectWithoutProductInput[]
    createMany?: CarritoCreateManyProductInputEnvelope
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type DistribuidorUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<DistribuidorCreateWithoutProductsInput, DistribuidorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: DistribuidorCreateOrConnectWithoutProductsInput
    upsert?: DistribuidorUpsertWithoutProductsInput
    connect?: DistribuidorWhereUniqueInput
    update?: XOR<XOR<DistribuidorUpdateToOneWithWhereWithoutProductsInput, DistribuidorUpdateWithoutProductsInput>, DistribuidorUncheckedUpdateWithoutProductsInput>
  }

  export type CarritoUpdateManyWithoutProductNestedInput = {
    create?: XOR<CarritoCreateWithoutProductInput, CarritoUncheckedCreateWithoutProductInput> | CarritoCreateWithoutProductInput[] | CarritoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutProductInput | CarritoCreateOrConnectWithoutProductInput[]
    upsert?: CarritoUpsertWithWhereUniqueWithoutProductInput | CarritoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CarritoCreateManyProductInputEnvelope
    set?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    disconnect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    delete?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    update?: CarritoUpdateWithWhereUniqueWithoutProductInput | CarritoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CarritoUpdateManyWithWhereWithoutProductInput | CarritoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
  }

  export type CarritoUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CarritoCreateWithoutProductInput, CarritoUncheckedCreateWithoutProductInput> | CarritoCreateWithoutProductInput[] | CarritoUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CarritoCreateOrConnectWithoutProductInput | CarritoCreateOrConnectWithoutProductInput[]
    upsert?: CarritoUpsertWithWhereUniqueWithoutProductInput | CarritoUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CarritoCreateManyProductInputEnvelope
    set?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    disconnect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    delete?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    connect?: CarritoWhereUniqueInput | CarritoWhereUniqueInput[]
    update?: CarritoUpdateWithWhereUniqueWithoutProductInput | CarritoUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CarritoUpdateManyWithWhereWithoutProductInput | CarritoUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutDistribuidorInput = {
    create?: XOR<ProductCreateWithoutDistribuidorInput, ProductUncheckedCreateWithoutDistribuidorInput> | ProductCreateWithoutDistribuidorInput[] | ProductUncheckedCreateWithoutDistribuidorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDistribuidorInput | ProductCreateOrConnectWithoutDistribuidorInput[]
    createMany?: ProductCreateManyDistribuidorInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutDistribuidorInput = {
    create?: XOR<ProductCreateWithoutDistribuidorInput, ProductUncheckedCreateWithoutDistribuidorInput> | ProductCreateWithoutDistribuidorInput[] | ProductUncheckedCreateWithoutDistribuidorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDistribuidorInput | ProductCreateOrConnectWithoutDistribuidorInput[]
    createMany?: ProductCreateManyDistribuidorInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutDistribuidorNestedInput = {
    create?: XOR<ProductCreateWithoutDistribuidorInput, ProductUncheckedCreateWithoutDistribuidorInput> | ProductCreateWithoutDistribuidorInput[] | ProductUncheckedCreateWithoutDistribuidorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDistribuidorInput | ProductCreateOrConnectWithoutDistribuidorInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutDistribuidorInput | ProductUpsertWithWhereUniqueWithoutDistribuidorInput[]
    createMany?: ProductCreateManyDistribuidorInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutDistribuidorInput | ProductUpdateWithWhereUniqueWithoutDistribuidorInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutDistribuidorInput | ProductUpdateManyWithWhereWithoutDistribuidorInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutDistribuidorNestedInput = {
    create?: XOR<ProductCreateWithoutDistribuidorInput, ProductUncheckedCreateWithoutDistribuidorInput> | ProductCreateWithoutDistribuidorInput[] | ProductUncheckedCreateWithoutDistribuidorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutDistribuidorInput | ProductCreateOrConnectWithoutDistribuidorInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutDistribuidorInput | ProductUpsertWithWhereUniqueWithoutDistribuidorInput[]
    createMany?: ProductCreateManyDistribuidorInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutDistribuidorInput | ProductUpdateWithWhereUniqueWithoutDistribuidorInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutDistribuidorInput | ProductUpdateManyWithWhereWithoutDistribuidorInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCarritosInput = {
    create?: XOR<UserCreateWithoutCarritosInput, UserUncheckedCreateWithoutCarritosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarritosInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCarritosInput = {
    create?: XOR<ProductCreateWithoutCarritosInput, ProductUncheckedCreateWithoutCarritosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCarritosInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCarritosNestedInput = {
    create?: XOR<UserCreateWithoutCarritosInput, UserUncheckedCreateWithoutCarritosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCarritosInput
    upsert?: UserUpsertWithoutCarritosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCarritosInput, UserUpdateWithoutCarritosInput>, UserUncheckedUpdateWithoutCarritosInput>
  }

  export type ProductUpdateOneRequiredWithoutCarritosNestedInput = {
    create?: XOR<ProductCreateWithoutCarritosInput, ProductUncheckedCreateWithoutCarritosInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCarritosInput
    upsert?: ProductUpsertWithoutCarritosInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCarritosInput, ProductUpdateWithoutCarritosInput>, ProductUncheckedUpdateWithoutCarritosInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokenWhitelistInput = {
    create?: XOR<UserCreateWithoutTokenWhitelistInput, UserUncheckedCreateWithoutTokenWhitelistInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenWhitelistInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokenWhitelistNestedInput = {
    create?: XOR<UserCreateWithoutTokenWhitelistInput, UserUncheckedCreateWithoutTokenWhitelistInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenWhitelistInput
    upsert?: UserUpsertWithoutTokenWhitelistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenWhitelistInput, UserUpdateWithoutTokenWhitelistInput>, UserUncheckedUpdateWithoutTokenWhitelistInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CarritoCreateWithoutUserInput = {
    cantidad?: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutCarritosInput
  }

  export type CarritoUncheckedCreateWithoutUserInput = {
    id?: number
    productId: string
    cantidad?: number
    createdAt?: Date | string
  }

  export type CarritoCreateOrConnectWithoutUserInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutUserInput, CarritoUncheckedCreateWithoutUserInput>
  }

  export type CarritoCreateManyUserInputEnvelope = {
    data: CarritoCreateManyUserInput | CarritoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenWhitelistCreateWithoutUserInput = {
    jti: string
    lastActivity: Date | string
  }

  export type TokenWhitelistUncheckedCreateWithoutUserInput = {
    jti: string
    lastActivity: Date | string
  }

  export type TokenWhitelistCreateOrConnectWithoutUserInput = {
    where: TokenWhitelistWhereUniqueInput
    create: XOR<TokenWhitelistCreateWithoutUserInput, TokenWhitelistUncheckedCreateWithoutUserInput>
  }

  export type TokenWhitelistCreateManyUserInputEnvelope = {
    data: TokenWhitelistCreateManyUserInput | TokenWhitelistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CarritoUpsertWithWhereUniqueWithoutUserInput = {
    where: CarritoWhereUniqueInput
    update: XOR<CarritoUpdateWithoutUserInput, CarritoUncheckedUpdateWithoutUserInput>
    create: XOR<CarritoCreateWithoutUserInput, CarritoUncheckedCreateWithoutUserInput>
  }

  export type CarritoUpdateWithWhereUniqueWithoutUserInput = {
    where: CarritoWhereUniqueInput
    data: XOR<CarritoUpdateWithoutUserInput, CarritoUncheckedUpdateWithoutUserInput>
  }

  export type CarritoUpdateManyWithWhereWithoutUserInput = {
    where: CarritoScalarWhereInput
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyWithoutUserInput>
  }

  export type CarritoScalarWhereInput = {
    AND?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
    OR?: CarritoScalarWhereInput[]
    NOT?: CarritoScalarWhereInput | CarritoScalarWhereInput[]
    id?: IntFilter<"Carrito"> | number
    userId?: StringFilter<"Carrito"> | string
    productId?: StringFilter<"Carrito"> | string
    cantidad?: IntFilter<"Carrito"> | number
    createdAt?: DateTimeFilter<"Carrito"> | Date | string
  }

  export type TokenWhitelistUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhitelistWhereUniqueInput
    update: XOR<TokenWhitelistUpdateWithoutUserInput, TokenWhitelistUncheckedUpdateWithoutUserInput>
    create: XOR<TokenWhitelistCreateWithoutUserInput, TokenWhitelistUncheckedCreateWithoutUserInput>
  }

  export type TokenWhitelistUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhitelistWhereUniqueInput
    data: XOR<TokenWhitelistUpdateWithoutUserInput, TokenWhitelistUncheckedUpdateWithoutUserInput>
  }

  export type TokenWhitelistUpdateManyWithWhereWithoutUserInput = {
    where: TokenWhitelistScalarWhereInput
    data: XOR<TokenWhitelistUpdateManyMutationInput, TokenWhitelistUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenWhitelistScalarWhereInput = {
    AND?: TokenWhitelistScalarWhereInput | TokenWhitelistScalarWhereInput[]
    OR?: TokenWhitelistScalarWhereInput[]
    NOT?: TokenWhitelistScalarWhereInput | TokenWhitelistScalarWhereInput[]
    jti?: StringFilter<"TokenWhitelist"> | string
    lastActivity?: DateTimeFilter<"TokenWhitelist"> | Date | string
    userId?: StringFilter<"TokenWhitelist"> | string
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    name: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type DistribuidorCreateWithoutProductsInput = {
    name: string
    createdAt?: Date | string
  }

  export type DistribuidorUncheckedCreateWithoutProductsInput = {
    name: string
    createdAt?: Date | string
  }

  export type DistribuidorCreateOrConnectWithoutProductsInput = {
    where: DistribuidorWhereUniqueInput
    create: XOR<DistribuidorCreateWithoutProductsInput, DistribuidorUncheckedCreateWithoutProductsInput>
  }

  export type CarritoCreateWithoutProductInput = {
    cantidad?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCarritosInput
  }

  export type CarritoUncheckedCreateWithoutProductInput = {
    id?: number
    userId: string
    cantidad?: number
    createdAt?: Date | string
  }

  export type CarritoCreateOrConnectWithoutProductInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutProductInput, CarritoUncheckedCreateWithoutProductInput>
  }

  export type CarritoCreateManyProductInputEnvelope = {
    data: CarritoCreateManyProductInput | CarritoCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistribuidorUpsertWithoutProductsInput = {
    update: XOR<DistribuidorUpdateWithoutProductsInput, DistribuidorUncheckedUpdateWithoutProductsInput>
    create: XOR<DistribuidorCreateWithoutProductsInput, DistribuidorUncheckedCreateWithoutProductsInput>
    where?: DistribuidorWhereInput
  }

  export type DistribuidorUpdateToOneWithWhereWithoutProductsInput = {
    where?: DistribuidorWhereInput
    data: XOR<DistribuidorUpdateWithoutProductsInput, DistribuidorUncheckedUpdateWithoutProductsInput>
  }

  export type DistribuidorUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistribuidorUncheckedUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoUpsertWithWhereUniqueWithoutProductInput = {
    where: CarritoWhereUniqueInput
    update: XOR<CarritoUpdateWithoutProductInput, CarritoUncheckedUpdateWithoutProductInput>
    create: XOR<CarritoCreateWithoutProductInput, CarritoUncheckedCreateWithoutProductInput>
  }

  export type CarritoUpdateWithWhereUniqueWithoutProductInput = {
    where: CarritoWhereUniqueInput
    data: XOR<CarritoUpdateWithoutProductInput, CarritoUncheckedUpdateWithoutProductInput>
  }

  export type CarritoUpdateManyWithWhereWithoutProductInput = {
    where: CarritoScalarWhereInput
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutDistribuidorInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    carritos?: CarritoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDistribuidorInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categoryId: string
    carritos?: CarritoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDistribuidorInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDistribuidorInput, ProductUncheckedCreateWithoutDistribuidorInput>
  }

  export type ProductCreateManyDistribuidorInputEnvelope = {
    data: ProductCreateManyDistribuidorInput | ProductCreateManyDistribuidorInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutDistribuidorInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutDistribuidorInput, ProductUncheckedUpdateWithoutDistribuidorInput>
    create: XOR<ProductCreateWithoutDistribuidorInput, ProductUncheckedCreateWithoutDistribuidorInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutDistribuidorInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutDistribuidorInput, ProductUncheckedUpdateWithoutDistribuidorInput>
  }

  export type ProductUpdateManyWithWhereWithoutDistribuidorInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutDistribuidorInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    codigo?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    descripcionExtras?: JsonFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    categoryId?: StringFilter<"Product"> | string
    distribuidorId?: StringFilter<"Product"> | string
  }

  export type UserCreateWithoutCarritosInput = {
    email: string
    name: string
    direccion?: string | null
    image?: string | null
    password: string
    tokenWhitelist?: TokenWhitelistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCarritosInput = {
    email: string
    name: string
    direccion?: string | null
    image?: string | null
    password: string
    tokenWhitelist?: TokenWhitelistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCarritosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCarritosInput, UserUncheckedCreateWithoutCarritosInput>
  }

  export type ProductCreateWithoutCarritosInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    distribuidor: DistribuidorCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCarritosInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categoryId: string
    distribuidorId: string
  }

  export type ProductCreateOrConnectWithoutCarritosInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCarritosInput, ProductUncheckedCreateWithoutCarritosInput>
  }

  export type UserUpsertWithoutCarritosInput = {
    update: XOR<UserUpdateWithoutCarritosInput, UserUncheckedUpdateWithoutCarritosInput>
    create: XOR<UserCreateWithoutCarritosInput, UserUncheckedCreateWithoutCarritosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCarritosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCarritosInput, UserUncheckedUpdateWithoutCarritosInput>
  }

  export type UserUpdateWithoutCarritosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tokenWhitelist?: TokenWhitelistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCarritosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tokenWhitelist?: TokenWhitelistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutCarritosInput = {
    update: XOR<ProductUpdateWithoutCarritosInput, ProductUncheckedUpdateWithoutCarritosInput>
    create: XOR<ProductCreateWithoutCarritosInput, ProductUncheckedCreateWithoutCarritosInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCarritosInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCarritosInput, ProductUncheckedUpdateWithoutCarritosInput>
  }

  export type ProductUpdateWithoutCarritosInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    distribuidor?: DistribuidorUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCarritosInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    distribuidorId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    distribuidor: DistribuidorCreateNestedOneWithoutProductsInput
    carritos?: CarritoCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    distribuidorId: string
    carritos?: CarritoUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutTokenWhitelistInput = {
    email: string
    name: string
    direccion?: string | null
    image?: string | null
    password: string
    carritos?: CarritoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenWhitelistInput = {
    email: string
    name: string
    direccion?: string | null
    image?: string | null
    password: string
    carritos?: CarritoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenWhitelistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenWhitelistInput, UserUncheckedCreateWithoutTokenWhitelistInput>
  }

  export type UserUpsertWithoutTokenWhitelistInput = {
    update: XOR<UserUpdateWithoutTokenWhitelistInput, UserUncheckedUpdateWithoutTokenWhitelistInput>
    create: XOR<UserCreateWithoutTokenWhitelistInput, UserUncheckedCreateWithoutTokenWhitelistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenWhitelistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenWhitelistInput, UserUncheckedUpdateWithoutTokenWhitelistInput>
  }

  export type UserUpdateWithoutTokenWhitelistInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    carritos?: CarritoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenWhitelistInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    carritos?: CarritoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarritoCreateManyUserInput = {
    id?: number
    productId: string
    cantidad?: number
    createdAt?: Date | string
  }

  export type TokenWhitelistCreateManyUserInput = {
    jti: string
    lastActivity: Date | string
  }

  export type CarritoUpdateWithoutUserInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCarritosNestedInput
  }

  export type CarritoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenWhitelistUpdateWithoutUserInput = {
    jti?: StringFieldUpdateOperationsInput | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenWhitelistUncheckedUpdateWithoutUserInput = {
    jti?: StringFieldUpdateOperationsInput | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenWhitelistUncheckedUpdateManyWithoutUserInput = {
    jti?: StringFieldUpdateOperationsInput | string
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoCreateManyProductInput = {
    id?: number
    userId: string
    cantidad?: number
    createdAt?: Date | string
  }

  export type CarritoUpdateWithoutProductInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCarritosNestedInput
  }

  export type CarritoUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarritoUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyDistribuidorInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    categoryId: string
  }

  export type ProductUpdateWithoutDistribuidorInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    carritos?: CarritoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDistribuidorInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    carritos?: CarritoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutDistribuidorInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    name: string
    price?: number
    codigo: string
    stock?: number
    descripcionExtras: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    distribuidorId: string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribuidor?: DistribuidorUpdateOneRequiredWithoutProductsNestedInput
    carritos?: CarritoUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribuidorId?: StringFieldUpdateOperationsInput | string
    carritos?: CarritoUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    descripcionExtras?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distribuidorId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistribuidorDefaultArgs instead
     */
    export type DistribuidorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DistribuidorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarritoDefaultArgs instead
     */
    export type CarritoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CarritoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenWhitelistDefaultArgs instead
     */
    export type TokenWhitelistArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TokenWhitelistDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}