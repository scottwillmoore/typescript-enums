// {
// 	enum Suit {
// 		Club,
// 		Diamond,
// 		Heart,
// 		Spade,
// 	}
// }

{
	enum Suit {
		Club = 0,
		Diamond = 1,
		Heart = 2,
		Spade = 3,
	}
}

{
	enum Suit {
		Club = "club",
		Diamond = "diamond",
		Heart = "heart",
		Spade = "spade",
	}
}

// {
// 	const enum Suit {
// 		Club,
// 		Diamond,
// 		Heart,
// 		Spade,
// 	}
// }

{
	const enum Suit {
		Club = 0,
		Diamond = 1,
		Heart = 2,
		Spade = 3,
	}
}

{
	const enum Suit {
		Club = "club",
		Diamond = "diamond",
		Heart = "heart",
		Spade = "spade",
	}
}

{
	type Suit = 0 | 1 | 2 | 3;
}

{
	type Suit = "club" | "diamond" | "heart" | "spade";
}

{
	const suits = [0, 1, 2, 3] as const;

	type Suit = (typeof suits)[number];
}

{
	const suits = ["club", "diamond", "heart", "spade"] as const;

	type Suit = (typeof suits)[number];
}

{
	const suits = {
		club: 0,
		diamond: 1,
		heart: 2,
		spade: 3,
	} as const;

	type Suit = (typeof suits)[keyof typeof suits];
}

{
	const suits = {
		club: "club",
		diamond: "diamond",
		heart: "heart",
		spade: "spade",
	} as const;

	type Suit = (typeof suits)[keyof typeof suits];
}

{
	type Club = 0;
	type Diamond = 1;
	type Heart = 2;
	type Spade = 3;

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

// Question: Are number literals more performant than string literals?

// Question: Are number literals produce smaller bundle sizes than string literals?

// Question: What examples produce types that can be checked for exhaustiveness?
// Question: What examples produce types that can be narrowed?

// Question: What examples can be easily iterated?

// Question: What examples can be easily refactored?
// Question: What examples can be easily renamed?

// Question: What examples have type safety?
// Question: What examples have nominal type safety?

// Question: What examples produce the best documentation?
// Question: What examples produce the best IntelliSense?

// Question: What examples work with `isolatedModules` enabled?
