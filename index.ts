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
