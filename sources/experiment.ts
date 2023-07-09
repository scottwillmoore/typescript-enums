{
	type Club = 0;
	type Diamond = 1;
	type Heart = 2;
	type Spade = 3;

	// The `Club`, `Diamond`, `Heart` and `Spade` types are not preserved...
	type Suit = Club | Diamond | Heart | Spade;
}

{
	type Identity<T> = T;

	// @ts-ignore
	interface Club extends Identity<0> {}
	// @ts-ignore
	interface Diamond extends Identity<1> {}
	// @ts-ignore
	interface Heart extends Identity<2> {}
	// @ts-ignore
	interface Spade extends Identity<3> {}

	// The `Club`, `Diamond`, `Heart` and `Spade` types are not preserved...
	type Suit = Club | Diamond | Heart | Spade;
}

{
	// @ts-ignore
	declare const type: unique symbol;
	type NewType<T, Type> = T & { [type]: Type };

	// @ts-ignore
	declare const suitType: unique symbol;
	type SuitType = typeof suitType;

	type Club = NewType<0, SuitType>;
	type Diamond = NewType<1, SuitType>;
	type Heart = NewType<2, SuitType>;
	type Spade = NewType<3, SuitType>;

	type Suit = Club | Diamond | Heart | Spade;

	let suit: Suit;

	// Literal number
	suit = 0;
	suit = 4;

	// Number
	// @ts-ignore
	declare const number: number;
	suit = number;

	// Null and undefined
	suit = null;
	suit = undefined;

	// @ts-ignore
	declare const suit2: Suit;
	suit = suit;
	suit = suit2;

	// @ts-ignore
	declare const rankType: unique symbol;
	type RankType = typeof rankType;
	type Ace = NewType<0, RankType>;
	type Rank = Ace;
	// @ts-ignore
	declare const rank: Rank;
	suit = rank;

	type MaybeNull<T> = T | null;
	type MaybeNullSuit = MaybeNull<Suit>;
	let maybeNullSuit: MaybeNullSuit;
	maybeNullSuit = 0;
	maybeNullSuit = 4;
	maybeNullSuit = null;
	maybeNullSuit = undefined;
	maybeNullSuit = number;
	maybeNullSuit = suit;
	maybeNullSuit = suit2;
	maybeNullSuit = rank;

	type MaybeUndefined<T> = T | undefined;
	type MaybeUndefinedSuit = MaybeUndefined<Suit>;
	let maybeUndefinedSuit: MaybeUndefinedSuit;
	maybeUndefinedSuit = 0;
	maybeUndefinedSuit = 4;
	maybeUndefinedSuit = null;
	maybeUndefinedSuit = undefined;
	maybeUndefinedSuit = number;
	maybeUndefinedSuit = suit;
	maybeUndefinedSuit = suit2;
	maybeUndefinedSuit = rank;
}

{
	// @ts-ignore
	declare const suitType: unique symbol;
	type SuitType<T> = T & { [suitType]: never };

	type Club = SuitType<0>;
	type Diamond = SuitType<1>;
	type Heart = SuitType<2>;
	type Spade = SuitType<3>;

	type Suit = Club | Diamond | Heart | Spade;
}
