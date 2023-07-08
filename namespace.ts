// (A)

enum Suit {
	Club = "club",
	Diamond = "diamond",
	Heart = "heart",
	Spade = "spade",
}

// (B)

// const enum Suit {
// 	Club = "club",
// 	Diamond = "diamond",
// 	Heart = "heart",
// 	Spade = "spade",
// }

// (C)

// const suits = ["club", "diamond", "heart", "spade"] as const;
// type Suit = (typeof suits)[number];

// (D)

// const suits = {
// 	club: "club",
// 	diamond: "diamond",
// 	heart: "heart",
// 	spade: "spade",
// } as const;
// type Suit = (typeof suits)[keyof typeof suits];

namespace Suit {
	export function greet(name: string): string {
		return `Hello, ${name}!`;
	}
}
